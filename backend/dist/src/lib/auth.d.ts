export declare const auth: import("better-auth").Auth<{
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    trustedOrigins: string[];
    emailAndPassword: {
        enabled: true;
        autoSignIn: true;
    };
    user: {
        additionalFields: {
            status: {
                type: "string";
                defaultValue: string;
            };
            bio: {
                type: "string";
                required: false;
            };
            cover_image: {
                type: "string";
                required: false;
            };
        };
    };
}>;
//# sourceMappingURL=auth.d.ts.map