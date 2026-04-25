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
    setCurrentLikeCount((prev) => prev + (isLiked ? -1 : 1));
    await likeSnap(postId);
  };


  // Saved snap handler
  const handleBookmark = async () => {
    await bookmarkSnap(postId, userId);
  };

  return (
    <div className="flex items-center justify-between w-full">
      {/* Like button */}
      <button
        onClick={() => {
          setLiked((prev) => !prev);
          handleLike();
        }}
        aria-label={isLiked ? "Unlike" : "Like"}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-90"
      >
        <HeartIcon
          className={`size-5 transition-all duration-200 ${
            isLiked ? "fill-red-500 text-red-400 scale-110" : "text-white"
          }`}
        />
        <span className="text-xs font-medium text-white">
          {currentLikeCount}
        </span>
      </button>

      {/* Bookmark button */}
      <button
        onClick={() => {
          setSaved((prev) => !prev);
          handleBookmark();
        }}
        aria-label={isSaved ? "Unsave" : "Save"}
        className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-90"
      >
        <BookmarkIcon
          className={`size-5 transition-all duration-200 ${
            isSaved ? "fill-yellow-400 text-yellow-300 scale-110" : "text-white"
          }`}
        />
      </button>
    </div>
  );
}
