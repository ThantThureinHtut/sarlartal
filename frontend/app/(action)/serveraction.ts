"use server";

import { cacheLife, cacheTag, refresh, revalidateTag, updateTag } from "next/cache";
import { headers } from "next/headers";


async function getCookie() {
  const h = await headers();
  return h.get("cookie") ?? "";
}
export async function getSnaps() {
  "use cache";
   cacheLife("hours");
   cacheTag("snaps");
  try {
    const res = await fetch(`${process.env.API_URL}/api/snaps`, {
      method: "GET",
    });

    if (!res.ok) return { status: res.status, error: "Failed to fetch snaps" };
    return await res.json();
  } catch (error) {
    return {
      status: 500,
      error: "Failed to fetch snaps",
      details: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function getUser() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/get-user`, {
      headers: await headers(),
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) return { status: res.status, error: "Failed to fetch user" };
    return await res.json();
  } catch (error) {
    return {
      status: 500,
      error: "Failed to fetch user",
      details: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function getUserProfile(userId: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/user/${userId}`, {
      headers: await headers(),
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) return { status: res.status, error: "Failed to fetch user profile" };
    return await res.json();
  } catch (error) {
    return {
      status: 500,
      error: "Failed to fetch user profile",
      details: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function getFollowingPosts() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/snaps/following`, {
      headers: await headers(),
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) return { status: res.status, error: "Failed to fetch following posts" };
    return await res.json();
  } catch (error) {
    return {
      status: 500,
      error: "Failed to fetch following posts",
      details: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function getSavedSnaps() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/snaps/saved`, {
      headers: await headers(),
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) return { status: res.status, error: "Failed to fetch saved snaps" };
    return await res.json();
  } catch (error) {
    return {
      status: 500,
      error: "Failed to fetch saved snaps",
      details: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function followUser(followingId: string) {
  const cookie = await getCookie();
  try {
    const res = await fetch(`${process.env.API_URL}/api/follow/toggle`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie },
      body: JSON.stringify({ followingId }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return { success: false, error: data?.error ?? "Failed to update follow status" };
    }

    refresh(); // Force the client router to refetch RSC payloads (e.g. the target user's profile page) after a follow/unfollow
    return { success: true }
  } catch (error) {
    return { success: false , error: error instanceof Error ? error.message : String(error) }
  }
}

export async function sendSnap(formData: FormData) {
  const cookie = await getCookie();
  try {
    const res = await fetch(`${process.env.API_URL}/api/snaps/create`, {
      method: "POST",
    //   can't use the headers() function here because it have application/json content type by default and it will override the multipart/form-data content type which is required for file upload

      headers: { cookie },
      body: formData,
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return { success: false, error: data?.error ?? "Failed to create snap" };
    }

    updateTag("snaps"); // Revalidate snaps cache after creating a new snap
    refresh(); // Force the client router to refetch the dashboard's RSC payload
    return { success: true }
  } catch (error) {
    return { success: false , error: error instanceof Error ? error.message : String(error) }
  }
}


export async function likeSnap(snapId: string) {
  const cookie = await getCookie();
  try {
    const res = await fetch(`${process.env.API_URL}/api/snaps/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie },
      body: JSON.stringify({ snapId }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return { success: false, error: data?.error ?? "Failed to like snap" };
    }

    revalidateTag("snaps" , "max"); // Revalidate snaps cache after liking a snap
    return { success: true }
  } catch (error) {
    return { success: false , error: error instanceof Error ? error.message : String(error) }
  }
}

export async function bookmarkSnap(snapId: string) {
  const cookie = await getCookie();
  try {
    const res = await fetch(`${process.env.API_URL}/api/snaps/bookmark`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie },
      body: JSON.stringify({ snapId }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return { success: false, error: data?.error ?? "Failed to bookmark snap" };
    }

    revalidateTag("snaps" , "max"); // Revalidate snaps cache after bookmarking a snap
    return { success: true }
  } catch (error) {
    return { success: false , error: error instanceof Error ? error.message : String(error) }
  }
}