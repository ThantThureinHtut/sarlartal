/// <reference path="../types/express.d.ts" />
import { Request, Response } from "express";
import { prisma } from "../../prisma/lib/prisma";
import express from "express";
import z from "zod";
import { upload } from "./middleware/upload";
const apiRouter = express.Router();

apiRouter.get("/snaps", async (req: Request, res: Response) => {
  try {
    const snaps = await prisma.post.findMany({
      include: {
        user: {
          select: { name: true, image: true , status: true },
        },
        likes: true,
      },
    });

    res.json(snaps);
  } catch (error) {
    console.error("Error fetching snaps:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

apiRouter.post("/snaps/create", upload.single("image"), async (req: Request, res: Response) => {
  
  try {
    const { title } = req.body;
    const image = req.file?.path;
    if (req.user?.id !== undefined) {
      await prisma.post.create({
        data: {
          title: title,
          image_url: image || "https://placehold.co/600x750",
          userId: req?.user?.id, // Assuming req.user is set by the auth middleware
        },
      });
      res.status(201).json({ message: "Snap created successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error creating snap:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default apiRouter;
