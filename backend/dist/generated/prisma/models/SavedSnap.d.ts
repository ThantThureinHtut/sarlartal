import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model SavedSnap
 *
 */
export type SavedSnapModel = runtime.Types.Result.DefaultSelection<Prisma.$SavedSnapPayload>;
export type AggregateSavedSnap = {
    _count: SavedSnapCountAggregateOutputType | null;
    _avg: SavedSnapAvgAggregateOutputType | null;
    _sum: SavedSnapSumAggregateOutputType | null;
    _min: SavedSnapMinAggregateOutputType | null;
    _max: SavedSnapMaxAggregateOutputType | null;
};
export type SavedSnapAvgAggregateOutputType = {
    id: number | null;
};
export type SavedSnapSumAggregateOutputType = {
    id: number | null;
};
export type SavedSnapMinAggregateOutputType = {
    id: number | null;
    authorId: string | null;
    postId: string | null;
    savedUserId: string | null;
};
export type SavedSnapMaxAggregateOutputType = {
    id: number | null;
    authorId: string | null;
    postId: string | null;
    savedUserId: string | null;
};
export type SavedSnapCountAggregateOutputType = {
    id: number;
    authorId: number;
    postId: number;
    savedUserId: number;
    _all: number;
};
export type SavedSnapAvgAggregateInputType = {
    id?: true;
};
export type SavedSnapSumAggregateInputType = {
    id?: true;
};
export type SavedSnapMinAggregateInputType = {
    id?: true;
    authorId?: true;
    postId?: true;
    savedUserId?: true;
};
export type SavedSnapMaxAggregateInputType = {
    id?: true;
    authorId?: true;
    postId?: true;
    savedUserId?: true;
};
export type SavedSnapCountAggregateInputType = {
    id?: true;
    authorId?: true;
    postId?: true;
    savedUserId?: true;
    _all?: true;
};
export type SavedSnapAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SavedSnap to aggregate.
     */
    where?: Prisma.SavedSnapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavedSnaps to fetch.
     */
    orderBy?: Prisma.SavedSnapOrderByWithRelationInput | Prisma.SavedSnapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SavedSnapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavedSnaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavedSnaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SavedSnaps
    **/
    _count?: true | SavedSnapCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SavedSnapAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SavedSnapSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SavedSnapMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SavedSnapMaxAggregateInputType;
};
export type GetSavedSnapAggregateType<T extends SavedSnapAggregateArgs> = {
    [P in keyof T & keyof AggregateSavedSnap]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSavedSnap[P]> : Prisma.GetScalarType<T[P], AggregateSavedSnap[P]>;
};
export type SavedSnapGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedSnapWhereInput;
    orderBy?: Prisma.SavedSnapOrderByWithAggregationInput | Prisma.SavedSnapOrderByWithAggregationInput[];
    by: Prisma.SavedSnapScalarFieldEnum[] | Prisma.SavedSnapScalarFieldEnum;
    having?: Prisma.SavedSnapScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SavedSnapCountAggregateInputType | true;
    _avg?: SavedSnapAvgAggregateInputType;
    _sum?: SavedSnapSumAggregateInputType;
    _min?: SavedSnapMinAggregateInputType;
    _max?: SavedSnapMaxAggregateInputType;
};
export type SavedSnapGroupByOutputType = {
    id: number;
    authorId: string;
    postId: string;
    savedUserId: string;
    _count: SavedSnapCountAggregateOutputType | null;
    _avg: SavedSnapAvgAggregateOutputType | null;
    _sum: SavedSnapSumAggregateOutputType | null;
    _min: SavedSnapMinAggregateOutputType | null;
    _max: SavedSnapMaxAggregateOutputType | null;
};
export type GetSavedSnapGroupByPayload<T extends SavedSnapGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SavedSnapGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SavedSnapGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SavedSnapGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SavedSnapGroupByOutputType[P]>;
}>>;
export type SavedSnapWhereInput = {
    AND?: Prisma.SavedSnapWhereInput | Prisma.SavedSnapWhereInput[];
    OR?: Prisma.SavedSnapWhereInput[];
    NOT?: Prisma.SavedSnapWhereInput | Prisma.SavedSnapWhereInput[];
    id?: Prisma.IntFilter<"SavedSnap"> | number;
    authorId?: Prisma.StringFilter<"SavedSnap"> | string;
    postId?: Prisma.StringFilter<"SavedSnap"> | string;
    savedUserId?: Prisma.StringFilter<"SavedSnap"> | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    post?: Prisma.XOR<Prisma.PostNullableScalarRelationFilter, Prisma.PostWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type SavedSnapOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    savedUserId?: Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
    post?: Prisma.PostOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type SavedSnapWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SavedSnapWhereInput | Prisma.SavedSnapWhereInput[];
    OR?: Prisma.SavedSnapWhereInput[];
    NOT?: Prisma.SavedSnapWhereInput | Prisma.SavedSnapWhereInput[];
    authorId?: Prisma.StringFilter<"SavedSnap"> | string;
    postId?: Prisma.StringFilter<"SavedSnap"> | string;
    savedUserId?: Prisma.StringFilter<"SavedSnap"> | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    post?: Prisma.XOR<Prisma.PostNullableScalarRelationFilter, Prisma.PostWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type SavedSnapOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    savedUserId?: Prisma.SortOrder;
    _count?: Prisma.SavedSnapCountOrderByAggregateInput;
    _avg?: Prisma.SavedSnapAvgOrderByAggregateInput;
    _max?: Prisma.SavedSnapMaxOrderByAggregateInput;
    _min?: Prisma.SavedSnapMinOrderByAggregateInput;
    _sum?: Prisma.SavedSnapSumOrderByAggregateInput;
};
export type SavedSnapScalarWhereWithAggregatesInput = {
    AND?: Prisma.SavedSnapScalarWhereWithAggregatesInput | Prisma.SavedSnapScalarWhereWithAggregatesInput[];
    OR?: Prisma.SavedSnapScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SavedSnapScalarWhereWithAggregatesInput | Prisma.SavedSnapScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SavedSnap"> | number;
    authorId?: Prisma.StringWithAggregatesFilter<"SavedSnap"> | string;
    postId?: Prisma.StringWithAggregatesFilter<"SavedSnap"> | string;
    savedUserId?: Prisma.StringWithAggregatesFilter<"SavedSnap"> | string;
};
export type SavedSnapCreateInput = {
    author: Prisma.UserCreateNestedOneWithoutSnapAuthorInput;
    post?: Prisma.PostCreateNestedOneWithoutSaveSnapInput;
    user: Prisma.UserCreateNestedOneWithoutSavedBySnapsInput;
};
export type SavedSnapUncheckedCreateInput = {
    id?: number;
    authorId: string;
    postId: string;
    savedUserId: string;
};
export type SavedSnapUpdateInput = {
    author?: Prisma.UserUpdateOneRequiredWithoutSnapAuthorNestedInput;
    post?: Prisma.PostUpdateOneWithoutSaveSnapNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSavedBySnapsNestedInput;
};
export type SavedSnapUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    savedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SavedSnapCreateManyInput = {
    id?: number;
    authorId: string;
    postId: string;
    savedUserId: string;
};
export type SavedSnapUpdateManyMutationInput = {};
export type SavedSnapUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    savedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SavedSnapListRelationFilter = {
    every?: Prisma.SavedSnapWhereInput;
    some?: Prisma.SavedSnapWhereInput;
    none?: Prisma.SavedSnapWhereInput;
};
export type SavedSnapOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SavedSnapCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    savedUserId?: Prisma.SortOrder;
};
export type SavedSnapAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SavedSnapMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    savedUserId?: Prisma.SortOrder;
};
export type SavedSnapMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    savedUserId?: Prisma.SortOrder;
};
export type SavedSnapSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SavedSnapCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutAuthorInput, Prisma.SavedSnapUncheckedCreateWithoutAuthorInput> | Prisma.SavedSnapCreateWithoutAuthorInput[] | Prisma.SavedSnapUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutAuthorInput | Prisma.SavedSnapCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.SavedSnapCreateManyAuthorInputEnvelope;
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
};
export type SavedSnapCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutUserInput, Prisma.SavedSnapUncheckedCreateWithoutUserInput> | Prisma.SavedSnapCreateWithoutUserInput[] | Prisma.SavedSnapUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutUserInput | Prisma.SavedSnapCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SavedSnapCreateManyUserInputEnvelope;
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
};
export type SavedSnapUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutAuthorInput, Prisma.SavedSnapUncheckedCreateWithoutAuthorInput> | Prisma.SavedSnapCreateWithoutAuthorInput[] | Prisma.SavedSnapUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutAuthorInput | Prisma.SavedSnapCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.SavedSnapCreateManyAuthorInputEnvelope;
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
};
export type SavedSnapUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutUserInput, Prisma.SavedSnapUncheckedCreateWithoutUserInput> | Prisma.SavedSnapCreateWithoutUserInput[] | Prisma.SavedSnapUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutUserInput | Prisma.SavedSnapCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SavedSnapCreateManyUserInputEnvelope;
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
};
export type SavedSnapUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutAuthorInput, Prisma.SavedSnapUncheckedCreateWithoutAuthorInput> | Prisma.SavedSnapCreateWithoutAuthorInput[] | Prisma.SavedSnapUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutAuthorInput | Prisma.SavedSnapCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.SavedSnapUpsertWithWhereUniqueWithoutAuthorInput | Prisma.SavedSnapUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.SavedSnapCreateManyAuthorInputEnvelope;
    set?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    disconnect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    delete?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    update?: Prisma.SavedSnapUpdateWithWhereUniqueWithoutAuthorInput | Prisma.SavedSnapUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.SavedSnapUpdateManyWithWhereWithoutAuthorInput | Prisma.SavedSnapUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.SavedSnapScalarWhereInput | Prisma.SavedSnapScalarWhereInput[];
};
export type SavedSnapUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutUserInput, Prisma.SavedSnapUncheckedCreateWithoutUserInput> | Prisma.SavedSnapCreateWithoutUserInput[] | Prisma.SavedSnapUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutUserInput | Prisma.SavedSnapCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SavedSnapUpsertWithWhereUniqueWithoutUserInput | Prisma.SavedSnapUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SavedSnapCreateManyUserInputEnvelope;
    set?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    disconnect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    delete?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    update?: Prisma.SavedSnapUpdateWithWhereUniqueWithoutUserInput | Prisma.SavedSnapUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SavedSnapUpdateManyWithWhereWithoutUserInput | Prisma.SavedSnapUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SavedSnapScalarWhereInput | Prisma.SavedSnapScalarWhereInput[];
};
export type SavedSnapUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutAuthorInput, Prisma.SavedSnapUncheckedCreateWithoutAuthorInput> | Prisma.SavedSnapCreateWithoutAuthorInput[] | Prisma.SavedSnapUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutAuthorInput | Prisma.SavedSnapCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.SavedSnapUpsertWithWhereUniqueWithoutAuthorInput | Prisma.SavedSnapUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.SavedSnapCreateManyAuthorInputEnvelope;
    set?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    disconnect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    delete?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    update?: Prisma.SavedSnapUpdateWithWhereUniqueWithoutAuthorInput | Prisma.SavedSnapUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.SavedSnapUpdateManyWithWhereWithoutAuthorInput | Prisma.SavedSnapUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.SavedSnapScalarWhereInput | Prisma.SavedSnapScalarWhereInput[];
};
export type SavedSnapUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutUserInput, Prisma.SavedSnapUncheckedCreateWithoutUserInput> | Prisma.SavedSnapCreateWithoutUserInput[] | Prisma.SavedSnapUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutUserInput | Prisma.SavedSnapCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SavedSnapUpsertWithWhereUniqueWithoutUserInput | Prisma.SavedSnapUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SavedSnapCreateManyUserInputEnvelope;
    set?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    disconnect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    delete?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    update?: Prisma.SavedSnapUpdateWithWhereUniqueWithoutUserInput | Prisma.SavedSnapUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SavedSnapUpdateManyWithWhereWithoutUserInput | Prisma.SavedSnapUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SavedSnapScalarWhereInput | Prisma.SavedSnapScalarWhereInput[];
};
export type SavedSnapCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutPostInput, Prisma.SavedSnapUncheckedCreateWithoutPostInput> | Prisma.SavedSnapCreateWithoutPostInput[] | Prisma.SavedSnapUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutPostInput | Prisma.SavedSnapCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.SavedSnapCreateManyPostInputEnvelope;
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
};
export type SavedSnapUncheckedCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutPostInput, Prisma.SavedSnapUncheckedCreateWithoutPostInput> | Prisma.SavedSnapCreateWithoutPostInput[] | Prisma.SavedSnapUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutPostInput | Prisma.SavedSnapCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.SavedSnapCreateManyPostInputEnvelope;
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
};
export type SavedSnapUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutPostInput, Prisma.SavedSnapUncheckedCreateWithoutPostInput> | Prisma.SavedSnapCreateWithoutPostInput[] | Prisma.SavedSnapUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutPostInput | Prisma.SavedSnapCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.SavedSnapUpsertWithWhereUniqueWithoutPostInput | Prisma.SavedSnapUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.SavedSnapCreateManyPostInputEnvelope;
    set?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    disconnect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    delete?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    update?: Prisma.SavedSnapUpdateWithWhereUniqueWithoutPostInput | Prisma.SavedSnapUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.SavedSnapUpdateManyWithWhereWithoutPostInput | Prisma.SavedSnapUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.SavedSnapScalarWhereInput | Prisma.SavedSnapScalarWhereInput[];
};
export type SavedSnapUncheckedUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.SavedSnapCreateWithoutPostInput, Prisma.SavedSnapUncheckedCreateWithoutPostInput> | Prisma.SavedSnapCreateWithoutPostInput[] | Prisma.SavedSnapUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.SavedSnapCreateOrConnectWithoutPostInput | Prisma.SavedSnapCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.SavedSnapUpsertWithWhereUniqueWithoutPostInput | Prisma.SavedSnapUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.SavedSnapCreateManyPostInputEnvelope;
    set?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    disconnect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    delete?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    connect?: Prisma.SavedSnapWhereUniqueInput | Prisma.SavedSnapWhereUniqueInput[];
    update?: Prisma.SavedSnapUpdateWithWhereUniqueWithoutPostInput | Prisma.SavedSnapUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.SavedSnapUpdateManyWithWhereWithoutPostInput | Prisma.SavedSnapUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.SavedSnapScalarWhereInput | Prisma.SavedSnapScalarWhereInput[];
};
export type SavedSnapCreateWithoutAuthorInput = {
    post?: Prisma.PostCreateNestedOneWithoutSaveSnapInput;
    user: Prisma.UserCreateNestedOneWithoutSavedBySnapsInput;
};
export type SavedSnapUncheckedCreateWithoutAuthorInput = {
    id?: number;
    postId: string;
    savedUserId: string;
};
export type SavedSnapCreateOrConnectWithoutAuthorInput = {
    where: Prisma.SavedSnapWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedSnapCreateWithoutAuthorInput, Prisma.SavedSnapUncheckedCreateWithoutAuthorInput>;
};
export type SavedSnapCreateManyAuthorInputEnvelope = {
    data: Prisma.SavedSnapCreateManyAuthorInput | Prisma.SavedSnapCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type SavedSnapCreateWithoutUserInput = {
    author: Prisma.UserCreateNestedOneWithoutSnapAuthorInput;
    post?: Prisma.PostCreateNestedOneWithoutSaveSnapInput;
};
export type SavedSnapUncheckedCreateWithoutUserInput = {
    id?: number;
    authorId: string;
    postId: string;
};
export type SavedSnapCreateOrConnectWithoutUserInput = {
    where: Prisma.SavedSnapWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedSnapCreateWithoutUserInput, Prisma.SavedSnapUncheckedCreateWithoutUserInput>;
};
export type SavedSnapCreateManyUserInputEnvelope = {
    data: Prisma.SavedSnapCreateManyUserInput | Prisma.SavedSnapCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SavedSnapUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.SavedSnapWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavedSnapUpdateWithoutAuthorInput, Prisma.SavedSnapUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.SavedSnapCreateWithoutAuthorInput, Prisma.SavedSnapUncheckedCreateWithoutAuthorInput>;
};
export type SavedSnapUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.SavedSnapWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavedSnapUpdateWithoutAuthorInput, Prisma.SavedSnapUncheckedUpdateWithoutAuthorInput>;
};
export type SavedSnapUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.SavedSnapScalarWhereInput;
    data: Prisma.XOR<Prisma.SavedSnapUpdateManyMutationInput, Prisma.SavedSnapUncheckedUpdateManyWithoutAuthorInput>;
};
export type SavedSnapScalarWhereInput = {
    AND?: Prisma.SavedSnapScalarWhereInput | Prisma.SavedSnapScalarWhereInput[];
    OR?: Prisma.SavedSnapScalarWhereInput[];
    NOT?: Prisma.SavedSnapScalarWhereInput | Prisma.SavedSnapScalarWhereInput[];
    id?: Prisma.IntFilter<"SavedSnap"> | number;
    authorId?: Prisma.StringFilter<"SavedSnap"> | string;
    postId?: Prisma.StringFilter<"SavedSnap"> | string;
    savedUserId?: Prisma.StringFilter<"SavedSnap"> | string;
};
export type SavedSnapUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SavedSnapWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavedSnapUpdateWithoutUserInput, Prisma.SavedSnapUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SavedSnapCreateWithoutUserInput, Prisma.SavedSnapUncheckedCreateWithoutUserInput>;
};
export type SavedSnapUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SavedSnapWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavedSnapUpdateWithoutUserInput, Prisma.SavedSnapUncheckedUpdateWithoutUserInput>;
};
export type SavedSnapUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SavedSnapScalarWhereInput;
    data: Prisma.XOR<Prisma.SavedSnapUpdateManyMutationInput, Prisma.SavedSnapUncheckedUpdateManyWithoutUserInput>;
};
export type SavedSnapCreateWithoutPostInput = {
    author: Prisma.UserCreateNestedOneWithoutSnapAuthorInput;
    user: Prisma.UserCreateNestedOneWithoutSavedBySnapsInput;
};
export type SavedSnapUncheckedCreateWithoutPostInput = {
    id?: number;
    authorId: string;
    savedUserId: string;
};
export type SavedSnapCreateOrConnectWithoutPostInput = {
    where: Prisma.SavedSnapWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedSnapCreateWithoutPostInput, Prisma.SavedSnapUncheckedCreateWithoutPostInput>;
};
export type SavedSnapCreateManyPostInputEnvelope = {
    data: Prisma.SavedSnapCreateManyPostInput | Prisma.SavedSnapCreateManyPostInput[];
    skipDuplicates?: boolean;
};
export type SavedSnapUpsertWithWhereUniqueWithoutPostInput = {
    where: Prisma.SavedSnapWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavedSnapUpdateWithoutPostInput, Prisma.SavedSnapUncheckedUpdateWithoutPostInput>;
    create: Prisma.XOR<Prisma.SavedSnapCreateWithoutPostInput, Prisma.SavedSnapUncheckedCreateWithoutPostInput>;
};
export type SavedSnapUpdateWithWhereUniqueWithoutPostInput = {
    where: Prisma.SavedSnapWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavedSnapUpdateWithoutPostInput, Prisma.SavedSnapUncheckedUpdateWithoutPostInput>;
};
export type SavedSnapUpdateManyWithWhereWithoutPostInput = {
    where: Prisma.SavedSnapScalarWhereInput;
    data: Prisma.XOR<Prisma.SavedSnapUpdateManyMutationInput, Prisma.SavedSnapUncheckedUpdateManyWithoutPostInput>;
};
export type SavedSnapCreateManyAuthorInput = {
    id?: number;
    postId: string;
    savedUserId: string;
};
export type SavedSnapCreateManyUserInput = {
    id?: number;
    authorId: string;
    postId: string;
};
export type SavedSnapUpdateWithoutAuthorInput = {
    post?: Prisma.PostUpdateOneWithoutSaveSnapNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSavedBySnapsNestedInput;
};
export type SavedSnapUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    savedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SavedSnapUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    savedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SavedSnapUpdateWithoutUserInput = {
    author?: Prisma.UserUpdateOneRequiredWithoutSnapAuthorNestedInput;
    post?: Prisma.PostUpdateOneWithoutSaveSnapNestedInput;
};
export type SavedSnapUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SavedSnapUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SavedSnapCreateManyPostInput = {
    id?: number;
    authorId: string;
    savedUserId: string;
};
export type SavedSnapUpdateWithoutPostInput = {
    author?: Prisma.UserUpdateOneRequiredWithoutSnapAuthorNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSavedBySnapsNestedInput;
};
export type SavedSnapUncheckedUpdateWithoutPostInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    savedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SavedSnapUncheckedUpdateManyWithoutPostInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    savedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SavedSnapSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    authorId?: boolean;
    postId?: boolean;
    savedUserId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.SavedSnap$postArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedSnap"]>;
