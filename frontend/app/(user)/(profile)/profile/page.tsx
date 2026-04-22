import Profile from "@/components/Dashboard/Profile/Profile";
import { Suspense } from "react";

export default function ProfilePage() {
  return (
    <>
      <Suspense>
        <Profile />
      </Suspense>
    </>
  );
}
