"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAvatar = updateAvatar;
exports.updateName = updateName;
exports.updateBio = updateBio;
exports.updateStatus = updateStatus;
exports.updateEmail = updateEmail;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const prisma_1 = require("../../../prisma/lib/prisma");
const AVATAR_UPLOAD_DIR = node_path_1.default.join(__dirname, "../../../public/uploads/avatars");
async function updateAvatar(userId, image) {
    const previousUser = await prisma_1.prisma.user.findUnique({
        where: { id: userId },
        select: { image: true },
    });
    const updatedUser = await prisma_1.prisma.user.update({
        where: { id: userId },
        data: { image: image || "https://placehold.co/600x750" },
    });
    if (previousUser?.image?.startsWith("/uploads/avatars/")) {
        const previousFilePath = node_path_1.default.join(AVATAR_UPLOAD_DIR, node_path_1.default.basename(previousUser.image));
        await promises_1.default.unlink(previousFilePath).catch(() => { });
    }
    return updatedUser;
}
async function updateName(userId, name) {
    return prisma_1.prisma.user.update({
        where: { id: userId },
        data: { name },
    });
}
async function updateBio(userId, bio) {
    return prisma_1.prisma.user.update({
        where: { id: userId },
        data: { bio },
    });
}
// status kept as `any` to mirror today's untyped `req.body` destructure —
// typing it as the Prisma UserStatus enum would introduce a new compile-time
// constraint that doesn't exist in the current code.
async function updateStatus(userId, status) {
    return prisma_1.prisma.user.update({
        where: { id: userId },
        data: { status },
    });
}
async function updateEmail(userId, email) {
    return prisma_1.prisma.user.update({
        where: { id: userId },
        data: { email },
    });
}
//# sourceMappingURL=profile_service.js.map