export type SavedSnapSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    authorId?: boolean;
    postId?: boolean;
    savedUserId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.SavedSnap$postArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedSnap"]>;
export type SavedSnapSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    authorId?: boolean;
    postId?: boolean;
    savedUserId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.SavedSnap$postArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedSnap"]>;
export type SavedSnapSelectScalar = {
    id?: boolean;
    authorId?: boolean;
    postId?: boolean;
    savedUserId?: boolean;
};
export type SavedSnapOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "authorId" | "postId" | "savedUserId", ExtArgs["result"]["savedSnap"]>;
export type SavedSnapInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.SavedSnap$postArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SavedSnapIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.SavedSnap$postArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SavedSnapIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    post?: boolean | Prisma.SavedSnap$postArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SavedSnapPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SavedSnap";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
        post: Prisma.$PostPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        authorId: string;
        postId: string;
        savedUserId: string;
    }, ExtArgs["result"]["savedSnap"]>;
    composites: {};
};
export type SavedSnapGetPayload<S extends boolean | null | undefined | SavedSnapDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload, S>;
export type SavedSnapCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SavedSnapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SavedSnapCountAggregateInputType | true;
};
export interface SavedSnapDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SavedSnap'];
        meta: {
            name: 'SavedSnap';
        };
    };
    /**
     * Find zero or one SavedSnap that matches the filter.
     * @param {SavedSnapFindUniqueArgs} args - Arguments to find a SavedSnap
     * @example
     * // Get one SavedSnap
     * const savedSnap = await prisma.savedSnap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedSnapFindUniqueArgs>(args: Prisma.SelectSubset<T, SavedSnapFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SavedSnapClient<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SavedSnap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedSnapFindUniqueOrThrowArgs} args - Arguments to find a SavedSnap
     * @example
     * // Get one SavedSnap
     * const savedSnap = await prisma.savedSnap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedSnapFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SavedSnapFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavedSnapClient<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SavedSnap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSnapFindFirstArgs} args - Arguments to find a SavedSnap
     * @example
     * // Get one SavedSnap
     * const savedSnap = await prisma.savedSnap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedSnapFindFirstArgs>(args?: Prisma.SelectSubset<T, SavedSnapFindFirstArgs<ExtArgs>>): Prisma.Prisma__SavedSnapClient<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SavedSnap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSnapFindFirstOrThrowArgs} args - Arguments to find a SavedSnap
     * @example
     * // Get one SavedSnap
     * const savedSnap = await prisma.savedSnap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedSnapFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SavedSnapFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavedSnapClient<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SavedSnaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSnapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedSnaps
     * const savedSnaps = await prisma.savedSnap.findMany()
     *
     * // Get first 10 SavedSnaps
     * const savedSnaps = await prisma.savedSnap.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const savedSnapWithIdOnly = await prisma.savedSnap.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SavedSnapFindManyArgs>(args?: Prisma.SelectSubset<T, SavedSnapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SavedSnap.
     * @param {SavedSnapCreateArgs} args - Arguments to create a SavedSnap.
     * @example
     * // Create one SavedSnap
     * const SavedSnap = await prisma.savedSnap.create({
     *   data: {
     *     // ... data to create a SavedSnap
     *   }
     * })
     *
     */
    create<T extends SavedSnapCreateArgs>(args: Prisma.SelectSubset<T, SavedSnapCreateArgs<ExtArgs>>): Prisma.Prisma__SavedSnapClient<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SavedSnaps.
     * @param {SavedSnapCreateManyArgs} args - Arguments to create many SavedSnaps.
     * @example
     * // Create many SavedSnaps
     * const savedSnap = await prisma.savedSnap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SavedSnapCreateManyArgs>(args?: Prisma.SelectSubset<T, SavedSnapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SavedSnaps and returns the data saved in the database.
     * @param {SavedSnapCreateManyAndReturnArgs} args - Arguments to create many SavedSnaps.
     * @example
     * // Create many SavedSnaps
     * const savedSnap = await prisma.savedSnap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SavedSnaps and only return the `id`
     * const savedSnapWithIdOnly = await prisma.savedSnap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SavedSnapCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SavedSnapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SavedSnap.
     * @param {SavedSnapDeleteArgs} args - Arguments to delete one SavedSnap.
     * @example
     * // Delete one SavedSnap
     * const SavedSnap = await prisma.savedSnap.delete({
     *   where: {
     *     // ... filter to delete one SavedSnap
     *   }
     * })
     *
     */
    delete<T extends SavedSnapDeleteArgs>(args: Prisma.SelectSubset<T, SavedSnapDeleteArgs<ExtArgs>>): Prisma.Prisma__SavedSnapClient<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SavedSnap.
     * @param {SavedSnapUpdateArgs} args - Arguments to update one SavedSnap.
     * @example
     * // Update one SavedSnap
     * const savedSnap = await prisma.savedSnap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SavedSnapUpdateArgs>(args: Prisma.SelectSubset<T, SavedSnapUpdateArgs<ExtArgs>>): Prisma.Prisma__SavedSnapClient<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SavedSnaps.
     * @param {SavedSnapDeleteManyArgs} args - Arguments to filter SavedSnaps to delete.
     * @example
     * // Delete a few SavedSnaps
     * const { count } = await prisma.savedSnap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SavedSnapDeleteManyArgs>(args?: Prisma.SelectSubset<T, SavedSnapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SavedSnaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSnapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedSnaps
     * const savedSnap = await prisma.savedSnap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SavedSnapUpdateManyArgs>(args: Prisma.SelectSubset<T, SavedSnapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SavedSnaps and returns the data updated in the database.
     * @param {SavedSnapUpdateManyAndReturnArgs} args - Arguments to update many SavedSnaps.
     * @example
     * // Update many SavedSnaps
     * const savedSnap = await prisma.savedSnap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SavedSnaps and only return the `id`
     * const savedSnapWithIdOnly = await prisma.savedSnap.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedSnapUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SavedSnapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SavedSnap.
     * @param {SavedSnapUpsertArgs} args - Arguments to update or create a SavedSnap.
     * @example
     * // Update or create a SavedSnap
     * const savedSnap = await prisma.savedSnap.upsert({
     *   create: {
     *     // ... data to create a SavedSnap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedSnap we want to update
     *   }
     * })
     */
    upsert<T extends SavedSnapUpsertArgs>(args: Prisma.SelectSubset<T, SavedSnapUpsertArgs<ExtArgs>>): Prisma.Prisma__SavedSnapClient<runtime.Types.Result.GetResult<Prisma.$SavedSnapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SavedSnaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSnapCountArgs} args - Arguments to filter SavedSnaps to count.
     * @example
     * // Count the number of SavedSnaps
     * const count = await prisma.savedSnap.count({
     *   where: {
     *     // ... the filter for the SavedSnaps we want to count
     *   }
     * })
    **/
    count<T extends SavedSnapCountArgs>(args?: Prisma.Subset<T, SavedSnapCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SavedSnapCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SavedSnap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSnapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedSnapAggregateArgs>(args: Prisma.Subset<T, SavedSnapAggregateArgs>): Prisma.PrismaPromise<GetSavedSnapAggregateType<T>>;
    /**
     * Group by SavedSnap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSnapGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SavedSnapGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SavedSnapGroupByArgs['orderBy'];
    } : {
        orderBy?: SavedSnapGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SavedSnapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedSnapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SavedSnap model
     */
    readonly fields: SavedSnapFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SavedSnap.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SavedSnapClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    post<T extends Prisma.SavedSnap$postArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SavedSnap$postArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SavedSnap model
 */
export interface SavedSnapFieldRefs {
    readonly id: Prisma.FieldRef<"SavedSnap", 'Int'>;
    readonly authorId: Prisma.FieldRef<"SavedSnap", 'String'>;
    readonly postId: Prisma.FieldRef<"SavedSnap", 'String'>;
    readonly savedUserId: Prisma.FieldRef<"SavedSnap", 'String'>;
}
/**
 * SavedSnap findUnique
 */
export type SavedSnapFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SavedSnap to fetch.
     */
    where: Prisma.SavedSnapWhereUniqueInput;
};
/**
 * SavedSnap findUniqueOrThrow
 */
export type SavedSnapFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SavedSnap to fetch.
     */
    where: Prisma.SavedSnapWhereUniqueInput;
};
/**
 * SavedSnap findFirst
 */
export type SavedSnapFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SavedSnap to fetch.
     */
    where?: Prisma.SavedSnapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavedSnaps to fetch.
     */
    orderBy?: Prisma.SavedSnapOrderByWithRelationInput | Prisma.SavedSnapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SavedSnaps.
     */
    cursor?: Prisma.SavedSnapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavedSnaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavedSnaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SavedSnaps.
     */
    distinct?: Prisma.SavedSnapScalarFieldEnum | Prisma.SavedSnapScalarFieldEnum[];
};
/**
 * SavedSnap findFirstOrThrow
 */
