import CardBoxSkeleton from "@/components/Dashboard/CardBox/CardBoxSkeleton";
import SavedCardList from "@/components/Dashboard/CardBox/SavedCardList";

import { Suspense } from "react";

export default function SavedSnapsPage() {
  return (
    <div>
      <Suspense fallback={<CardBoxSkeleton />}>
        <SavedCardList />
      </Suspense>
    </div>
  );
}
