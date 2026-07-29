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
exports.toggleFollow = toggleFollow;
const zod_1 = require("zod");
const followService = __importStar(require("../../services/user/follow_service"));
const toggleFollowSchema = zod_1.z.object({
    followingId: zod_1.z.string().min(1, "followingId is required"),
});
async function toggleFollow(req, res) {
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
    }
    catch (error) {
        console.error("Error toggling follow:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
//# sourceMappingURL=follow_controller.js.map