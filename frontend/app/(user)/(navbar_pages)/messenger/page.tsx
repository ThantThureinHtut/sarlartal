import MessengerShell from "@/components/Dashboard/Messenger/MessengerShell";
import { getConversations, getUser } from "@/app/(action)/serveraction";

export default async function MessengerPage() {
  const [conversations , user] = await Promise.all([getConversations(), getUser()]);
  const conversationsData = Array.isArray(conversations) ? conversations : [];
  return (
    <>
      {(Array.isArray(conversationsData) && user?.id) && (
        <MessengerShell conversations={conversationsData  } currentUserId={user.id} />
      )}
    </>
  );
}
