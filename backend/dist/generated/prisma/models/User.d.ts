import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    bio: string | null;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    bio: string | null;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    emailVerified: number;
    bio: number;
    image: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    bio?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    bio?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    bio?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio: string | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    bio?: Prisma.StringNullableFilter<"User"> | string | null;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    sessions?: Prisma.SessionListRelationFilter;
    accounts?: Prisma.AccountListRelationFilter;
    posts?: Prisma.PostListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    followers?: Prisma.FollowListRelationFilter;
    following?: Prisma.FollowListRelationFilter;
    follows?: Prisma.FollowListRelationFilter;
    recipientNotifications?: Prisma.NotificationListRelationFilter;
    sentNotifications?: Prisma.NotificationListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    snapAuthor?: Prisma.SavedSnapListRelationFilter;
    savedBySnaps?: Prisma.SavedSnapListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    accounts?: Prisma.AccountOrderByRelationAggregateInput;
    posts?: Prisma.PostOrderByRelationAggregateInput;
    likes?: Prisma.LikeOrderByRelationAggregateInput;
    followers?: Prisma.FollowOrderByRelationAggregateInput;
    following?: Prisma.FollowOrderByRelationAggregateInput;
    follows?: Prisma.FollowOrderByRelationAggregateInput;
    recipientNotifications?: Prisma.NotificationOrderByRelationAggregateInput;
    sentNotifications?: Prisma.NotificationOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    snapAuthor?: Prisma.SavedSnapOrderByRelationAggregateInput;
    savedBySnaps?: Prisma.SavedSnapOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    bio?: Prisma.StringNullableFilter<"User"> | string | null;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    sessions?: Prisma.SessionListRelationFilter;
    accounts?: Prisma.AccountListRelationFilter;
    posts?: Prisma.PostListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    followers?: Prisma.FollowListRelationFilter;
    following?: Prisma.FollowListRelationFilter;
    follows?: Prisma.FollowListRelationFilter;
    recipientNotifications?: Prisma.NotificationListRelationFilter;
    sentNotifications?: Prisma.NotificationListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    snapAuthor?: Prisma.SavedSnapListRelationFilter;
    savedBySnaps?: Prisma.SavedSnapListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    emailVerified?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    bio?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    image?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserUpsertWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserCreateNestedOneWithoutAccountsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
    upsert?: Prisma.UserUpsertWithoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput, Prisma.UserUpdateWithoutAccountsInput>, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
};
export type UserCreateNestedOneWithoutPostsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPostsInput, Prisma.UserUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPostsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPostsInput, Prisma.UserUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPostsInput;
    upsert?: Prisma.UserUpsertWithoutPostsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPostsInput, Prisma.UserUpdateWithoutPostsInput>, Prisma.UserUncheckedUpdateWithoutPostsInput>;
};
export type UserCreateNestedOneWithoutLikesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLikesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLikesInput;
    upsert?: Prisma.UserUpsertWithoutLikesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLikesInput, Prisma.UserUpdateWithoutLikesInput>, Prisma.UserUncheckedUpdateWithoutLikesInput>;
};
export type UserCreateNestedOneWithoutFollowingInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowingInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutFollowersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowersInput, Prisma.UserUncheckedCreateWithoutFollowersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutFollowsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowsInput, Prisma.UserUncheckedCreateWithoutFollowsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowingInput;
    upsert?: Prisma.UserUpsertWithoutFollowingInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFollowingInput, Prisma.UserUpdateWithoutFollowingInput>, Prisma.UserUncheckedUpdateWithoutFollowingInput>;
};
export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowersInput, Prisma.UserUncheckedCreateWithoutFollowersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowersInput;
    upsert?: Prisma.UserUpsertWithoutFollowersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFollowersInput, Prisma.UserUpdateWithoutFollowersInput>, Prisma.UserUncheckedUpdateWithoutFollowersInput>;
};
export type UserUpdateOneWithoutFollowsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowsInput, Prisma.UserUncheckedCreateWithoutFollowsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowsInput;
    upsert?: Prisma.UserUpsertWithoutFollowsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFollowsInput, Prisma.UserUpdateWithoutFollowsInput>, Prisma.UserUncheckedUpdateWithoutFollowsInput>;
};
export type UserCreateNestedOneWithoutSentNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSentNotificationsInput, Prisma.UserUncheckedCreateWithoutSentNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSentNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutRecipientNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRecipientNotificationsInput, Prisma.UserUncheckedCreateWithoutRecipientNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRecipientNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutSentNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSentNotificationsInput, Prisma.UserUncheckedCreateWithoutSentNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSentNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutSentNotificationsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSentNotificationsInput, Prisma.UserUpdateWithoutSentNotificationsInput>, Prisma.UserUncheckedUpdateWithoutSentNotificationsInput>;
};
export type UserUpdateOneRequiredWithoutRecipientNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRecipientNotificationsInput, Prisma.UserUncheckedCreateWithoutRecipientNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRecipientNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutRecipientNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRecipientNotificationsInput, Prisma.UserUpdateWithoutRecipientNotificationsInput>, Prisma.UserUncheckedUpdateWithoutRecipientNotificationsInput>;
};
export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateNestedOneWithoutSnapAuthorInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSnapAuthorInput, Prisma.UserUncheckedCreateWithoutSnapAuthorInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSnapAuthorInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutSavedBySnapsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSavedBySnapsInput, Prisma.UserUncheckedCreateWithoutSavedBySnapsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSavedBySnapsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSnapAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSnapAuthorInput, Prisma.UserUncheckedCreateWithoutSnapAuthorInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSnapAuthorInput;
    upsert?: Prisma.UserUpsertWithoutSnapAuthorInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSnapAuthorInput, Prisma.UserUpdateWithoutSnapAuthorInput>, Prisma.UserUncheckedUpdateWithoutSnapAuthorInput>;
};
export type UserUpdateOneRequiredWithoutSavedBySnapsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSavedBySnapsInput, Prisma.UserUncheckedCreateWithoutSavedBySnapsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSavedBySnapsInput;
    upsert?: Prisma.UserUpsertWithoutSavedBySnapsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSavedBySnapsInput, Prisma.UserUpdateWithoutSavedBySnapsInput>, Prisma.UserUncheckedUpdateWithoutSavedBySnapsInput>;
};
export type UserCreateWithoutSessionsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
};
export type UserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAccountsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAccountsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAccountsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
};
export type UserUpsertWithoutAccountsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
};
export type UserUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPostsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPostsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPostsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPostsInput, Prisma.UserUncheckedCreateWithoutPostsInput>;
};
export type UserUpsertWithoutPostsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPostsInput, Prisma.UserUncheckedUpdateWithoutPostsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPostsInput, Prisma.UserUncheckedCreateWithoutPostsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPostsInput, Prisma.UserUncheckedUpdateWithoutPostsInput>;
};
export type UserUpdateWithoutPostsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPostsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLikesInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLikesInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLikesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
};
export type UserUpsertWithoutLikesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLikesInput, Prisma.UserUncheckedUpdateWithoutLikesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLikesInput, Prisma.UserUncheckedUpdateWithoutLikesInput>;
};
export type UserUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutFollowingInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFollowingInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFollowingInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput>;
};
export type UserCreateWithoutFollowersInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFollowersInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFollowersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowersInput, Prisma.UserUncheckedCreateWithoutFollowersInput>;
};
export type UserCreateWithoutFollowsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFollowsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFollowsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowsInput, Prisma.UserUncheckedCreateWithoutFollowsInput>;
};
export type UserUpsertWithoutFollowingInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFollowingInput, Prisma.UserUncheckedUpdateWithoutFollowingInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFollowingInput, Prisma.UserUncheckedUpdateWithoutFollowingInput>;
};
export type UserUpdateWithoutFollowingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutFollowersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFollowersInput, Prisma.UserUncheckedUpdateWithoutFollowersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowersInput, Prisma.UserUncheckedCreateWithoutFollowersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFollowersInput, Prisma.UserUncheckedUpdateWithoutFollowersInput>;
};
export type UserUpdateWithoutFollowersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutFollowsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFollowsInput, Prisma.UserUncheckedUpdateWithoutFollowsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowsInput, Prisma.UserUncheckedCreateWithoutFollowsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFollowsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFollowsInput, Prisma.UserUncheckedUpdateWithoutFollowsInput>;
};
export type UserUpdateWithoutFollowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFollowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSentNotificationsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSentNotificationsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSentNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSentNotificationsInput, Prisma.UserUncheckedCreateWithoutSentNotificationsInput>;
};
export type UserCreateWithoutRecipientNotificationsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRecipientNotificationsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRecipientNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRecipientNotificationsInput, Prisma.UserUncheckedCreateWithoutRecipientNotificationsInput>;
};
export type UserCreateWithoutNotificationsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutSentNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSentNotificationsInput, Prisma.UserUncheckedUpdateWithoutSentNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSentNotificationsInput, Prisma.UserUncheckedCreateWithoutSentNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSentNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSentNotificationsInput, Prisma.UserUncheckedUpdateWithoutSentNotificationsInput>;
};
export type UserUpdateWithoutSentNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSentNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutRecipientNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRecipientNotificationsInput, Prisma.UserUncheckedUpdateWithoutRecipientNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRecipientNotificationsInput, Prisma.UserUncheckedCreateWithoutRecipientNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRecipientNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRecipientNotificationsInput, Prisma.UserUncheckedUpdateWithoutRecipientNotificationsInput>;
};
export type UserUpdateWithoutRecipientNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRecipientNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSnapAuthorInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    savedBySnaps?: Prisma.SavedSnapCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSnapAuthorInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSnapAuthorInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSnapAuthorInput, Prisma.UserUncheckedCreateWithoutSnapAuthorInput>;
};
export type UserCreateWithoutSavedBySnapsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapCreateNestedManyWithoutAuthorInput;
};
export type UserUncheckedCreateWithoutSavedBySnapsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    bio?: string | null;
    image?: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    posts?: Prisma.PostUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    follows?: Prisma.FollowUncheckedCreateNestedManyWithoutUserInput;
    recipientNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    sentNotifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    snapAuthor?: Prisma.SavedSnapUncheckedCreateNestedManyWithoutAuthorInput;
};
export type UserCreateOrConnectWithoutSavedBySnapsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSavedBySnapsInput, Prisma.UserUncheckedCreateWithoutSavedBySnapsInput>;
};
export type UserUpsertWithoutSnapAuthorInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSnapAuthorInput, Prisma.UserUncheckedUpdateWithoutSnapAuthorInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSnapAuthorInput, Prisma.UserUncheckedCreateWithoutSnapAuthorInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSnapAuthorInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSnapAuthorInput, Prisma.UserUncheckedUpdateWithoutSnapAuthorInput>;
};
export type UserUpdateWithoutSnapAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    savedBySnaps?: Prisma.SavedSnapUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSnapAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    savedBySnaps?: Prisma.SavedSnapUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutSavedBySnapsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSavedBySnapsInput, Prisma.UserUncheckedUpdateWithoutSavedBySnapsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSavedBySnapsInput, Prisma.UserUncheckedCreateWithoutSavedBySnapsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSavedBySnapsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSavedBySnapsInput, Prisma.UserUncheckedUpdateWithoutSavedBySnapsInput>;
};
export type UserUpdateWithoutSavedBySnapsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUpdateManyWithoutAuthorNestedInput;
};
export type UserUncheckedUpdateWithoutSavedBySnapsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    posts?: Prisma.PostUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    follows?: Prisma.FollowUncheckedUpdateManyWithoutUserNestedInput;
    recipientNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    sentNotifications?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    snapAuthor?: Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    sessions: number;
    accounts: number;
    posts: number;
    likes: number;
    followers: number;
    following: number;
    follows: number;
    recipientNotifications: number;
    sentNotifications: number;
    notifications: number;
    snapAuthor: number;
    savedBySnaps: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
    posts?: boolean | UserCountOutputTypeCountPostsArgs;
    likes?: boolean | UserCountOutputTypeCountLikesArgs;
    followers?: boolean | UserCountOutputTypeCountFollowersArgs;
    following?: boolean | UserCountOutputTypeCountFollowingArgs;
    follows?: boolean | UserCountOutputTypeCountFollowsArgs;
    recipientNotifications?: boolean | UserCountOutputTypeCountRecipientNotificationsArgs;
    sentNotifications?: boolean | UserCountOutputTypeCountSentNotificationsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    snapAuthor?: boolean | UserCountOutputTypeCountSnapAuthorArgs;
    savedBySnaps?: boolean | UserCountOutputTypeCountSavedBySnapsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PostWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLikesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LikeWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FollowWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FollowWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFollowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FollowWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountRecipientNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSentNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSnapAuthorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedSnapWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSavedBySnapsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedSnapWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    bio?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    posts?: boolean | Prisma.User$postsArgs<ExtArgs>;
    likes?: boolean | Prisma.User$likesArgs<ExtArgs>;
    followers?: boolean | Prisma.User$followersArgs<ExtArgs>;
    following?: boolean | Prisma.User$followingArgs<ExtArgs>;
    follows?: boolean | Prisma.User$followsArgs<ExtArgs>;
    recipientNotifications?: boolean | Prisma.User$recipientNotificationsArgs<ExtArgs>;
    sentNotifications?: boolean | Prisma.User$sentNotificationsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    snapAuthor?: boolean | Prisma.User$snapAuthorArgs<ExtArgs>;
    savedBySnaps?: boolean | Prisma.User$savedBySnapsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    bio?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    bio?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    bio?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "bio" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    posts?: boolean | Prisma.User$postsArgs<ExtArgs>;
    likes?: boolean | Prisma.User$likesArgs<ExtArgs>;
    followers?: boolean | Prisma.User$followersArgs<ExtArgs>;
    following?: boolean | Prisma.User$followingArgs<ExtArgs>;
    follows?: boolean | Prisma.User$followsArgs<ExtArgs>;
    recipientNotifications?: boolean | Prisma.User$recipientNotificationsArgs<ExtArgs>;
    sentNotifications?: boolean | Prisma.User$sentNotificationsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    snapAuthor?: boolean | Prisma.User$snapAuthorArgs<ExtArgs>;
    savedBySnaps?: boolean | Prisma.User$savedBySnapsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        accounts: Prisma.$AccountPayload<ExtArgs>[];
        posts: Prisma.$PostPayload<ExtArgs>[];
        likes: Prisma.$LikePayload<ExtArgs>[];
        followers: Prisma.$FollowPayload<ExtArgs>[];
        following: Prisma.$FollowPayload<ExtArgs>[];
        follows: Prisma.$FollowPayload<ExtArgs>[];
        recipientNotifications: Prisma.$NotificationPayload<ExtArgs>[];
        sentNotifications: Prisma.$NotificationPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        snapAuthor: Prisma.$SavedSnapPayload<ExtArgs>[];
        savedBySnaps: Prisma.$SavedSnapPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        bio: string | null;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    accounts<T extends Prisma.User$accountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    posts<T extends Prisma.User$postsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    likes<T extends Prisma.User$likesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    followers<T extends Prisma.User$followersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    following<T extends Prisma.User$followingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    follows<T extends Prisma.User$followsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$followsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    recipientNotifications<T extends Prisma.User$recipientNotificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$recipientNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sentNotifications<T extends Prisma.User$sentNotificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sentNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    snapAuthor<T extends Prisma.User$snapAuthorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$snapAuthorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    savedBySnaps<T extends Prisma.User$savedBySnapsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$savedBySnapsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly emailVerified: Prisma.FieldRef<"User", 'Boolean'>;
    readonly bio: Prisma.FieldRef<"User", 'String'>;
    readonly image: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.sessions
 */
