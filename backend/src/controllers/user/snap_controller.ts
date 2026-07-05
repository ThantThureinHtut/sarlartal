import { Request, Response } from "express";
import { z } from "zod";
import { Prisma } from "../../../generated/prisma/client";
import * as snapService from "../../services/user/snap_service";

const createSnapSchema = z.object({
  title: z.string().min(1, "title is required"),
});

const likeSnapSchema = z.object({
  snapId: z.string().min(1, "snapId is required"),
});

const bookmarkSnapSchema = z.object({
  snapId: z.string().min(1, "snapId is required"),
});

export async function getSnaps(req: Request, res: Response) {
  try {
    const snaps = await snapService.getAllSnaps();
    res.json(snaps);
  } catch (error) {
    console.error("Error fetching snaps:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getFollowingSnaps(req: Request, res: Response) {
  try {
    if (req.user?.id === undefined) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    const snaps = await snapService.getFollowingSnaps(req.user.id);
    res.json(snaps);
  } catch (error) {
    console.error("Error fetching following posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getSavedSnaps(req: Request, res: Response) {
  try {
    if (req.user?.id === undefined) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    const snaps = await snapService.getSavedSnaps(req.user.id);
    res.json(snaps);
  } catch (error) {
    console.error("Error fetching saved snaps:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function createSnap(req: Request, res: Response) {
  try {
    const parsed = createSnapSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid request body" });
      return;
    }
    const image = req.file ? `/uploads/snaps/${req.file.filename}` : null;
    if (req.user?.id !== undefined) {
      await snapService.createSnap(parsed.data.title, image, req.user.id);
      res.status(201).json({ message: "Snap created successfully" });
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error creating snap:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function likeSnap(req: Request, res: Response) {
  try {
    const parsed = likeSnapSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid request body" });
      return;
    }
    if (req.user?.id !== undefined) {
      const result = await snapService.toggleLike(req.user.id, parsed.data.snapId);
      if (result === "unliked") {
        res.status(200).json({ message: "Snap unliked successfully" });
        return;
      }
      res.status(200).json({ message: "Snap liked successfully" });
      return;
    }

    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error liking snap:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function bookmarkSnap(req: Request, res: Response) {
  try {
    const parsed = bookmarkSnapSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid request body" });
      return;
    }
    if (req.user?.id === undefined) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    const result = await snapService.toggleBookmark(req.user.id, parsed.data.snapId);
    if (result === "unbookmarked") {
      res.status(200).json({ message: "Snap unbookmarked successfully" });
      return;
    }
    res.status(200).json({ message: "Snap bookmarked successfully" });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      res.status(404).json({ error: "Snap not found" });
      return;
    }
    console.error("Error bookmarking snap:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
