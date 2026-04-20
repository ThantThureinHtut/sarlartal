"use server";

import { headers } from "next/headers";

export async function getSnaps() {
    try {
        const res = await fetch(`${process.env.API_URL}/api/snaps` , {
            headers: await headers(),
            method: "GET",
            cache: "no-store" // Ensure fresh data on each request
        });
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error("Failed to fetch snaps", error instanceof Error ? { cause: error } : undefined);
    }
}

export async function getUser() {
    try {
        const res = a
    }catch(error) {
        throw new Error("Failed to fetch user", error instanceof Error ? { cause: error } : undefined);
    }
}