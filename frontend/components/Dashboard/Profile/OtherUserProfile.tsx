import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getUserProfile } from "@/app/(action)/serveraction";
import ProfileHeader from "./ProfileHeader";

export default async function OtherUserProfile({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const data = await getUserProfile(userId);

  if (!data?.user) {
    notFound();
  }

  const { user, isFollowing, isSelf } = data;

  return (
    <div className="min-h-screen bg-background">
      {/* Cover */}
      <div className="relative h-44 sm:h-60 overflow-hidden">
        {user.cover_image ? (
          <Image
            src={user.cover_image}
            alt="Cover"
            fill
            sizes="100vw"
            preload
            className="object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-linear-to-br from-lime-500/50 via-emerald-500/20 to-background" />
            <div
              className="absolute inset-0 opacity-[0.07] dark:opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent" />

        <Link
          href="/dashboard"
          className="absolute top-3 left-4 flex items-center gap-1.5 rounded-full bg-black/30 shadow-sm backdrop-blur-md ring-1 ring-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-black/45 transition-all duration-200"
        >
          <ArrowLeft className="size-3.5" />
          Back to home
        </Link>
      </div>

      {/* Main */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 pb-16">
        <ProfileHeader
          userId={user.id}
          name={user.name}
          status={user.status}
          avatarSrc={user.image ?? ""}
          postsCount={user._count.posts}
          isSelf={isSelf}
          isFollowing={isFollowing}
          followersCount={user._count.followers}
          followingCount={user._count.following}
        />
      </div>
    </div>
  );
}
