export declare function getAllSnaps(): Promise<({
    user: {
        name: string;
        image: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    image_url: string;
    title: string;
    likeCount: number;
})[]>;
export declare function getFollowingSnaps(userId: string): Promise<({
    user: {
        name: string;
        image: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    image_url: string;
    title: string;
    likeCount: number;
})[]>;
export declare function getSavedSnaps(userId: string): Promise<(({
    user: {
        name: string;
        image: string | null;
        status: import("../../../generated/prisma/enums").UserStatus;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    image_url: string;
    title: string;
    likeCount: number;
}) | null)[]>;
export declare function createSnap(title: string, imageUrl: string | null, userId: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    image_url: string;
    title: string;
    likeCount: number;
}>;
export declare function toggleLike(userId: string, postId: string): Promise<"liked" | "unliked">;
export declare function toggleBookmark(currentUserId: string, postId: string): Promise<"bookmarked" | "unbookmarked">;
//# sourceMappingURL=snap_service.d.ts.map