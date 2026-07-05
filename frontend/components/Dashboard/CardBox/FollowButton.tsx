"use client";
import React, { useState } from "react";
import { followUser } from "@/app/(action)/serveraction";
import { cn } from "@/lib/utils";

export default function FollowButton({
  targetUserId,
  initialIsFollowing,
}: {
  targetUserId: string;
  initialIsFollowing: boolean;
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleClick = async () => {
    setIsFollowing((prev) => !prev);
    await followUser(targetUserId);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isFollowing ? "Unfollow" : "Follow"}
      className={cn(
        "px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md transition-all duration-200 active:scale-90",
        isFollowing
          ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
          : "bg-white border-white text-black hover:bg-white/90",
      )}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}
