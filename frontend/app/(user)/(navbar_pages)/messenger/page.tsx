import { MessageCircleIcon } from "lucide-react";

export default function MessengerPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border px-6 py-16 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-muted ring-1 ring-border">
        <MessageCircleIcon className="size-6 text-muted-foreground" />
      </div>
      <h1 className="text-lg font-semibold text-foreground">No messages yet</h1>
      <p className="max-w-xs text-sm text-muted-foreground">
        Your conversations will show up here once you start messaging.
      </p>
    </div>
  );
}
