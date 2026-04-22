"use server";

import { headers } from "next/headers";


export async function getSnaps() {
    try {
        const res = await fetch(`${process.env.API_URL}/api/snaps` , {
            headers: await headers(),
            method: "GET",
            cache: "no-store"
        });

        if (!res.ok) return { status: res.status, error: "Failed to fetch snaps" };
        return await res.json();
    } catch (error) {
        return { status: 500 , error: "Failed to fetch snaps", details: error instanceof Error ? error.message : String(error) };
    }
}

export async function getUser() {
    try {
        const res = await fetch(`${process.env.API_URL}/api/get-user` , {
            headers: await headers(),
            method: "GET",
            cache: "no-store"
        });
        if (!res.ok) return { status: res.status, error: "Failed to fetch user" };
        return await res.json();
    } catch (error) {
        return { status: 500, error: "Failed to fetch user", details: error instanceof Error ? error.message : String(error) };
    }
}