"use client";

import { useState, useRef } from "react";
import { Camera } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import AccountSection from "./AccountSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Status = "ONLINE" | "IDLE" | "DND" | "OFFLINE" | "BUSY" | "SAD";

export default function ProfileClient({ user }: { user: any }) {
  const [name, setName] = useState(user?.name || "John Doe");
  const [bio, setBio] = useState(user?.bio || "");
  const [email, setEmail] = useState(user?.email || "codermyanmarjack@gmail.com");
  const [status, setStatus] = useState<Status>(user?.status || "ONLINE");
  const [avatarSrc, setAvatarSrc] = useState(user?.avatar || "");
  const [coverSrc, setCoverSrc] = useState(user?.cover || "");

  const avatarRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setAvatarSrc(URL.createObjectURL(file));
  }

  function handleCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setCoverSrc(URL.createObjectURL(file));
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Cover */}
      <div className="relative h-44 sm:h-56 overflow-hidden">
        {coverSrc ? (
          <Image
            src={coverSrc}
            alt="Cover"
            className="w-full h-full object-cover"
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
        <Link href="/dashboard">
          <Button
            variant="outline"
            className="absolute top-3 left-4 flex items-center gap-1.5 rounded-lg  px-3 py-1.5 text-xs font-medium "
          >
            Back to home
          </Button>
        </Link>
        <button
          onClick={() => coverRef.current?.click()}
          className="absolute bottom-3 right-4 flex items-center gap-1.5 rounded-lg bg-background/75 backdrop-blur-md px-3 py-1.5 text-xs font-medium border border-border/50 shadow-sm hover:bg-background/90 transition-all duration-200"
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
          name={name}
          status={status}
          onStatusChange={setStatus}
          avatarSrc={avatarSrc}
          onAvatarClick={() => avatarRef.current?.click()}
        />

        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest shrink-0">
            Account
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-2.5 pb-16">
          <AccountSection
            name={name}
            bio={bio}
            email={email}
            onNameChange={setName}
            onBioChange={setBio}
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
