"use client";

import { createContext, useCallback, useContext, useState } from "react";

type FollowOverrides = Record<string, boolean>;

type FollowStateContextValue = {
  overrides: FollowOverrides;
  setFollowing: (userId: string, isFollowing: boolean) => void;
};

const FollowStateContext = createContext<FollowStateContextValue | null>(null);

export function FollowStateProvider({ children }: { children: React.ReactNode }) {
  const [overrides, setOverrides] = useState<FollowOverrides>({});

  const setFollowing = useCallback((userId: string, isFollowing: boolean) => {
    setOverrides((prev) => ({ ...prev, [userId]: isFollowing }));
  }, []);

  return (
    <FollowStateContext.Provider value={{ overrides, setFollowing }}>
      {children}
    </FollowStateContext.Provider>
  );
}

/**
 * Every FollowButton for the same targetUserId reads/writes through this
 * shared map instead of its own isolated useState, so following someone on
 * one post instantly updates every other button for that person currently
 * mounted (other posts in the feed, the profile page, etc). Without this,
 * each button only knows about its own click — and Next.js's Router Cache
 * can restore stale server-rendered `initialIsFollowing` props on
 * back-navigation, which a purely local state can't correct for.
 */
export function useFollowState(userId: string, initialIsFollowing: boolean) {
  const ctx = useContext(FollowStateContext);
  if (!ctx) {
    throw new Error("useFollowState must be used within a FollowStateProvider");
  }
  const isFollowing = ctx.overrides[userId] ?? initialIsFollowing;
  const setIsFollowing = useCallback(
    (value: boolean) => ctx.setFollowing(userId, value),
    [ctx, userId],
  );
  return [isFollowing, setIsFollowing] as const;
}
