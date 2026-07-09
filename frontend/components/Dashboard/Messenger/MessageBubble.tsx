import { cn } from "@/lib/utils";
import type { Message } from "@/components/data/mock-conversations";

type Props = {
  message: Message;
  isOwn: boolean;
};

export default function MessageBubble({ message, isOwn }: Props) {
  return (
    <div
      data-slot="message-bubble"
      className={cn(
        "max-w-[75%] rounded-2xl px-3.5 py-2 text-sm shadow-sm ring-1 break-words",
        isOwn
          ? "ml-auto rounded-br-md bg-primary text-primary-foreground ring-primary/20"
          : "mr-auto rounded-bl-md bg-muted text-foreground ring-foreground/10",
      )}
    >
      {message.body}
    </div>
  );
}
