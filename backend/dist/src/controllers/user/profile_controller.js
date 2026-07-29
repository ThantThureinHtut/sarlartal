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
exports.updateAvatar = updateAvatar;
exports.updateName = updateName;
exports.updateBio = updateBio;
exports.updateStatus = updateStatus;
exports.updateEmail = updateEmail;
const zod_1 = require("zod");
const profileService = __importStar(require("../../services/user/profile_service"));
const updateNameSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "name is required"),
});
const updateBioSchema = zod_1.z.object({
    bio: zod_1.z.string(),
});
// mirrors the `UserStatus` enum in prisma/schema.prisma
const updateStatusSchema = zod_1.z.object({
    status: zod_1.z.enum(["ONLINE", "IDLE", "DND", "OFFLINE", "AWAY", "BUSY", "SAD"]),
});
const updateEmailSchema = zod_1.z.object({
    email: zod_1.z.string().email("email must be a valid email address"),
});
async function updateAvatar(req, res) {
    try {
        const image = req.file ? `/uploads/avatars/${req.file.filename}` : null;
        if (req.user?.id !== undefined) {
            await profileService.updateAvatar(req.user.id, image);
            res.status(200).json({ message: "Avatar updated successfully" });
            return;
        }
        res.status(401).json({ error: "Unauthorized" });
    }
    catch (error) {
        console.error("Error updating avatar:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function updateName(req, res) {
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
    }
    catch (error) {
        console.error("Error updating name:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function updateBio(req, res) {
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
    }
    catch (error) {
        console.error("Error updating bio:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function updateStatus(req, res) {
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
    }
    catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function updateEmail(req, res) {
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
    }
    catch (error) {
        console.error("Error updating email:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
//# sourceMappingURL=profile_controller.js.map