export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: Prisma.SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
/**
 * User.accounts
 */
export type User$accountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: Prisma.AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
/**
 * User.posts
 */
export type User$postsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: Prisma.PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: Prisma.PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PostInclude<ExtArgs> | null;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput | Prisma.PostOrderByWithRelationInput[];
    cursor?: Prisma.PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostScalarFieldEnum | Prisma.PostScalarFieldEnum[];
};
/**
 * User.likes
 */
export type User$likesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: Prisma.LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    cursor?: Prisma.LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
/**
 * User.followers
 */
export type User$followersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: Prisma.FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: Prisma.FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowInclude<ExtArgs> | null;
    where?: Prisma.FollowWhereInput;
    orderBy?: Prisma.FollowOrderByWithRelationInput | Prisma.FollowOrderByWithRelationInput[];
    cursor?: Prisma.FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FollowScalarFieldEnum | Prisma.FollowScalarFieldEnum[];
};
/**
 * User.following
 */
export type User$followingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: Prisma.FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: Prisma.FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowInclude<ExtArgs> | null;
    where?: Prisma.FollowWhereInput;
    orderBy?: Prisma.FollowOrderByWithRelationInput | Prisma.FollowOrderByWithRelationInput[];
    cursor?: Prisma.FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FollowScalarFieldEnum | Prisma.FollowScalarFieldEnum[];
};
/**
 * User.follows
 */
