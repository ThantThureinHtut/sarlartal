"use server";

import { cacheLife, cacheTag, revalidateTag } from "next/cache";
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
      cache: "no-store",
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
  const cookie = await getCookie();
  try {
    const res = await fetch(`${process.env.API_URL}/api/get-user`, {
      headers: {cookie},
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

export async function sendSnap(formData: FormData) {
  const cookie = await getCookie();
  try {
    await fetch(`${process.env.API_URL}/api/snaps/create`, {
      method: "POST",
    //   can't use the headers() function here because it have application/json content type by default and it will override the multipart/form-data content type which is required for file upload
    
      headers: { cookie },
      body: formData,
    });

    revalidateTag("snaps" , "max"); // Revalidate snaps cache after creating a new snap
    return { success: true }
  } catch (error) {
    return { success: false , error: error instanceof Error ? error.message : String(error) }
  }
}


export async function likeSnap(snapId: string) {
  const cookie = await getCookie();
  try {
    await fetch(`${process.env.API_URL}/api/snaps/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie },
      body: JSON.stringify({ snapId }),
    });
    revalidateTag("snaps" , "max"); // Revalidate snaps cache after liking a snap
    return { success: true }
  } catch (error) {

    return { success: false , error: error instanceof Error ? error.message : String(error) }
  }
}

export async function bookmarkSnap(snapId: string , userId: string) {
  const cookie = await getCookie();
  try {
    await fetch(`${process.env.API_URL}/api/snaps/bookmark`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie },
      body: JSON.stringify({ snapId, userId  }),
    });
    revalidateTag("snaps" , "max"); // Revalidate snaps cache after bookmarking a snap
    return { success: true }
  } catch (error) {
    return { success: false , error: error instanceof Error ? error.message : String(error) }
  }
}