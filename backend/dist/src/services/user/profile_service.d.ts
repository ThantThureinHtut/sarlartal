export declare function updateAvatar(userId: string, image: string | null): Promise<{
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
}>;
export declare function updateName(userId: string, name: string): Promise<{
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
}>;
export declare function updateBio(userId: string, bio: string): Promise<{
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
}>;
export declare function updateStatus(userId: string, status: any): Promise<{
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
}>;
export declare function updateEmail(userId: string, email: string): Promise<{
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
}>;
//# sourceMappingURL=profile_service.d.ts.map