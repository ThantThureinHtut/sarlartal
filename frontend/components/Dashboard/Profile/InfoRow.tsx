"use client"

import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = {
  icon: React.ReactNode
  label: string
  value: string
  muted?: boolean
  onEdit: () => void
}

export default function InfoRow({ icon, label, value, muted = false, onEdit }: Props) {
  return (
    <div className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-border/80 hover:shadow-sm">
      <div className="flex items-start gap-3.5 min-w-0">
        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="min-w-0 space-y-0.5">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
            {label}
          </p>
          <p className={cn(
            "text-sm leading-snug wrap-break-word",
            muted ? "text-muted-foreground italic" : "text-foreground"
          )}>
            {value}
          </p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={onEdit}
        className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
      >
        <Pencil className="size-3.5" />
        <span className="sr-only">Edit {label}</span>
      </Button>
    </div>
  )
}
