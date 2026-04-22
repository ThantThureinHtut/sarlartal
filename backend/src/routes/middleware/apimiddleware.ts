import { NextFunction, Request, Response } from "express";
import { auth } from "../../lib/auth";
import { fromNodeHeaders } from "better-auth/node";
export async function apiMiddleware(req: Request, _res: Response, next: NextFunction) {
  try {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });
    if (session) {
      req.user = session.user;
      req.session = session.session;
    }
  } catch {
    // session lookup failed — req.user stays undefined
  }
  next(); // always proceed; routes that need auth check req.user?.id themselves
}