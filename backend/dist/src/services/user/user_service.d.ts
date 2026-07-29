export declare function getPublicUserProfile(targetUserId: string, viewerId?: string): Promise<{
    user: {
        id: string;
        name: string;
        image: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
        cover_image: string | null;
        _count: {
            posts: number;
            followers: number;
            following: number;
        };
    };
    isFollowing: boolean;
    isSelf: boolean;
} | null>;
export declare function getUserProfile(userId: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image: string | null;
    status: import("../../../generated/prisma/enums").UserStatus;
    bio: string | null;
    cover_image: string | null;
    likes: {
        createdAt: Date;
        userId: string;
        postId: string;
    }[];
    _count: {
        posts: number;
        followers: number;
    };
    following: {
        createdAt: Date;
        followerId: string;
        followingId: string;
    }[];
    savedBySnaps: {
        id: string;
        authorId: string;
        postId: string;
        savedUserId: string;
    }[];
} | null>;
//# sourceMappingURL=user_service.d.ts.map