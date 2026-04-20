import Profile from "@/components/Dashboard/Profile/Profile";
import ProfileClient from "@/components/Dashboard/Profile/ProfileClient";
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
