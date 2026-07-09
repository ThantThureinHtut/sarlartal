import { formatDistance } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { STATUSES } from "@/components/data/status";
import type { Conversation } from "@/components/data/mock-conversations";

type Props = {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ConversationListItem({ conversation, isActive, onClick }: Props) {
  const { participant, unreadCount } = conversation;
  const lastMessage = conversation.messages.at(-1);
  const currentStatus = STATUSES.find((s) => s.value === participant.status)!;

  return (
    <button
      type="button"
      data-slot="conversation-item"
      data-selected={isActive}
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200",
        "hover:bg-muted active:translate-y-px",
        "data-[selected=true]:bg-muted data-[selected=true]:ring-1 data-[selected=true]:ring-foreground/10",
      )}
    >
      <div className="relative shrink-0">
        <Avatar className="size-10 ring-2 ring-background shadow-sm">
          <AvatarImage src={participant.image ?? undefined} alt={participant.name} />
          <AvatarFallback className="bg-muted text-muted-foreground">
            {getInitials(participant.name)}
          </AvatarFallback>
        </Avatar>
        <span
          className={cn(
            "absolute bottom-0 -right-0.5 size-2.5 rounded-full ring-2 ring-card",
            currentStatus.dot,
          )}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold leading-tight text-foreground">
            {participant.name}
          </p>
          {lastMessage && (
            <span className="shrink-0 text-[11px] text-muted-foreground">
              {formatDistance(new Date(lastMessage.createdAt), new Date(), { addSuffix: true })}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-xs text-muted-foreground">
            {lastMessage?.body ?? "No messages yet"}
          </p>
          {unreadCount > 0 && (
            <Badge className="h-4 min-w-4 shrink-0 px-1 text-[10px]">
              {unreadCount > 99 ? "99+" : unreadCount}
            </Badge>
          )}
        </div>
      </div>
    </button>
  );
}
