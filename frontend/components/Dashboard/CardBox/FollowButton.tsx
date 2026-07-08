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
    const wasFollowing = isFollowing;
    setIsFollowing(!wasFollowing);

    const result = await followUser(targetUserId);
    if (!result.success) {
      setIsFollowing(wasFollowing);
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isFollowing ? "Unfollow" : "Follow"}
      className={cn(
        "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 active:scale-90",
        isFollowing
          ? "bg-muted text-foreground ring-1 ring-border hover:bg-muted/70"
          : "bg-primary text-primary-foreground hover:bg-primary/90",
      )}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}
