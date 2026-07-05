import { Request, Response } from "express";
import { z } from "zod";
import * as profileService from "../../services/user/profile_service";

const updateNameSchema = z.object({
  name: z.string().min(1, "name is required"),
});

const updateBioSchema = z.object({
  bio: z.string(),
});

// mirrors the `UserStatus` enum in prisma/schema.prisma
const updateStatusSchema = z.object({
  status: z.enum(["ONLINE", "IDLE", "DND", "OFFLINE", "AWAY", "BUSY", "SAD"]),
});

const updateEmailSchema = z.object({
  email: z.string().email("email must be a valid email address"),
});

export async function updateAvatar(req: Request, res: Response) {
  try {
    const image = req.file ? `/uploads/avatars/${req.file.filename}` : null;
    if (req.user?.id !== undefined) {
      await profileService.updateAvatar(req.user.id, image);
      res.status(200).json({ message: "Avatar updated successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error updating avatar:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateName(req: Request, res: Response) {
  try {
    const parsed = updateNameSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid request body" });
      return;
    }
    if (req.user?.id !== undefined) {
      await profileService.updateName(req.user.id, parsed.data.name);
      res.status(200).json({ message: "Name updated successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error updating name:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateBio(req: Request, res: Response) {
  try {
    const parsed = updateBioSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid request body" });
      return;
    }
    if (req.user?.id !== undefined) {
      await profileService.updateBio(req.user.id, parsed.data.bio);
      res.status(200).json({ message: "Bio updated successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error updating bio:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateStatus(req: Request, res: Response) {
  try {
    const parsed = updateStatusSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid request body" });
      return;
    }
    if (req.user?.id !== undefined) {
      await profileService.updateStatus(req.user.id, parsed.data.status);
      res.status(200).json({ message: "Status updated successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateEmail(req: Request, res: Response) {
  try {
    const parsed = updateEmailSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid request body" });
      return;
    }
    if (req.user?.id !== undefined) {
      await profileService.updateEmail(req.user.id, parsed.data.email);
      res.status(200).json({ message: "Email updated successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error updating email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
