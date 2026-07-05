import { prisma } from "../../../prisma/lib/prisma";

export async function toggleFollow(followerId: string, followingId: string): Promise<boolean> {
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

  await prisma.follow.create({
    data: {
      follower: { connect: { id: followerId } },
      following: { connect: { id: followingId } },
    },
  });
  return true;
}
