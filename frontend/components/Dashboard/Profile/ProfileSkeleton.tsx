export default function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Cover */}
      <div className="relative h-44 sm:h-56 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-muted-foreground/10 via-muted-foreground/5 to-background" />
      </div>

      {/* Main */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Avatar + name area — mirrors ProfileHeader */}
        <div className="flex items-end gap-4 -mt-14 mb-6">
          {/* Avatar */}
          <div className="size-28 rounded-full bg-muted border-4 border-background shrink-0" />

          <div className="mb-2 flex flex-col gap-2 flex-1">
            {/* Name */}
            <div className="h-5 w-36 rounded-md bg-muted" />
            {/* Status pill */}
            <div className="h-4 w-20 rounded-full bg-muted" />
          </div>
        </div>

        {/* Section divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-3 w-16 rounded bg-muted shrink-0" />
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Account rows */}
        <div className="space-y-2.5 pb-16">
          {["Bio", "Display Name", "Email", "Password"].map((label) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-xl border border-border px-4 py-3"
            >
              <div className="flex flex-col gap-1.5">
                <div className="h-3 w-20 rounded bg-muted" />
                <div className="h-4 w-40 rounded bg-muted" />
              </div>
              <div className="size-7 rounded-md bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
