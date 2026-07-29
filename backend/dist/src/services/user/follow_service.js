"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleFollow = toggleFollow;
const prisma_1 = require("../../../prisma/lib/prisma");
async function toggleFollow(followerId, followingId) {
    // followerId  = req.user.id
    // followingId = which is f
    const existingFollow = await prisma_1.prisma.follow.findUnique({
        where: {
            followerId_followingId: {
                followerId: followerId,
                followingId,
            },
        },
    });
    if (existingFollow) {
        await prisma_1.prisma.follow.delete({
            where: {
                followerId_followingId: {
                    followerId: followerId,
                    followingId,
                },
            },
        });
        return false;
    }
    // Normalize IDs: always put the smaller ID in user1Id, bigger ID in user2Id.
    // This keeps the pair consistent no matter who follows who,
    // so upsert always finds the same conversation (no duplicates).
    const user1Id = followerId < followingId ? followerId : followingId;
    const user2Id = followerId < followingId ? followingId : followerId;
    await prisma_1.prisma.$transaction([
        prisma_1.prisma.follow.create({
            data: {
                follower: { connect: { id: followerId } },
                following: { connect: { id: followingId } },
            },
        }),
        prisma_1.prisma.conversation.upsert({
            where: { user1Id_user2Id: { user1Id, user2Id } },
            update: {},
            create: { user1Id, user2Id },
        }),
    ]);
    return true;
}
//# sourceMappingURL=follow_service.js.map