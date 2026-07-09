import type { Status } from "@/components/data/status";

export type Participant = {
  id: string;
  name: string;
  image: string | null;
  status: Status;
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  body: string;
  createdAt: string;
};

export type Conversation = {
  id: string;
  participant: Participant;
  messages: Message[];
  unreadCount: number;
};

export const CURRENT_USER_ID = "mock-current-user";

const hoursAgo = (h: number) => new Date(Date.now() - h * 60 * 60 * 1000).toISOString();

function conversation(
  id: string,
  participant: Participant,
  unreadCount: number,
  bodies: { from: "them" | "me"; body: string; hoursAgo: number }[],
): Conversation {
  return {
    id,
    participant,
    unreadCount,
    messages: bodies.map((m, i) => ({
      id: `${id}-msg-${i}`,
      conversationId: id,
      senderId: m.from === "me" ? CURRENT_USER_ID : participant.id,
      body: m.body,
      createdAt: hoursAgo(m.hoursAgo),
    })),
  };
}

export const MOCK_CONVERSATIONS: Conversation[] = [
  conversation(
    "conv-1",
    { id: "user-mira", name: "Mira Solano", image: "https://placehold.co/96x96/png?text=MS", status: "ONLINE" },
    2,
    [
      { from: "them", body: "Hey! Did you see the new snap I posted?", hoursAgo: 5 },
      { from: "me", body: "Not yet, pulling it up now", hoursAgo: 4.8 },
      { from: "them", body: "It's the sunset one from the rooftop", hoursAgo: 4.5 },
      { from: "them", body: "Let me know what you think 🙂", hoursAgo: 0.4 },
    ],
  ),
  conversation(
    "conv-2",
    { id: "user-jonah", name: "Jonah Reyes", image: null, status: "IDLE" },
    0,
    [
      { from: "them", body: "Are we still on for the shoot Saturday?", hoursAgo: 30 },
      { from: "me", body: "Yep, 10am at the usual spot", hoursAgo: 29 },
      { from: "them", body: "Perfect, see you then", hoursAgo: 28 },
    ],
  ),
  conversation(
    "conv-3",
    { id: "user-priya", name: "Priya Nandakumar", image: "https://placehold.co/96x96/png?text=PN", status: "DND" },
    5,
    [
      { from: "them", body: "Quick question about the caption on your last snap", hoursAgo: 3 },
      { from: "them", body: "Was that a quote from somewhere?", hoursAgo: 2.9 },
      { from: "them", body: "No worries if not, just curious", hoursAgo: 2.5 },
      { from: "them", body: "Also loved the framing on that shot", hoursAgo: 2 },
      { from: "them", body: "Okay ignore me, talk later!", hoursAgo: 1.2 },
    ],
  ),
  conversation(
    "conv-4",
    { id: "user-oliver", name: "Oliver Bennett", image: "https://placehold.co/96x96/png?text=OB", status: "OFFLINE" },
    0,
    [
      { from: "me", body: "Thanks for the follow!", hoursAgo: 96 },
      { from: "them", body: "Of course, your feed is great", hoursAgo: 95 },
    ],
  ),
  conversation(
    "conv-5",
    { id: "user-hana", name: "Hana Kobayashi", image: null, status: "BUSY" },
    1,
    [
      { from: "them", body: "Can you send over the raw files?", hoursAgo: 8 },
      { from: "me", body: "Sure, uploading now", hoursAgo: 7.5 },
      { from: "them", body: "Appreciate it 🙏", hoursAgo: 6 },
    ],
  ),
  conversation(
    "conv-6",
    { id: "user-devon", name: "Devon Marsh", image: "https://placehold.co/96x96/png?text=DM", status: "ONLINE" },
    0,
    [
      { from: "them", body: "Loved your latest post", hoursAgo: 50 },
      { from: "me", body: "Means a lot, thank you!", hoursAgo: 49 },
      { from: "them", body: "Keep them coming", hoursAgo: 48 },
    ],
  ),
  conversation(
    "conv-7",
    { id: "user-sana", name: "Sana Farooqi", image: "https://placehold.co/96x96/png?text=SF", status: "SAD" },
    0,
    [
      { from: "them", body: "Rough week, could use some good vibes", hoursAgo: 20 },
      { from: "me", body: "Sending them your way, call me if you need to talk", hoursAgo: 19.5 },
    ],
  ),
  conversation(
    "conv-8",
    { id: "user-theo", name: "Theo Wallace", image: null, status: "OFFLINE" },
    0,
    [{ from: "them", body: "Welcome to Sarlartal!", hoursAgo: 240 }],
  ),
];
