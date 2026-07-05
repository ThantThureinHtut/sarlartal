import fs from "node:fs/promises";
import path from "node:path";
import { prisma } from "../../../prisma/lib/prisma";

const AVATAR_UPLOAD_DIR = path.join(__dirname, "../../../public/uploads/avatars");

export async function updateAvatar(userId: string, image: string | null) {
  const previousUser = await prisma.user.findUnique({
    where: { id: userId },
    select: { image: true },
  });

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { image: image || "https://placehold.co/600x750" },
  });

  if (previousUser?.image?.startsWith("/uploads/avatars/")) {
    const previousFilePath = path.join(AVATAR_UPLOAD_DIR, path.basename(previousUser.image));
    await fs.unlink(previousFilePath).catch(() => {});
  }

  return updatedUser;
}

export async function updateName(userId: string, name: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { name },
  });
}

export async function updateBio(userId: string, bio: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { bio },
  });
}

// status kept as `any` to mirror today's untyped `req.body` destructure —
// typing it as the Prisma UserStatus enum would introduce a new compile-time
// constraint that doesn't exist in the current code.
export async function updateStatus(userId: string, status: any) {
  return prisma.user.update({
    where: { id: userId },
    data: { status },
  });
}

export async function updateEmail(userId: string, email: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { email },
  });
}
