import { prisma } from "../../../prisma/lib/prisma";

export async function getAllSnaps() {
  return prisma.post.findMany({
    include: {
      user: {
        select: { name: true, image: true, status: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getFollowingSnaps(userId: string) {
  const follows = await prisma.follow.findMany({
    where: { followerId: userId },
    select: { followingId: true },
  });
  const followingIds = follows.map((f) => f.followingId);
  return prisma.post.findMany({
    where: { userId: { in: followingIds } },
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, image: true, status: true } },
    },
  });
}

export async function getSavedSnaps(userId: string) {
  const savedSnaps = await prisma.savedSnap.findMany({
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

export async function createSnap(title: string, imageUrl: string | null, userId: string) {
  return prisma.post.create({
    data: {
      title: title,
      image_url: imageUrl || "https://placehold.co/600x750",
      userId: userId,
    },
  });
}

export async function toggleLike(userId: string, postId: string): Promise<"liked" | "unliked"> {
  const existingLike = await prisma.like.findUnique({
    where: {
      userId_postId: {
        userId: userId,
        postId: postId,
      },
    },
  });

  if (existingLike) {
    await prisma.$transaction([
      prisma.like.delete({
        where: {
          userId_postId: {
            userId: userId,
            postId: postId,
          },
        },
      }),
      prisma.post.update({
        where: { id: postId },
        data: {
          likeCount: { decrement: 1 },
        },
      }),
    ]);
    return "unliked";
  }

  await prisma.$transaction([
    prisma.like.create({
      data: {
        user: { connect: { id: userId } },
        post: { connect: { id: postId } },
      },
    }),
    prisma.post.update({
      where: { id: postId },
      data: {
        likeCount: { increment: 1 },
      },
    }),
  ]);
  return "liked";
}

export async function toggleBookmark(
  currentUserId: string,
  postId: string,
): Promise<"bookmarked" | "unbookmarked"> {
  const existBookmark = await prisma.savedSnap.findUnique({
    where: {
      postId_savedUserId: {
        savedUserId: currentUserId,
        postId: postId,
      },
    },
  });

  if (existBookmark) {
    await prisma.savedSnap.delete({
      where: {
        postId_savedUserId: {
          savedUserId: currentUserId,
          postId: postId,
        },
      },
    });
    return "unbookmarked";
  }

  const post = await prisma.post.findUniqueOrThrow({
    where: { id: postId },
    select: { userId: true },
  });

  await prisma.savedSnap.create({
    data: {
      savedUser: { connect: { id: currentUserId } },
      post: { connect: { id: postId } },
      author: { connect: { id: post.userId } },
    },
  });
  return "bookmarked";
}
