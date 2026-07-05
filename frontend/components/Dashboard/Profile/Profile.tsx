import { getUser } from "@/app/(action)/serveraction";
import ProfileClient from "./ProfileClient";
import ProfileSkeleton from "./ProfileSkeleton";
import { Suspense } from "react";

export default async function Profile() {
  const user = await getUser();
  return (
    <div>
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileClient user={user?.id ? user : undefined} />
      </Suspense>
    </div>
  );
}
