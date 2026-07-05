import { Request, Response } from "express";
import * as userService from "../../services/user/user_service";

export async function getUser(req: Request, res: Response) {
  try {
    if (req.user?.id !== undefined) {
      const user = await userService.getUserProfile(req.user.id);
      res.status(200).json(user);
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
