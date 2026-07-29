type SendMessageProps = {
    conversationId: string;
    senderId: string;
    receiverId: string;
    content: string;
};
export declare function fetchConversations(userId: string): Promise<{
    id: string;
    participant: {
        id: string;
        name: string;
        image: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
    };
    messages: {
        id: string;
        createdAt: Date;
        conversationId: string;
        senderId: string;
        receiverId: string;
        content: string;
        read: boolean;
    }[];
    unreadCount: number;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare function sendMessage(props: SendMessageProps): Promise<{
    id: string;
    createdAt: Date;
    conversationId: string;
    senderId: string;
    receiverId: string;
    content: string;
    read: boolean;
} | null>;
export {};
//# sourceMappingURL=messenger_service.d.ts.map