export type SavedSnapFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SavedSnap to fetch.
     */
    where?: Prisma.SavedSnapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavedSnaps to fetch.
     */
    orderBy?: Prisma.SavedSnapOrderByWithRelationInput | Prisma.SavedSnapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SavedSnaps.
     */
    cursor?: Prisma.SavedSnapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavedSnaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavedSnaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SavedSnaps.
     */
    distinct?: Prisma.SavedSnapScalarFieldEnum | Prisma.SavedSnapScalarFieldEnum[];
};
/**
 * SavedSnap findMany
 */
export type SavedSnapFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SavedSnaps to fetch.
     */
    where?: Prisma.SavedSnapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavedSnaps to fetch.
     */
    orderBy?: Prisma.SavedSnapOrderByWithRelationInput | Prisma.SavedSnapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SavedSnaps.
     */
    cursor?: Prisma.SavedSnapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavedSnaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavedSnaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SavedSnaps.
     */
    distinct?: Prisma.SavedSnapScalarFieldEnum | Prisma.SavedSnapScalarFieldEnum[];
};
/**
 * SavedSnap create
 */
export type SavedSnapCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a SavedSnap.
     */
    data: Prisma.XOR<Prisma.SavedSnapCreateInput, Prisma.SavedSnapUncheckedCreateInput>;
};
/**
 * SavedSnap createMany
 */
