"use client";
import { MessageCircleIcon , BellIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function MessageAndNotification() {
    const [messageCount , setMessageCount] = useState<number>(0);
    const [notificationCount , setNotificationCount] = useState<number>(0);
  return (
    <div className="flex items-center  gap-2">
      <Link href="/messenger" aria-label="Messenger">
        <div className="relative flex items-center justify-center size-9 rounded-lg text-muted-foreground transition-colors  hover:text-foreground bg-accent">
          <MessageCircleIcon className="size-5" />
          {messageCount > 0 && (
            <Badge className="absolute -top-0.5 -right-1 min-w-4 h-4 px-1 text-[10px] flex items-center justify-center">
              {messageCount > 99 ? "99+" : messageCount}
            </Badge>
          )}
        </div>
      </Link>
      <Link href="/notifications" aria-label="Notifications">
        <div className="relative flex items-center justify-center size-9 rounded-lg text-muted-foreground transition-colors  hover:text-foreground bg-accent">
          <BellIcon className="size-5" />
          {notificationCount > 0 && (
            <Badge className="absolute -top-0.5 -right-1 min-w-4 h-4 px-1 text-[10px] flex items-center justify-center">
              {notificationCount > 99 ? "99+" : notificationCount}
            </Badge>
          )}
        </div>
      </Link>
    </div>
  );
}
