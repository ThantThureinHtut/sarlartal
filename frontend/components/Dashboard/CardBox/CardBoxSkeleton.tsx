export default function CardBoxSkeleton() {
  return (
    <div className="mx-auto w-full max-w-md sm:max-w-lg m-5">
      <div className="overflow-hidden rounded-3xl bg-card ring-1 ring-border shadow-sm animate-pulse">
        {/* Header shimmer */}
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="size-10 rounded-full bg-muted shrink-0" />
          <div className="flex flex-col gap-1.5">
            <div className="h-3.5 w-28 rounded-full bg-muted" />
            <div className="h-2.5 w-16 rounded-full bg-muted" />
          </div>
        </div>

        {/* Photo shimmer */}
        <div className="aspect-4/5 bg-muted" />

        {/* Footer shimmer */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="h-9 w-20 rounded-full bg-muted" />
          <div className="size-9 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}