export type SavedSnapCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedSnaps.
     */
    data: Prisma.SavedSnapCreateManyInput | Prisma.SavedSnapCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SavedSnap createManyAndReturn
 */
export type SavedSnapCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSnap
     */
    select?: Prisma.SavedSnapSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedSnap
     */
    omit?: Prisma.SavedSnapOmit<ExtArgs> | null;
    /**
     * The data used to create many SavedSnaps.
     */
    data: Prisma.SavedSnapCreateManyInput | Prisma.SavedSnapCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedSnapIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SavedSnap update
 */
export type SavedSnapUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a SavedSnap.
     */
    data: Prisma.XOR<Prisma.SavedSnapUpdateInput, Prisma.SavedSnapUncheckedUpdateInput>;
    /**
     * Choose, which SavedSnap to update.
     */
    where: Prisma.SavedSnapWhereUniqueInput;
};
/**
 * SavedSnap updateMany
 */
export type SavedSnapUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedSnaps.
     */
    data: Prisma.XOR<Prisma.SavedSnapUpdateManyMutationInput, Prisma.SavedSnapUncheckedUpdateManyInput>;
    /**
     * Filter which SavedSnaps to update
     */
    where?: Prisma.SavedSnapWhereInput;
    /**
     * Limit how many SavedSnaps to update.
     */
    limit?: number;
};
/**
 * SavedSnap updateManyAndReturn
 */
