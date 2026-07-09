"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ConversationList from "@/components/Dashboard/Messenger/ConversationList";
import ThreadPanel from "@/components/Dashboard/Messenger/ThreadPanel";
import ThreadEmptyState from "@/components/Dashboard/Messenger/ThreadEmptyState";
import type { Conversation } from "@/components/data/mock-conversations";

type Props = {
  conversations: Conversation[];
  currentUserId: string;
};

export default function MessengerShell({ conversations, currentUserId }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedConversation = conversations.find((c) => c.id === selectedId) ?? null;

  return (
    <div className="flex h-full">
      <aside
        className={cn(
          "flex w-full flex-col border-r border-border md:flex md:w-80 lg:w-96",
          selectedId && "hidden md:flex",
        )}
      >
        <ConversationList
          conversations={conversations}
          activeConversationId={selectedId}
          onSelect={setSelectedId}
        />
      </aside>

      <section className={cn("flex-1 flex-col", selectedId ? "flex" : "hidden md:flex")}>
        {selectedConversation ? (
          <ThreadPanel
            conversation={selectedConversation}
            currentUserId={currentUserId}
            onBack={() => setSelectedId(null)}
          />
        ) : (
          <ThreadEmptyState />
        )}
      </section>
    </div>
  );
}