export type User$followsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: Prisma.FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: Prisma.FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowInclude<ExtArgs> | null;
    where?: Prisma.FollowWhereInput;
    orderBy?: Prisma.FollowOrderByWithRelationInput | Prisma.FollowOrderByWithRelationInput[];
    cursor?: Prisma.FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FollowScalarFieldEnum | Prisma.FollowScalarFieldEnum[];
};
/**
 * User.recipientNotifications
 */
export type User$recipientNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.sentNotifications
 */
export type User$sentNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.notifications
 */
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.snapAuthor
 */
export type User$snapAuthorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSnap
     */
    select?: Prisma.SavedSnapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedSnap
     */
    omit?: Prisma.SavedSnapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedSnapInclude<ExtArgs> | null;
    where?: Prisma.SavedSnapWhereInput;
    orderBy?: Prisma.SavedSnapOrderByWithRelationInput | Prisma.SavedSnapOrderByWithRelationInput[];
    cursor?: Prisma.SavedSnapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedSnapScalarFieldEnum | Prisma.SavedSnapScalarFieldEnum[];
};
/**
 * User.savedBySnaps
 */
export type User$savedBySnapsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSnap
     */
    select?: Prisma.SavedSnapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedSnap
     */
    omit?: Prisma.SavedSnapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedSnapInclude<ExtArgs> | null;
    where?: Prisma.SavedSnapWhereInput;
    orderBy?: Prisma.SavedSnapOrderByWithRelationInput | Prisma.SavedSnapOrderByWithRelationInput[];
    cursor?: Prisma.SavedSnapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedSnapScalarFieldEnum | Prisma.SavedSnapScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
//# sourceMappingURL=User.d.ts.map