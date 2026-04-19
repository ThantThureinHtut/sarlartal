/*
  Warnings:

  - You are about to drop the column `userId` on the `saved_snap` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `saved_snap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `savedUserId` to the `saved_snap` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "saved_snap" DROP CONSTRAINT "saved_snap_userId_fkey";

-- AlterTable
ALTER TABLE "saved_snap" DROP COLUMN "userId",
ADD COLUMN     "authorId" TEXT NOT NULL,
ADD COLUMN     "savedUserId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "saved_snap" ADD CONSTRAINT "saved_snap_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_snap" ADD CONSTRAINT "saved_snap_savedUserId_fkey" FOREIGN KEY ("savedUserId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
