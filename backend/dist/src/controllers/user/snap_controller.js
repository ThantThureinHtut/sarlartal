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
exports.getSnaps = getSnaps;
exports.getFollowingSnaps = getFollowingSnaps;
exports.getSavedSnaps = getSavedSnaps;
exports.createSnap = createSnap;
exports.likeSnap = likeSnap;
exports.bookmarkSnap = bookmarkSnap;
const zod_1 = require("zod");
const client_1 = require("../../../generated/prisma/client");
const snapService = __importStar(require("../../services/user/snap_service"));
const likeSnapSchema = zod_1.z.object({
    snapId: zod_1.z.string().min(1, "snapId is required"),
});
const bookmarkSnapSchema = zod_1.z.object({
    snapId: zod_1.z.string().min(1, "snapId is required"),
});
async function getSnaps(req, res) {
    try {
        const snaps = await snapService.getAllSnaps();
        res.json(snaps);
    }
    catch (error) {
        console.error("Error fetching snaps:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function getFollowingSnaps(req, res) {
    try {
        if (req.user?.id === undefined) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const snaps = await snapService.getFollowingSnaps(req.user.id);
        res.json(snaps);
    }
    catch (error) {
        console.error("Error fetching following posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function getSavedSnaps(req, res) {
    try {
        if (req.user?.id === undefined) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const snaps = await snapService.getSavedSnaps(req.user.id);
        res.json(snaps);
    }
    catch (error) {
        console.error("Error fetching saved snaps:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function createSnap(req, res) {
    try {
        const image = req.file ? `/uploads/snaps/${req.file.filename}` : null;
        if (req.user?.id !== undefined) {
            await snapService.createSnap(req.body.title, image, req.user.id);
            res.status(201).json({ message: "Snap created successfully" });
            return;
        }
        res.status(401).json({ error: "Unauthorized" });
    }
    catch (error) {
        console.error("Error creating snap:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function likeSnap(req, res) {
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
    }
    catch (error) {
        console.error("Error liking snap:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function bookmarkSnap(req, res) {
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
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            res.status(404).json({ error: "Snap not found" });
            return;
        }
        console.error("Error bookmarking snap:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
//# sourceMappingURL=snap_controller.js.map