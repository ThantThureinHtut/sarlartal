export default function OtherUserProfileSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Cover */}
      <div className="relative h-44 sm:h-60 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-muted-foreground/10 via-muted-foreground/5 to-background" />
      </div>

      {/* Main */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Avatar + name area — mirrors ProfileHeader */}
        <div className="flex items-end gap-4 -mt-14 mb-5">
          <div className="size-28 rounded-full bg-muted border-4 border-background shrink-0" />

          <div className="mb-2 flex flex-col gap-2 flex-1">
            <div className="h-5 w-36 rounded-md bg-muted" />
            <div className="h-4 w-20 rounded-full bg-muted" />
          </div>
        </div>

        {/* Stats row — mirrors ProfileStats */}
        <div className="flex items-center gap-4 rounded-2xl border border-border px-5 py-4 mb-5">
          <div className="h-8 flex-1 rounded-md bg-muted" />
          <div className="h-8 flex-1 rounded-md bg-muted" />
          <div className="h-8 flex-1 rounded-md bg-muted" />
        </div>

        {/* Follow button */}
        <div className="h-8 w-24 rounded-full bg-muted mb-6" />
      </div>
    </div>
  );
}
