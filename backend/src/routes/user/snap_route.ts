import express, { Request, Response } from "express";
import { upload } from "../middleware/upload";
import { prisma } from "../../../prisma/lib/prisma";
const snapRouter = express.Router();

snapRouter.get("/", async (req: Request, res: Response) => {
  try {
    const snaps = await prisma.post.findMany({
      include: {
        user: {
          select: { name: true, image: true, status: true },
        },
      },
    });
    res.json(snaps);
  } catch (error) {
    console.error("Error fetching snaps:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

snapRouter.post(
  "/create",
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      const { title } = req.body;
      const image = req.file ? `/uploads/snaps/${req.file.filename}` : null;
      console.log(req.user);
      if (req.user?.id !== undefined) {
        await prisma.post.create({
          data: {
            title: title,
            image_url: image || "https://placehold.co/600x750",
            userId: req?.user?.id, // Assuming req.user is set by the auth middleware
          },
        });
        res.status(201).json({ message: "Snap created successfully" });
        return;
      }
      res.status(401).json({ error: "Unauthorized" });
    } catch (error) {
      console.error("Error creating snap:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
);

snapRouter.post("/like", async (req: Request, res: Response) => {
  try {
    const { snapId } = req.body;
    console.log("Liking snap with ID:", snapId);
    if (req.user?.id !== undefined) {
      // Check if the like already exists for this user and snap
      const existingLike = await prisma.like.findUnique({
        where: {
          userId_postId: {
            userId: req.user.id,
            postId: snapId,
          },
        },
      });

      // if the like already exists, we remove it (unlike), otherwise we create a new like
      if (existingLike) {
        const [deletedLike] = await prisma.$transaction([
          prisma.like.delete({
            where: {
              userId_postId: {
                userId: req.user.id,
                postId: snapId,
              },
            },
          }),
          prisma.post.update({
            where: { id: snapId },
            data: {
              likeCount: { decrement: 1 },
            },
          }),
        ]);

        // Return early after unliking the snap
        res.status(200).json({ message: "Snap unliked successfully" });
        return;
      }

      // if the like doesn't exist, we create it (like)
      const [like] = await prisma.$transaction([
        prisma.like.create({
          data: {
            user: { connect: { id: req.user.id } },
            post: { connect: { id: snapId } },
          },
        }),

        prisma.post.update({
          where: { id: snapId },
          data: {
            likeCount: { increment: 1 },
          },
        }),
      ]);
      res.status(200).json({ message: "Snap liked successfully" });
      return;
    }

    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error liking snap:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

snapRouter.post("/bookmark", async (req: Request, res: Response) => {
  try {
    const { snapId , userId } = req.body;
    if (req?.user?.id !== undefined) {
      const existBookmark = await prisma.savedSnap.findUnique({
        where: {
          postId_savedUserId: {
            savedUserId: req.user.id,
            postId: snapId,
          },
        },
      });

      if (existBookmark) {
        await prisma.savedSnap.delete({
          where: {
            postId_savedUserId: {
              savedUserId: req.user.id,
              postId: snapId,
            },
          },
        });
        return;
      }

      // Create a new bookmark and connect the author of the snap to the bookmark
      await prisma.savedSnap.create({
        data: {
          savedUser: { connect: { id: req.user.id } },
          post: { connect: { id: snapId } },
          author: { connect: { id: userId } }, 
        },
      });

    }
  } catch (error) {
    console.error("Error bookmarking snap:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export default snapRouter;
