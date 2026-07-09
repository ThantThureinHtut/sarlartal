import { prisma } from "./lib/prisma";

// Reuses images already present in public/uploads/snaps since this script
// only inserts rows — it does not fabricate new binary files.
const SNAP_IMAGES = [
  "/uploads/snaps/1783533111468-822713699.jpg",
  "/uploads/snaps/1783535150476-327540598.jpg",
  "/uploads/snaps/1783536882268-759336319.jpg",
  "/uploads/snaps/1783536925953-732477698.jpg",
  "/uploads/snaps/1783615000456-512320630.jpg",
];

async function main() {
  const now = new Date();

  const fakeUser = await prisma.user.create({
    data: {
      name: "Aung Min Khant",
      email: "aungminkhant.dev@example.com",
      emailVerified: true,
      bio: "Photographer & weekend hiker 📷⛰️",
      status: "ONLINE",
      createdAt: now,
      updatedAt: now,
    },
  });

  const titles = [
    "Sunset over Inle Lake",
    "Morning coffee ritual",
    "Street food finds downtown",
    "Weekend hike recap",
    "New camera, who dis",
  ];

  await prisma.post.createMany({
    data: SNAP_IMAGES.map((image_url, i) => ({
      title: titles[i] ?? "Untitled",
      image_url,
      userId: fakeUser.id,
    })),
  });

  console.log(`Created fake user "${fakeUser.name}" (${fakeUser.id}) with ${SNAP_IMAGES.length} snaps.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
