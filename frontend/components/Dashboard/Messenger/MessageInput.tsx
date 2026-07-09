"use client";

import { useState } from "react";
import { SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Props = {
  onSend: (body: string) => void;
};

export default function MessageInput({ onSend }: Props) {
  const [value, setValue] = useState("");

  const canSend = value.trim().length > 0;

  const handleSend = () => {
    if (!canSend) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <div className="flex items-end gap-2 border-t border-border bg-card px-4 py-3">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        placeholder="Write a message..."
        className="max-h-32 min-h-9 resize-none py-1.5"
      />
      <Button
        type="button"
        size="icon"
        aria-label="Send message"
        disabled={!canSend}
        onClick={handleSend}
      >
        <SendIcon />
      </Button>
    </div>
  );
}
