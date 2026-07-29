import { Request, Response } from "express";
import { z } from "zod";
import * as messengerService from "../../services/user/messenger_service";

const sendMessageSchema = z.object({
  conversationId: z.string().trim().min(1, "conversationId is required"),
  receiverId: z.string().trim().min(1, "receiverId is required"),
  content: z.string().trim().min(1, "content is required"),
});

export async function getFetchConversation(req: Request, res: Response): Promise<void> {
  try {
    if (req.user?.id === undefined) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    const conversations = await messengerService.fetchConversations(
      req.user.id,
    );
    res.status(200).json(conversations);
  } catch (error) {
    console.error("Error fetching conversations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function sendMessage(req: Request, res: Response): Promise<void> {
  try {
    if (req.user?.id === undefined) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const parsed = sendMessageSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        error:
          parsed.error.issues[0]?.message ?? "Invalid request body",
      });
      return;
    }

    const { conversationId, receiverId, content } = parsed.data;
    if (receiverId === req.user.id) {
      res.status(400).json({ error: "Cannot send a message to yourself" });
      return;
    }

    const message = await messengerService.sendMessage({
      conversationId,
      senderId: req.user.id,
      receiverId,
      content,
    });

    if (message === null) {
      res.status(404).json({ error: "Conversation not found" });
      return;
    }

    res.status(201).json({
      message: "Message sent successfully",
      data: message,
    });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
