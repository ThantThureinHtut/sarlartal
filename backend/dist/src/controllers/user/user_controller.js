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
exports.getUser = getUser;
exports.getPublicProfile = getPublicProfile;
const userService = __importStar(require("../../services/user/user_service"));
async function getUser(req, res) {
    try {
        if (req.user?.id !== undefined) {
            const user = await userService.getUserProfile(req.user.id);
            res.status(200).json(user);
            return;
        }
        res.status(401).json({ error: "Unauthorized" });
    }
    catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function getPublicProfile(req, res) {
    try {
        const { userId } = req.params;
        const result = await userService.getPublicUserProfile(userId, req.user?.id);
        if (!result) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        res.status(200).json(result);
    }
    catch (error) {
        console.error("Error fetching public user profile:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
//# sourceMappingURL=user_controller.js.map