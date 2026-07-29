export declare const UserStatus: {
    readonly ONLINE: "ONLINE";
    readonly IDLE: "IDLE";
    readonly DND: "DND";
    readonly OFFLINE: "OFFLINE";
    readonly AWAY: "AWAY";
    readonly BUSY: "BUSY";
    readonly SAD: "SAD";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const NotificationType: {
    readonly LIKE: "LIKE";
    readonly COMMENT: "COMMENT";
    readonly FOLLOW: "FOLLOW";
    readonly MENTION: "MENTION";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
//# sourceMappingURL=enums.d.ts.map