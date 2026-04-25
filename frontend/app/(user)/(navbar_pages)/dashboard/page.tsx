import CardBoxSkeleton from "@/components/Dashboard/CardBox/CardBoxSkeleton";
import CardList from "@/components/Dashboard/CardBox/CardList";
import SnapCreateBar from "@/components/Dashboard/SnapCreateBar";

import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div>
      <Suspense fallback={<div className="p-4 bg-gray-100 rounded-lg animate-pulse w-full max-w-md mx-auto mb-4" />}>
        <SnapCreateBar />
      </Suspense>
      <Suspense fallback={<CardBoxSkeleton />}>
        <CardList />
      </Suspense>
    </div>
  );
}
