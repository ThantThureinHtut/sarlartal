import { Suspense } from "react";
import OtherUserProfile from "@/components/Dashboard/Profile/OtherUserProfile";
import OtherUserProfileSkeleton from "@/components/Dashboard/Profile/OtherUserProfileSkeleton";

export default function OtherUserProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  return (
    <Suspense fallback={<OtherUserProfileSkeleton />}>
      <OtherUserProfile params={params} />
    </Suspense>
  );
}
