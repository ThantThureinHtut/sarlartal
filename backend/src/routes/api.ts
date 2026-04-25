/// <reference path="../types/express.d.ts" />
import { Request, Response } from "express";
import { prisma } from "../../prisma/lib/prisma";
import express from "express";
import z from "zod";
import { upload } from "./middleware/upload";
import snapRouter from "./user/snap_route";
import profileRouter from "./user/profile_route";
import { apiMiddleware } from "./middleware/apimiddleware";
const apiRouter = express.Router();

apiRouter.use("/user/profile", apiMiddleware ,profileRouter);
apiRouter.use("/snaps", snapRouter);
apiRouter.get("/get-user", apiMiddleware, async (req: Request, res: Response) => {
  try {
    if (req.user?.id !== undefined) {
      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: {
          id: true,
          likes: true,
          savedBySnaps: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      res.status(200).json(user);
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default apiRouter;
