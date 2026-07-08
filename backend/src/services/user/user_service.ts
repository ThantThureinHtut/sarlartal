import { prisma } from "../../../prisma/lib/prisma";

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
