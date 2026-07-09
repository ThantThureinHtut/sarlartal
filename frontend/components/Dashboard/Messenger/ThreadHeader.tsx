import { ArrowLeftIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { STATUSES } from "@/components/data/status";
import type { Participant } from "@/components/data/mock-conversations";

type Props = {
  participant: Participant;
  onBack: () => void;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ThreadHeader({ participant, onBack }: Props) {
  const currentStatus = STATUSES.find((s) => s.value === participant.status)!;

  return (
    <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-card/85 px-4 py-3 backdrop-blur-md">
      <button
        type="button"
        aria-label="Back to conversations"
        onClick={onBack}
        className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground md:hidden"
      >
        <ArrowLeftIcon className="size-4" />
      </button>

      <div className="relative shrink-0">
        <Avatar className="size-9 ring-2 ring-background shadow-sm">
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

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold leading-tight text-foreground">
          {participant.name}
        </p>
        <p className="text-xs text-muted-foreground">{currentStatus.label}</p>
      </div>
    </div>
  );
}
