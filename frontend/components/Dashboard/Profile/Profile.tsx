
import { getSession } from "@/lib/auth-client";
import ProfileClient from "./ProfileClient";
import ProfileSkeleton from "./ProfileSkeleton";
import { Suspense } from "react";
import { headers } from "next/headers";

export default async function Profile() {
  const session = await getSession({ fetchOptions: { headers: await headers() } });
  return (
    <div>
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileClient user={session?.data?.user} />
      </Suspense>
    </div>
  );
}
