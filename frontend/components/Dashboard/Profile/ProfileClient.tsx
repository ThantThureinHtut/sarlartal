"use client";
import { useState, useRef } from "react";
import { ArrowLeft, Camera } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import ProfileBio from "./ProfileBio";
import AccountSection from "./AccountSection";
import Image from "next/image";
import Link from "next/link";

type Status = "ONLINE" | "IDLE" | "DND" | "OFFLINE" | "BUSY" | "SAD";
type Props = {
  id: string;
  name: string;
  email: string;
  bio?: string;
  status?: Status;
  image?: string | null;
  cover_image?: string;
  emailVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;
  following?: { followingId: string }[];
  _count?: {
    posts: number;
    followers: number;
  };
}
export default function ProfileClient({ user }: { user?: Props }) {
  const [name, setName] = useState(user?.name || "John Doe");
  const [bio, setBio] = useState(user?.bio || "");
  const [email, setEmail] = useState(user?.email || "codermyanmarjack@gmail.com");
  const [status, setStatus] = useState<Status>(user?.status || "ONLINE");
  const [avatarSrc, setAvatarSrc] = useState(user?.image || "");
  const [coverSrc, setCoverSrc] = useState(user?.cover_image || "");

  const postsCount = user?._count?.posts ?? 0;
  const followersCount = user?._count?.followers ?? 0;
  const followingCount = user?.following?.length ?? 0;

  const avatarRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);

  

  async function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const previousAvatarSrc = avatarSrc;
    const objectUrl = URL.createObjectURL(file);
    setAvatarSrc(objectUrl);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/user/profile/avatar/create`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (!res.ok) {
        setAvatarSrc(previousAvatarSrc);
        URL.revokeObjectURL(objectUrl);
        return;
      }

      if (previousAvatarSrc.startsWith("blob:")) {
        URL.revokeObjectURL(previousAvatarSrc);
      }
    } catch {
      setAvatarSrc(previousAvatarSrc);
      URL.revokeObjectURL(objectUrl);
    }
  }

  function handleCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (coverSrc.startsWith("blob:")) {
      URL.revokeObjectURL(coverSrc);
    }
    setCoverSrc(URL.createObjectURL(file));
    // TODO: no backend endpoint exists yet to persist cover_image (see
    // backend/src/routes/user/profile_route.ts, which only has /avatar/create).
    // This preview is local-only and reverts to the last-saved cover_image on next page load.
  }

  const onStatusChange = async (s: Status) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/user/profile/status/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ status: s }),
    });
    setStatus(s);
  };



  return (
    <div className="min-h-screen bg-background">
      {/* Cover */}
      <div className="relative h-44 sm:h-60 overflow-hidden">
        {coverSrc ? (
          <Image
            src={coverSrc}
            alt="Cover"
            fill
            sizes="100vw"
            preload
            unoptimized={coverSrc.startsWith("blob:")}
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
        {/* Bottom fade so the avatar/name always read cleanly over any cover photo */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent" />

        <Link
          href="/dashboard"
          className="absolute top-3 left-4 flex items-center gap-1.5 rounded-full bg-black/30 shadow-sm backdrop-blur-md ring-1 ring-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-black/45 transition-all duration-200"
        >
          <ArrowLeft className="size-3.5" />
          Back to home
        </Link>
        <button
          onClick={() => coverRef.current?.click()}
          className="absolute bottom-3 right-4 flex items-center gap-1.5 rounded-full bg-black/30 shadow-sm backdrop-blur-md ring-1 ring-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-black/45 transition-all duration-200"
        >
          <Camera className="size-3.5" />
          Edit Cover
        </button>
        <input
          ref={coverRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleCoverChange}
        />
      </div>

      {/* Main */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <ProfileHeader
          userId={user?.id || ""}
          name={name}
          status={status}
          onStatusChange={onStatusChange}
          avatarSrc={avatarSrc}
          onAvatarClick={() => avatarRef.current?.click()}
          isSelf
          postsCount={postsCount}
          followersCount={followersCount}
          followingCount={followingCount}
        />

        <div className="mb-6">
          <ProfileBio bio={bio} onBioChange={setBio} />
        </div>

        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest shrink-0">
            Account Settings
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-2.5 pb-16">
          <AccountSection
            name={name}
            email={email}
            onNameChange={setName}
            onEmailChange={setEmail}
          />
        </div>
      </div>

      {/* Hidden avatar input — owned here so the ref stays in ProfileClient */}
      <input
        ref={avatarRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleAvatarChange}
      />
    </div>
  );
}
