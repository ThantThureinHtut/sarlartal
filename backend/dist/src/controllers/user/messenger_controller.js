"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFetchConversation = getFetchConversation;
exports.sendMessage = sendMessage;
const zod_1 = require("zod");
const messengerService = __importStar(require("../../services/user/messenger_service"));
const sendMessageSchema = zod_1.z.object({
    conversationId: zod_1.z.string().trim().min(1, "conversationId is required"),
    receiverId: zod_1.z.string().trim().min(1, "receiverId is required"),
    content: zod_1.z.string().trim().min(1, "content is required"),
});
async function getFetchConversation(req, res) {
    try {
        if (req.user?.id === undefined) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const conversations = await messengerService.fetchConversations(req.user.id);
        res.status(200).json(conversations);
    }
    catch (error) {
        console.error("Error fetching conversations:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
async function sendMessage(req, res) {
    try {
        if (req.user?.id === undefined) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const parsed = sendMessageSchema.safeParse(req.body);
        if (!parsed.success) {
            res.status(400).json({
                error: parsed.error.issues[0]?.message ?? "Invalid request body",
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
    }
    catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
//# sourceMappingURL=messenger_controller.js.map