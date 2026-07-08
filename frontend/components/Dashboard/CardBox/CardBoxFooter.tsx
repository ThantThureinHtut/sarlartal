"use client";
import React, { useState } from "react";
import { BookmarkIcon, HeartIcon } from "lucide-react";
import { bookmarkSnap, likeSnap } from "@/app/(action)/serveraction";
type Like = {
  userId: string;
  postId: string;
  createdAt: Date;
};
type SavedSnap = {
  id: string;
  authorId: string;
  savedUserId: string;
  postId: string;
  createdAt: Date;
};
type CurrentUser = {
  id: string;
  likes: Like[];
  savedBySnaps: SavedSnap[];
};

export default function CardBoxFooter({
  likeCount,
  postId,
  userId,
  current_user,
}: {
  likeCount: number;
  postId: string;
  userId: string;
  current_user: CurrentUser; // Replace 'any' with the actual type if available
}) {
  const [isLiked, setLiked] = useState(() => {
    return current_user.likes.some((like) => like.postId === postId);
  });
  const [isSaved, setSaved] = useState(() => {
    return current_user.savedBySnaps.some((snap) => snap.postId === postId);
  });
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);
  
  const handleLike = async () => {
    const wasLiked = isLiked;
    setLiked(!wasLiked);
    setCurrentLikeCount((prev) => prev + (wasLiked ? -1 : 1));

    const result = await likeSnap(postId);
    if (!result.success) {
      setLiked(wasLiked);
      setCurrentLikeCount((prev) => prev + (wasLiked ? 1 : -1));
    }
  };

  // Saved snap handler
  const handleBookmark = async () => {
    const wasSaved = isSaved;
    setSaved(!wasSaved);

    const result = await bookmarkSnap(postId);
    if (!result.success) {
      setSaved(wasSaved);
    }
  };

  return (
    <div className="flex items-center justify-between w-full">
      {/* Like button */}
      <button
        onClick={handleLike}
        aria-label={isLiked ? "Unlike" : "Like"}
        className="flex items-center gap-2 rounded-full px-3 py-1.5 text-muted-foreground transition-all duration-200 hover:bg-muted active:scale-90"
      >
        <HeartIcon
          className={`size-5 transition-all duration-200 ${
            isLiked ? "fill-destructive text-destructive scale-110" : ""
          }`}
        />
        <span className="text-xs font-medium">
          {currentLikeCount}
        </span>
      </button>

      {/* Bookmark button */}
      <button
        onClick={handleBookmark}
        aria-label={isSaved ? "Unsave" : "Save"}
        className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:bg-muted active:scale-90"
      >
        <BookmarkIcon
          className={`size-5 transition-all duration-200 ${
            isSaved ? "fill-primary text-primary scale-110" : ""
          }`}
        />
      </button>
    </div>
  );
}
