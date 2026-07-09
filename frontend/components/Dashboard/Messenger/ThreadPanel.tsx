"use client";

import { useEffect, useRef, useState } from "react";
import ThreadHeader from "@/components/Dashboard/Messenger/ThreadHeader";
import MessageBubble from "@/components/Dashboard/Messenger/MessageBubble";
import MessageInput from "@/components/Dashboard/Messenger/MessageInput";
import type { Conversation, Message } from "@/components/data/mock-conversations";

type Props = {
  conversation: Conversation;
  currentUserId: string;
  onBack: () => void;
};

export default function ThreadPanel({ conversation, currentUserId, onBack }: Props) {
  const [messages, setMessages] = useState<Message[]>(conversation.messages);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(conversation.messages);
  }, [conversation]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  const handleSend = (body: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${conversation.id}-local-${prev.length}`,
        conversationId: conversation.id,
        senderId: currentUserId,
        body,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  return (
    <div className="flex h-full flex-1 flex-col">
      <ThreadHeader participant={conversation.participant} onBack={onBack} />

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwn={message.senderId === currentUserId}
          />
        ))}
        <div ref={bottomRef} />
      </div>

      <MessageInput onSend={handleSend} />
    </div>
  );
}
