import { Suspense } from "react";
import MessengerShell from "@/components/Dashboard/Messenger/MessengerShell";
import { MOCK_CONVERSATIONS, CURRENT_USER_ID } from "@/components/data/mock-conversations";

export default function MessengerPage() {
  return (
    <Suspense fallback={null}>
      <MessengerShell conversations={MOCK_CONVERSATIONS} currentUserId={CURRENT_USER_ID} />
    </Suspense>
  );
}
