import { MessageCircleIcon } from "lucide-react";

export default function ThreadEmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-muted ring-1 ring-border">
        <MessageCircleIcon className="size-6 text-muted-foreground" />
      </div>
      <h2 className="text-lg font-semibold text-foreground">Select a conversation</h2>
      <p className="max-w-xs text-sm text-muted-foreground">
        Choose someone from the list to see your messages.
      </p>
    </div>
  );
}
