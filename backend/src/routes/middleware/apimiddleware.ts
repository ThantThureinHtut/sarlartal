import { auth } from "../../lib/auth";

export async function apiMiddleware(req: any, res: any, next: any) {
  try {
    const session = await auth.api.getSession({
        headers: req.headers,
    });
    if (!session) throw new Error("Unauthorized");
    req.user = session.user; // Attach user info to the request object
    req.session = session.session; // Attach session info to the request object
    
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" }); // Respond with 401 if authentication fails
  }
}