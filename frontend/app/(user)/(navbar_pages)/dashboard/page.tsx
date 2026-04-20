
import CardBoxSkeleton from "@/components/Dashboard/CardBox/CardBoxSkeleton";
import CardList from "@/components/Dashboard/CardBox/CardList";
import SnapCreateBar from "@/components/Dashboard/SnapCreateBar";
import { Suspense } from "react";

export default async function DashboardPage() {
  return (
    <div>
      <SnapCreateBar/>
      <Suspense fallback={<CardBoxSkeleton />}>
         <CardList/>
      </Suspense>
    </div>
  );
}
