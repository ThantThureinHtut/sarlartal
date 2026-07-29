import { prisma } from "../../../prisma/lib/prisma";

export async function toggleFollow(followerId: string, followingId: string): Promise<boolean> {
  // followerId  = req.user.id
  // followingId = which is f
  const existingFollow = await prisma.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId: followerId,
        followingId,
      },
    },
  });

  if (existingFollow) {
    await prisma.follow.delete({
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
  
  await prisma.$transaction([
    prisma.follow.create({
      data: {
        follower: { connect: { id: followerId } },
        following: { connect: { id: followingId } },
      },
    }),
    prisma.conversation.upsert({
      where: { user1Id_user2Id: { user1Id, user2Id } },
      update: {},
      create: { user1Id, user2Id },
    }),
  ]);
  return true;
}
