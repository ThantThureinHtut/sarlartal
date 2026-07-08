import { BellIcon } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border px-6 py-16 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-muted ring-1 ring-border">
        <BellIcon className="size-6 text-muted-foreground" />
      </div>
      <h1 className="text-lg font-semibold text-foreground">You&apos;re all caught up</h1>
      <p className="max-w-xs text-sm text-muted-foreground">
        New notifications will appear here as they come in.
      </p>
    </div>
  );
}
