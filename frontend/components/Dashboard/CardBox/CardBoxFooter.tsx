"use client";
import React, { useState } from "react";
import { BookmarkIcon, HeartIcon } from "lucide-react";

export default function CardBoxFooter({ likeCount }: { likeCount: number }) {
  const [isLiked, setLiked] = useState(false);
  const [isSaved, setSaved] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">

      {/* Like button */}
      <button
        onClick={() => setLiked((prev) => !prev)}
        aria-label={isLiked ? "Unlike" : "Like"}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-90"
      >
        <HeartIcon
          className={`size-5 transition-all duration-200 ${
            isLiked ? "fill-red-500 text-red-400 scale-110" : "text-white"
          }`}
        />
        <span className="text-xs font-medium text-white">{likeCount}</span>
      </button>

      {/* Bookmark button */}
      <button
        onClick={() => setSaved((prev) => !prev)}
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
