"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import ConversationListItem from "@/components/Dashboard/Messenger/ConversationListItem";
import type { Conversation } from "@/components/data/mock-conversations";

type Props = {
  conversations: Conversation[];
  activeConversationId: string | null;
  onSelect: (id: string) => void;
};

export default function ConversationList({ conversations, activeConversationId, onSelect }: Props) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return conversations;
    return conversations.filter((conversation) => {
      const lastMessage = conversation.messages.at(-1);
      return (
        conversation.participant.name.toLowerCase().includes(query) ||
        lastMessage?.body.toLowerCase().includes(query)
      );
    });
  }, [conversations, search]);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border px-3 py-3">
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search messages"
            className="pl-8"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-2">
        {filtered.length === 0 ? (
          <p className="px-2 py-6 text-center text-sm text-muted-foreground">
            No conversations found
          </p>
        ) : (
          <div className="flex flex-col gap-0.5">
            {filtered.map((conversation) => (
              <ConversationListItem
                key={conversation.id}
                conversation={conversation}
                isActive={conversation.id === activeConversationId}
                onClick={() => onSelect(conversation.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
