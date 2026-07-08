import CardBoxSkeleton from "@/components/Dashboard/CardBox/CardBoxSkeleton";
import CardList from "@/components/Dashboard/CardBox/CardList";
import SnapComposer from "@/components/Dashboard/SnapComposer";

import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <Suspense fallback={<div className="p-4 bg-muted rounded-lg ring-1 ring-border animate-pulse w-full max-w-md mx-auto" />}>
        <SnapComposer />
      </Suspense>
      <Suspense fallback={<CardBoxSkeleton />}>
        <CardList />
      </Suspense>
    </div>
  );
}
