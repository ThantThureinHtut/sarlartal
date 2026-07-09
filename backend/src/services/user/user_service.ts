import { prisma } from "../../../prisma/lib/prisma";

export async function getPublicUserProfile(targetUserId: string, viewerId?: string) {
  const user = await prisma.user.findUnique({
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

  if (!user) return null;

  const isSelf = viewerId === targetUserId;
  let isFollowing = false;

  if (viewerId && !isSelf) {
    const follow = await prisma.follow.findUnique({
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

export async function getUserProfile(userId: string) {
  return prisma.user.findUnique({
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
