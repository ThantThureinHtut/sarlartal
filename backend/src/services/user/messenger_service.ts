import { prisma } from "../../../prisma/lib/prisma";

type SendMessageProps = {
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
};

const participantSelect = {
  id: true,
  name: true,
  image: true,
  status: true,
} as const;

export async function fetchConversations(userId: string) {
  const conversations = await prisma.conversation.findMany({
    where: {
      OR: [{ user1Id: userId }, { user2Id: userId }],
    },
    include: {
      user1: { select: participantSelect },
      user2: { select: participantSelect },
      messages: { orderBy: { createdAt: "asc" } },
    },
    orderBy: { updatedAt: "desc" },
  });

  return conversations.map((conversation) => {
    const participant =
      conversation.user1Id === userId ? conversation.user2 : conversation.user1;
    const unreadCount = conversation.messages.filter(
      (message) => message.receiverId === userId && !message.read,
    ).length;

    return {
      id: conversation.id,
      participant,
      messages: conversation.messages,
      unreadCount,
      createdAt: conversation.createdAt,
      updatedAt: conversation.updatedAt,
    };
  });
}

export async function sendMessage(props: SendMessageProps) {
  const conversation = await prisma.conversation.findFirst({
    where: {
      id: props.conversationId,
      OR: [
        {
          user1Id: props.senderId,
          user2Id: props.receiverId,
        },
        {
          user1Id: props.receiverId,
          user2Id: props.senderId,
        },
      ],
    },
    select: { id: true },
  });

  if (conversation === null) {
    return null;
  }

  const [message] = await prisma.$transaction([
    prisma.message.create({
      data: {
        conversationId: conversation.id,
        senderId: props.senderId,
        receiverId: props.receiverId,
        content: props.content,
        read: false,
      },
    }),
    prisma.conversation.update({
      where: { id: conversation.id },
      data: { updatedAt: new Date() },
    }),
  ]);

  return message;
}
