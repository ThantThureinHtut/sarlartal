import express from "express";
import { Request, Response } from "express";
import { prisma } from "../../../prisma/lib/prisma";
import { avatarUpload } from "../middleware/upload";
import { profile } from "node:console";
const profileRouter = express.Router();

// avatarUpload is middleware to handle the file upload for the avatar image
profileRouter.post(
  "/avatar/create",
  avatarUpload.single("image"),
  async (req: Request, res: Response) => {
    try {
      const image = req.file ? `/uploads/avatars/${req.file.filename}` : null;
      if (req.user?.id !== undefined) {
        await prisma.user.update({
          where: { id: req.user.id },
          data: { image: image || "https://placehold.co/600x750" },
        });
        res.status(200).json({ message: "Avatar updated successfully" });
        return;
      }
      res.status(401).json({ error: "Unauthorized" });
    } catch (error) {
  
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
);

profileRouter.post("/name/update", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (req.user?.id !== undefined) {
      await prisma.user.update({
        where: { id: req.user.id },
        data: { name },
      });
      res.status(200).json({ message: "Name updated successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
   
    res.status(500).json({ error: "Internal Server Error" });
  }
});

profileRouter.post("/bio/update", async (req: Request, res: Response) => {
  try {
    const { bio } = req.body;
    if (req.user?.id !== undefined) {
      await prisma.user.update({
        where: { id: req.user.id },
        data: { bio },
      });
      res.status(200).json({ message: "Bio updated successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

profileRouter.post("/status/update", async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    if (req.user?.id !== undefined) {
      await prisma.user.update({
        where: { id: req.user.id },
        data: { status },
      });
      res.status(200).json({ message: "Status updated successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

profileRouter.post("/email/update", async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (req.user?.id !== undefined) {
      await prisma.user.update({
        where: { id: req.user.id },
        data: { email },
      });
      res.status(200).json({ message: "Email updated successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default profileRouter;
