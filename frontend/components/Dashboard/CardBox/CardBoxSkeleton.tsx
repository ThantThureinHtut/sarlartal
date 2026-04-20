export default function CardBoxSkeleton() {
  return (
    <div className="mx-auto w-full max-w-md sm:max-w-lg m-5">
      <div className="relative overflow-hidden rounded-3xl aspect-4/5 bg-muted animate-pulse shadow-2xl shadow-black/40">

        {/* Top: avatar + name shimmer */}
        <div className="absolute inset-x-0 top-0 flex items-center gap-3 px-4 pt-4">
          <div className="size-10 rounded-full bg-foreground/10 shrink-0" />
          <div className="flex flex-col gap-1.5">
            <div className="h-3.5 w-28 rounded-full bg-foreground/10" />
            <div className="h-2.5 w-16 rounded-full bg-foreground/10" />
          </div>
        </div>

        {/* Bottom: action buttons shimmer */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4">
          <div className="h-9 w-20 rounded-full bg-foreground/10" />
          <div className="size-10 rounded-full bg-foreground/10" />
        </div>

      </div>
    </div>
  );
}
