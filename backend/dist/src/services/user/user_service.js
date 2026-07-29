"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicUserProfile = getPublicUserProfile;
exports.getUserProfile = getUserProfile;
const prisma_1 = require("../../../prisma/lib/prisma");
async function getPublicUserProfile(targetUserId, viewerId) {
    const user = await prisma_1.prisma.user.findUnique({
        where: { id: targetUserId },
        select: {
            id: true,
            name: true,
            status: true,
            image: true,
            cover_image: true,
            _count: {
                select: {
                    posts: true,
                    followers: true,
                    following: true,
                },
            },
        },
    });
    if (!user)
        return null;
    const isSelf = viewerId === targetUserId;
    let isFollowing = false;
    if (viewerId && !isSelf) {
        const follow = await prisma_1.prisma.follow.findUnique({
            where: {
                followerId_followingId: {
                    followerId: viewerId,
                    followingId: targetUserId,
                },
            },
        });
        isFollowing = !!follow;
    }
    return { user, isFollowing, isSelf };
}
async function getUserProfile(userId) {
    return prisma_1.prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            bio: true,
            status: true,
            image: true,
            cover_image: true,
            likes: true,
            savedBySnaps: true,
            following: true,
            createdAt: true,
            updatedAt: true,
            _count: {
                select: {
                    posts: true,
                    followers: true,
                },
            },
        },
    });
}
//# sourceMappingURL=user_service.js.map