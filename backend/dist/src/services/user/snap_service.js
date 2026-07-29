"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSnaps = getAllSnaps;
exports.getFollowingSnaps = getFollowingSnaps;
exports.getSavedSnaps = getSavedSnaps;
exports.createSnap = createSnap;
exports.toggleLike = toggleLike;
exports.toggleBookmark = toggleBookmark;
const prisma_1 = require("../../../prisma/lib/prisma");
async function getAllSnaps() {
    return prisma_1.prisma.post.findMany({
        include: {
            user: {
                select: { name: true, image: true, status: true },
            },
        },
        orderBy: { createdAt: "desc" },
    });
}
async function getFollowingSnaps(userId) {
    const follows = await prisma_1.prisma.follow.findMany({
        where: { followerId: userId },
        select: { followingId: true },
    });
    const followingIds = follows.map((f) => f.followingId);
    return prisma_1.prisma.post.findMany({
        where: { userId: { in: followingIds } },
        orderBy: { createdAt: "desc" },
        include: {
            user: { select: { name: true, image: true, status: true } },
        },
    });
}
async function getSavedSnaps(userId) {
    const savedSnaps = await prisma_1.prisma.savedSnap.findMany({
        where: { savedUserId: userId },
        orderBy: { post: { createdAt: "desc" } },
        include: {
            post: {
                include: {
                    user: { select: { name: true, image: true, status: true } },
                },
            },
        },
    });
    return savedSnaps.filter((s) => s.post !== null).map((s) => s.post);
}
async function createSnap(title, imageUrl, userId) {
    return prisma_1.prisma.post.create({
        data: {
            title: title,
            image_url: imageUrl || "https://placehold.co/600x750",
            userId: userId,
        },
    });
}
async function toggleLike(userId, postId) {
    const existingLike = await prisma_1.prisma.like.findUnique({
        where: {
            userId_postId: {
                userId: userId,
                postId: postId,
            },
        },
    });
    if (existingLike) {
        await prisma_1.prisma.$transaction([
            prisma_1.prisma.like.delete({
                where: {
                    userId_postId: {
                        userId: userId,
                        postId: postId,
                    },
                },
            }),
            prisma_1.prisma.post.update({
                where: { id: postId },
                data: {
                    likeCount: { decrement: 1 },
                },
            }),
        ]);
        return "unliked";
    }
    await prisma_1.prisma.$transaction([
        prisma_1.prisma.like.create({
            data: {
                user: { connect: { id: userId } },
                post: { connect: { id: postId } },
            },
        }),
        prisma_1.prisma.post.update({
            where: { id: postId },
            data: {
                likeCount: { increment: 1 },
            },
        }),
    ]);
    return "liked";
}
async function toggleBookmark(currentUserId, postId) {
    const existBookmark = await prisma_1.prisma.savedSnap.findUnique({
        where: {
            postId_savedUserId: {
                savedUserId: currentUserId,
                postId: postId,
            },
        },
    });
    if (existBookmark) {
        await prisma_1.prisma.savedSnap.delete({
            where: {
                postId_savedUserId: {
                    savedUserId: currentUserId,
                    postId: postId,
                },
            },
        });
        return "unbookmarked";
    }
    const post = await prisma_1.prisma.post.findUniqueOrThrow({
        where: { id: postId },
        select: { userId: true },
    });
    await prisma_1.prisma.savedSnap.create({
        data: {
            savedUser: { connect: { id: currentUserId } },
            post: { connect: { id: postId } },
            author: { connect: { id: post.userId } },
        },
    });
    return "bookmarked";
}
//# sourceMappingURL=snap_service.js.map