export type SavedSnapUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSnap
     */
    select?: Prisma.SavedSnapSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedSnap
     */
    omit?: Prisma.SavedSnapOmit<ExtArgs> | null;
    /**
     * The data used to update SavedSnaps.
     */
    data: Prisma.XOR<Prisma.SavedSnapUpdateManyMutationInput, Prisma.SavedSnapUncheckedUpdateManyInput>;
    /**
     * Filter which SavedSnaps to update
     */
    where?: Prisma.SavedSnapWhereInput;
    /**
     * Limit how many SavedSnaps to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedSnapIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SavedSnap upsert
 */
export type SavedSnapUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the SavedSnap to update in case it exists.
     */
    where: Prisma.SavedSnapWhereUniqueInput;
    /**
     * In case the SavedSnap found by the `where` argument doesn't exist, create a new SavedSnap with this data.
     */
    create: Prisma.XOR<Prisma.SavedSnapCreateInput, Prisma.SavedSnapUncheckedCreateInput>;
    /**
     * In case the SavedSnap was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SavedSnapUpdateInput, Prisma.SavedSnapUncheckedUpdateInput>;
};
/**
 * SavedSnap delete
 */
export type SavedSnapDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which SavedSnap to delete.
     */
    where: Prisma.SavedSnapWhereUniqueInput;
};
/**
 * SavedSnap deleteMany
 */
export type SavedSnapDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SavedSnaps to delete
     */
    where?: Prisma.SavedSnapWhereInput;
    /**
     * Limit how many SavedSnaps to delete.
     */
    limit?: number;
};
/**
 * SavedSnap.post
 */
export type SavedSnap$postArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * SavedSnap without action
 */
export type SavedSnapDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=SavedSnap.d.ts.map