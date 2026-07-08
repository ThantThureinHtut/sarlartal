import { getUser } from "@/app/(action)/serveraction";
import SnapCreateBar from "@/components/Dashboard/SnapCreateBar";

export default async function SnapComposer() {
  const user = await getUser();
  return (
    <SnapCreateBar
      user={user?.id ? { name: user.name, image: user.image } : undefined}
    />
  );
}
