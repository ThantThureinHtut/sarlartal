import { getSession } from "@/lib/auth-client";
import ProfileClient from "./ProfileClient";
import { Suspense } from "react";
import { headers } from "next/headers";

export default async function Profile() {
  const session = await getSession({ fetchOptions: { headers: await headers() } });
  console.log("Session in Profile component:", session);
  return (
    <div>
      <Suspense fallback={<div>Loading profile...</div>}>
        <ProfileClient user={session?.data?.user} />
      </Suspense>
    </div>
  );
}
