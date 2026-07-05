import { Request, Response } from "express";
import { z } from "zod";
import * as followService from "../../services/user/follow_service";

const toggleFollowSchema = z.object({
  followingId: z.string().min(1, "followingId is required"),
});

export async function toggleFollow(req: Request, res: Response) {
  try {
    const parsed = toggleFollowSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid request body" });
      return;
    }
    if (req.user?.id === undefined) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    const { followingId } = parsed.data;
    if (req.user.id === followingId) {
      res.status(400).json({ error: "Cannot follow yourself" });
      return;
    }

    const following = await followService.toggleFollow(req.user.id, followingId);

    if (!following) {
      res.status(200).json({ message: "Unfollowed successfully", following: false });
      return;
    }

    res.status(200).json({ message: "Followed successfully", following: true });
  } catch (error) {
    console.error("Error toggling follow:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
