"use client"

import { useState } from "react"
import { Camera, Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Status, STATUSES } from "@/components/data/status"





type Props = {
  name: string
  status: Status
  onStatusChange: (s: Status) => void
  avatarSrc: string
  onAvatarClick: () => void
}

export default function ProfileHeader({
  name,
  status,
  onStatusChange,
  avatarSrc,
  onAvatarClick,
}: Props) {
  const [statusOpen, setStatusOpen] = useState(false)
  const current = STATUSES.find((s) => s.value == status)

  return (
    <div className="flex items-end gap-5 -mt-14 mb-10">
      {/* Avatar */}
      <div className="relative shrink-0">
        <div className="size-28 rounded-full ring-4 ring-background bg-muted overflow-hidden flex items-center justify-center shadow-xl">
          {avatarSrc ? (
            <Image src={avatarSrc} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <span className="text-4xl font-bold text-muted-foreground select-none">
              {name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        {/* Status dot */}
        <span className={cn(
          "absolute bottom-1.5 right-1.5 size-5 rounded-full ring-[3px] ring-background shadow-sm",
          current?.dot
        )} />

        {/* Camera overlay */}
        <button
          onClick={onAvatarClick}
          className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-full bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200"
          aria-label="Change avatar"
        >
          <Camera className="size-5 text-white" />
          <span className="text-[10px] text-white/90 font-medium">Change</span>
        </button>
      </div>

      {/* Name + status */}
      <div className="flex flex-col justify-end gap-2.5 pb-2 min-w-0 flex-1">
        <h1 className="text-xl sm:text-2xl font-bold font-heading tracking-tight leading-none truncate">
          {name}
        </h1>

        <div className="relative">
          <button
            onClick={() => setStatusOpen(!statusOpen)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold border border-transparent transition-all duration-200 hover:opacity-75",
              current?.pill
            )}
          >
            <span className={cn("size-1.5 rounded-full shrink-0", current?.dot)} />
            {current?.label}
            <ChevronDown className={cn(
              "size-3 transition-transform duration-200",
              statusOpen && "rotate-180"
            )} />
          </button>

          {statusOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setStatusOpen(false)} />
              <div className="absolute top-9 left-0 z-50 w-48 rounded-xl border border-border bg-popover/95 backdrop-blur-sm p-1 shadow-xl">
                {STATUSES.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => { onStatusChange(s.value); setStatusOpen(false) }}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs text-left transition-colors hover:bg-muted",
                      status === s.value && "bg-muted"
                    )}
                  >
                    <span className={cn("size-2.5 rounded-full shrink-0", s.dot)} />
                    <span className={status === s.value ? "font-semibold" : "font-medium"}>
                      {s.label}
                    </span>
                    {status === s.value && (
                      <Check className="size-3 ml-auto text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
