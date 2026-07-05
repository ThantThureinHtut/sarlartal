import CardBoxSkeleton from "@/components/Dashboard/CardBox/CardBoxSkeleton";
import FollowingCardList from "@/components/Dashboard/CardBox/FollowingCardList";

import { Suspense } from "react";

export default function FollowingPostsPage() {
  return (
    <div>
      <Suspense fallback={<CardBoxSkeleton />}>
        <FollowingCardList />
      </Suspense>
    </div>
  );
}
