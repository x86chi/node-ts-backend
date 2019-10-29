// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from 'graphql'
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model,
} from 'prisma-client-lib'
import { typeDefs } from './prisma-schema'

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U]

export type Maybe<T> = T | undefined | null

export interface Exists {
  semester: (where?: SemesterWhereInput) => Promise<boolean>
  user: (where?: UserWhereInput) => Promise<boolean>
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>
}

export interface Prisma {
  $exists: Exists
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>

  /**
   * Queries
   */

  semester: (where: SemesterWhereUniqueInput) => SemesterNullablePromise
  semesters: (args?: {
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => FragmentableArray<Semester>
  semestersConnection: (args?: {
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => SemesterConnectionPromise
  user: (where: UserWhereUniqueInput) => UserNullablePromise
  users: (args?: {
    where?: UserWhereInput
    orderBy?: UserOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => FragmentableArray<User>
  usersConnection: (args?: {
    where?: UserWhereInput
    orderBy?: UserOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => UserConnectionPromise
  node: (args: { id: ID_Output }) => Node

  /**
   * Mutations
   */

  createSemester: (data: SemesterCreateInput) => SemesterPromise
  updateSemester: (args: {
    data: SemesterUpdateInput
    where: SemesterWhereUniqueInput
  }) => SemesterPromise
  updateManySemesters: (args: {
    data: SemesterUpdateManyMutationInput
    where?: SemesterWhereInput
  }) => BatchPayloadPromise
  upsertSemester: (args: {
    where: SemesterWhereUniqueInput
    create: SemesterCreateInput
    update: SemesterUpdateInput
  }) => SemesterPromise
  deleteSemester: (where: SemesterWhereUniqueInput) => SemesterPromise
  deleteManySemesters: (where?: SemesterWhereInput) => BatchPayloadPromise
  createUser: (data: UserCreateInput) => UserPromise
  updateUser: (args: {
    data: UserUpdateInput
    where: UserWhereUniqueInput
  }) => UserPromise
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput
    where?: UserWhereInput
  }) => BatchPayloadPromise
  upsertUser: (args: {
    where: UserWhereUniqueInput
    create: UserCreateInput
    update: UserUpdateInput
  }) => UserPromise
  deleteUser: (where: UserWhereUniqueInput) => UserPromise
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise

  /**
   * Subscriptions
   */

  $subscribe: Subscription
}

export interface Subscription {
  semester: (
    where?: SemesterSubscriptionWhereInput
  ) => SemesterSubscriptionPayloadSubscription
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T
}

/**
 * Types
 */

export type SemesterType = 'FIRST' | 'SUMMER' | 'SECOND' | 'WINTER'

export type SemesterOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'averagePoint_ASC'
  | 'averagePoint_DESC'
  | 'totalCredit_ASC'
  | 'totalCredit_DESC'
  | 'isOutside_ASC'
  | 'isOutside_DESC'
  | 'year_ASC'
  | 'year_DESC'
  | 'semester_ASC'
  | 'semester_DESC'

export type UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'mailid_ASC'
  | 'mailid_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'averagePoint_ASC'
  | 'averagePoint_DESC'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export type SemesterWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>
}>

export interface SemesterWhereInput {
  id?: Maybe<ID_Input>
  id_not?: Maybe<ID_Input>
  id_in?: Maybe<ID_Input[] | ID_Input>
  id_not_in?: Maybe<ID_Input[] | ID_Input>
  id_lt?: Maybe<ID_Input>
  id_lte?: Maybe<ID_Input>
  id_gt?: Maybe<ID_Input>
  id_gte?: Maybe<ID_Input>
  id_contains?: Maybe<ID_Input>
  id_not_contains?: Maybe<ID_Input>
  id_starts_with?: Maybe<ID_Input>
  id_not_starts_with?: Maybe<ID_Input>
  id_ends_with?: Maybe<ID_Input>
  id_not_ends_with?: Maybe<ID_Input>
  averagePoint?: Maybe<Float>
  averagePoint_not?: Maybe<Float>
  averagePoint_in?: Maybe<Float[] | Float>
  averagePoint_not_in?: Maybe<Float[] | Float>
  averagePoint_lt?: Maybe<Float>
  averagePoint_lte?: Maybe<Float>
  averagePoint_gt?: Maybe<Float>
  averagePoint_gte?: Maybe<Float>
  totalCredit?: Maybe<Int>
  totalCredit_not?: Maybe<Int>
  totalCredit_in?: Maybe<Int[] | Int>
  totalCredit_not_in?: Maybe<Int[] | Int>
  totalCredit_lt?: Maybe<Int>
  totalCredit_lte?: Maybe<Int>
  totalCredit_gt?: Maybe<Int>
  totalCredit_gte?: Maybe<Int>
  isOutside?: Maybe<Boolean>
  isOutside_not?: Maybe<Boolean>
  year?: Maybe<Int>
  year_not?: Maybe<Int>
  year_in?: Maybe<Int[] | Int>
  year_not_in?: Maybe<Int[] | Int>
  year_lt?: Maybe<Int>
  year_lte?: Maybe<Int>
  year_gt?: Maybe<Int>
  year_gte?: Maybe<Int>
  semester?: Maybe<SemesterType>
  semester_not?: Maybe<SemesterType>
  semester_in?: Maybe<SemesterType[] | SemesterType>
  semester_not_in?: Maybe<SemesterType[] | SemesterType>
  AND?: Maybe<SemesterWhereInput[] | SemesterWhereInput>
  OR?: Maybe<SemesterWhereInput[] | SemesterWhereInput>
  NOT?: Maybe<SemesterWhereInput[] | SemesterWhereInput>
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>
  mailid?: Maybe<String>
}>

export interface UserWhereInput {
  id?: Maybe<ID_Input>
  id_not?: Maybe<ID_Input>
  id_in?: Maybe<ID_Input[] | ID_Input>
  id_not_in?: Maybe<ID_Input[] | ID_Input>
  id_lt?: Maybe<ID_Input>
  id_lte?: Maybe<ID_Input>
  id_gt?: Maybe<ID_Input>
  id_gte?: Maybe<ID_Input>
  id_contains?: Maybe<ID_Input>
  id_not_contains?: Maybe<ID_Input>
  id_starts_with?: Maybe<ID_Input>
  id_not_starts_with?: Maybe<ID_Input>
  id_ends_with?: Maybe<ID_Input>
  id_not_ends_with?: Maybe<ID_Input>
  mailid?: Maybe<String>
  mailid_not?: Maybe<String>
  mailid_in?: Maybe<String[] | String>
  mailid_not_in?: Maybe<String[] | String>
  mailid_lt?: Maybe<String>
  mailid_lte?: Maybe<String>
  mailid_gt?: Maybe<String>
  mailid_gte?: Maybe<String>
  mailid_contains?: Maybe<String>
  mailid_not_contains?: Maybe<String>
  mailid_starts_with?: Maybe<String>
  mailid_not_starts_with?: Maybe<String>
  mailid_ends_with?: Maybe<String>
  mailid_not_ends_with?: Maybe<String>
  name?: Maybe<String>
  name_not?: Maybe<String>
  name_in?: Maybe<String[] | String>
  name_not_in?: Maybe<String[] | String>
  name_lt?: Maybe<String>
  name_lte?: Maybe<String>
  name_gt?: Maybe<String>
  name_gte?: Maybe<String>
  name_contains?: Maybe<String>
  name_not_contains?: Maybe<String>
  name_starts_with?: Maybe<String>
  name_not_starts_with?: Maybe<String>
  name_ends_with?: Maybe<String>
  name_not_ends_with?: Maybe<String>
  createdAt?: Maybe<DateTimeInput>
  createdAt_not?: Maybe<DateTimeInput>
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>
  createdAt_lt?: Maybe<DateTimeInput>
  createdAt_lte?: Maybe<DateTimeInput>
  createdAt_gt?: Maybe<DateTimeInput>
  createdAt_gte?: Maybe<DateTimeInput>
  averagePoint?: Maybe<Float>
  averagePoint_not?: Maybe<Float>
  averagePoint_in?: Maybe<Float[] | Float>
  averagePoint_not_in?: Maybe<Float[] | Float>
  averagePoint_lt?: Maybe<Float>
  averagePoint_lte?: Maybe<Float>
  averagePoint_gt?: Maybe<Float>
  averagePoint_gte?: Maybe<Float>
  semesters_every?: Maybe<SemesterWhereInput>
  semesters_some?: Maybe<SemesterWhereInput>
  semesters_none?: Maybe<SemesterWhereInput>
  AND?: Maybe<UserWhereInput[] | UserWhereInput>
  OR?: Maybe<UserWhereInput[] | UserWhereInput>
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>
}

export interface SemesterCreateInput {
  id?: Maybe<ID_Input>
  averagePoint: Float
  totalCredit: Int
  isOutside?: Maybe<Boolean>
  year: Int
  semester: SemesterType
}

export interface SemesterUpdateInput {
  averagePoint?: Maybe<Float>
  totalCredit?: Maybe<Int>
  isOutside?: Maybe<Boolean>
  year?: Maybe<Int>
  semester?: Maybe<SemesterType>
}

export interface SemesterUpdateManyMutationInput {
  averagePoint?: Maybe<Float>
  totalCredit?: Maybe<Int>
  isOutside?: Maybe<Boolean>
  year?: Maybe<Int>
  semester?: Maybe<SemesterType>
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>
  mailid: String
  name: String
  averagePoint?: Maybe<Float>
  semesters?: Maybe<SemesterCreateManyInput>
}

export interface SemesterCreateManyInput {
  create?: Maybe<SemesterCreateInput[] | SemesterCreateInput>
  connect?: Maybe<SemesterWhereUniqueInput[] | SemesterWhereUniqueInput>
}

export interface UserUpdateInput {
  mailid?: Maybe<String>
  name?: Maybe<String>
  averagePoint?: Maybe<Float>
  semesters?: Maybe<SemesterUpdateManyInput>
}

export interface SemesterUpdateManyInput {
  create?: Maybe<SemesterCreateInput[] | SemesterCreateInput>
  update?: Maybe<
    | SemesterUpdateWithWhereUniqueNestedInput[]
    | SemesterUpdateWithWhereUniqueNestedInput
  >
  upsert?: Maybe<
    | SemesterUpsertWithWhereUniqueNestedInput[]
    | SemesterUpsertWithWhereUniqueNestedInput
  >
  delete?: Maybe<SemesterWhereUniqueInput[] | SemesterWhereUniqueInput>
  connect?: Maybe<SemesterWhereUniqueInput[] | SemesterWhereUniqueInput>
  set?: Maybe<SemesterWhereUniqueInput[] | SemesterWhereUniqueInput>
  disconnect?: Maybe<SemesterWhereUniqueInput[] | SemesterWhereUniqueInput>
  deleteMany?: Maybe<SemesterScalarWhereInput[] | SemesterScalarWhereInput>
  updateMany?: Maybe<
    | SemesterUpdateManyWithWhereNestedInput[]
    | SemesterUpdateManyWithWhereNestedInput
  >
}

export interface SemesterUpdateWithWhereUniqueNestedInput {
  where: SemesterWhereUniqueInput
  data: SemesterUpdateDataInput
}

export interface SemesterUpdateDataInput {
  averagePoint?: Maybe<Float>
  totalCredit?: Maybe<Int>
  isOutside?: Maybe<Boolean>
  year?: Maybe<Int>
  semester?: Maybe<SemesterType>
}

export interface SemesterUpsertWithWhereUniqueNestedInput {
  where: SemesterWhereUniqueInput
  update: SemesterUpdateDataInput
  create: SemesterCreateInput
}

export interface SemesterScalarWhereInput {
  id?: Maybe<ID_Input>
  id_not?: Maybe<ID_Input>
  id_in?: Maybe<ID_Input[] | ID_Input>
  id_not_in?: Maybe<ID_Input[] | ID_Input>
  id_lt?: Maybe<ID_Input>
  id_lte?: Maybe<ID_Input>
  id_gt?: Maybe<ID_Input>
  id_gte?: Maybe<ID_Input>
  id_contains?: Maybe<ID_Input>
  id_not_contains?: Maybe<ID_Input>
  id_starts_with?: Maybe<ID_Input>
  id_not_starts_with?: Maybe<ID_Input>
  id_ends_with?: Maybe<ID_Input>
  id_not_ends_with?: Maybe<ID_Input>
  averagePoint?: Maybe<Float>
  averagePoint_not?: Maybe<Float>
  averagePoint_in?: Maybe<Float[] | Float>
  averagePoint_not_in?: Maybe<Float[] | Float>
  averagePoint_lt?: Maybe<Float>
  averagePoint_lte?: Maybe<Float>
  averagePoint_gt?: Maybe<Float>
  averagePoint_gte?: Maybe<Float>
  totalCredit?: Maybe<Int>
  totalCredit_not?: Maybe<Int>
  totalCredit_in?: Maybe<Int[] | Int>
  totalCredit_not_in?: Maybe<Int[] | Int>
  totalCredit_lt?: Maybe<Int>
  totalCredit_lte?: Maybe<Int>
  totalCredit_gt?: Maybe<Int>
  totalCredit_gte?: Maybe<Int>
  isOutside?: Maybe<Boolean>
  isOutside_not?: Maybe<Boolean>
  year?: Maybe<Int>
  year_not?: Maybe<Int>
  year_in?: Maybe<Int[] | Int>
  year_not_in?: Maybe<Int[] | Int>
  year_lt?: Maybe<Int>
  year_lte?: Maybe<Int>
  year_gt?: Maybe<Int>
  year_gte?: Maybe<Int>
  semester?: Maybe<SemesterType>
  semester_not?: Maybe<SemesterType>
  semester_in?: Maybe<SemesterType[] | SemesterType>
  semester_not_in?: Maybe<SemesterType[] | SemesterType>
  AND?: Maybe<SemesterScalarWhereInput[] | SemesterScalarWhereInput>
  OR?: Maybe<SemesterScalarWhereInput[] | SemesterScalarWhereInput>
  NOT?: Maybe<SemesterScalarWhereInput[] | SemesterScalarWhereInput>
}

export interface SemesterUpdateManyWithWhereNestedInput {
  where: SemesterScalarWhereInput
  data: SemesterUpdateManyDataInput
}

export interface SemesterUpdateManyDataInput {
  averagePoint?: Maybe<Float>
  totalCredit?: Maybe<Int>
  isOutside?: Maybe<Boolean>
  year?: Maybe<Int>
  semester?: Maybe<SemesterType>
}

export interface UserUpdateManyMutationInput {
  mailid?: Maybe<String>
  name?: Maybe<String>
  averagePoint?: Maybe<Float>
}

export interface SemesterSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>
  updatedFields_contains?: Maybe<String>
  updatedFields_contains_every?: Maybe<String[] | String>
  updatedFields_contains_some?: Maybe<String[] | String>
  node?: Maybe<SemesterWhereInput>
  AND?: Maybe<SemesterSubscriptionWhereInput[] | SemesterSubscriptionWhereInput>
  OR?: Maybe<SemesterSubscriptionWhereInput[] | SemesterSubscriptionWhereInput>
  NOT?: Maybe<SemesterSubscriptionWhereInput[] | SemesterSubscriptionWhereInput>
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>
  updatedFields_contains?: Maybe<String>
  updatedFields_contains_every?: Maybe<String[] | String>
  updatedFields_contains_some?: Maybe<String[] | String>
  node?: Maybe<UserWhereInput>
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>
}

export interface NodeNode {
  id: ID_Output
}

export interface Semester {
  id: ID_Output
  averagePoint: Float
  totalCredit: Int
  isOutside?: Boolean
  year: Int
  semester: SemesterType
}

export interface SemesterPromise extends Promise<Semester>, Fragmentable {
  id: () => Promise<ID_Output>
  averagePoint: () => Promise<Float>
  totalCredit: () => Promise<Int>
  isOutside: () => Promise<Boolean>
  year: () => Promise<Int>
  semester: () => Promise<SemesterType>
}

export interface SemesterSubscription
  extends Promise<AsyncIterator<Semester>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  averagePoint: () => Promise<AsyncIterator<Float>>
  totalCredit: () => Promise<AsyncIterator<Int>>
  isOutside: () => Promise<AsyncIterator<Boolean>>
  year: () => Promise<AsyncIterator<Int>>
  semester: () => Promise<AsyncIterator<SemesterType>>
}

export interface SemesterNullablePromise
  extends Promise<Semester | null>,
    Fragmentable {
  id: () => Promise<ID_Output>
  averagePoint: () => Promise<Float>
  totalCredit: () => Promise<Int>
  isOutside: () => Promise<Boolean>
  year: () => Promise<Int>
  semester: () => Promise<SemesterType>
}

export interface SemesterConnection {
  pageInfo: PageInfo
  edges: SemesterEdge[]
}

export interface SemesterConnectionPromise
  extends Promise<SemesterConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T
  edges: <T = FragmentableArray<SemesterEdge>>() => T
  aggregate: <T = AggregateSemesterPromise>() => T
}

export interface SemesterConnectionSubscription
  extends Promise<AsyncIterator<SemesterConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T
  edges: <T = Promise<AsyncIterator<SemesterEdgeSubscription>>>() => T
  aggregate: <T = AggregateSemesterSubscription>() => T
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>
  hasPreviousPage: () => Promise<Boolean>
  startCursor: () => Promise<String>
  endCursor: () => Promise<String>
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>
  startCursor: () => Promise<AsyncIterator<String>>
  endCursor: () => Promise<AsyncIterator<String>>
}

export interface SemesterEdge {
  node: Semester
  cursor: String
}

export interface SemesterEdgePromise
  extends Promise<SemesterEdge>,
    Fragmentable {
  node: <T = SemesterPromise>() => T
  cursor: () => Promise<String>
}

export interface SemesterEdgeSubscription
  extends Promise<AsyncIterator<SemesterEdge>>,
    Fragmentable {
  node: <T = SemesterSubscription>() => T
  cursor: () => Promise<AsyncIterator<String>>
}

export interface AggregateSemester {
  count: Int
}

export interface AggregateSemesterPromise
  extends Promise<AggregateSemester>,
    Fragmentable {
  count: () => Promise<Int>
}

export interface AggregateSemesterSubscription
  extends Promise<AsyncIterator<AggregateSemester>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>
}

export interface User {
  id: ID_Output
  mailid: String
  name: String
  createdAt: DateTimeOutput
  averagePoint: Float
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>
  mailid: () => Promise<String>
  name: () => Promise<String>
  createdAt: () => Promise<DateTimeOutput>
  averagePoint: () => Promise<Float>
  semesters: <T = FragmentableArray<Semester>>(args?: {
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => T
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  mailid: () => Promise<AsyncIterator<String>>
  name: () => Promise<AsyncIterator<String>>
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>
  averagePoint: () => Promise<AsyncIterator<Float>>
  semesters: <T = Promise<AsyncIterator<SemesterSubscription>>>(args?: {
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => T
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>
  mailid: () => Promise<String>
  name: () => Promise<String>
  createdAt: () => Promise<DateTimeOutput>
  averagePoint: () => Promise<Float>
  semesters: <T = FragmentableArray<Semester>>(args?: {
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => T
}

export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T
  edges: <T = FragmentableArray<UserEdge>>() => T
  aggregate: <T = AggregateUserPromise>() => T
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T
  aggregate: <T = AggregateUserSubscription>() => T
}

export interface UserEdge {
  node: User
  cursor: String
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T
  cursor: () => Promise<String>
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T
  cursor: () => Promise<AsyncIterator<String>>
}

export interface AggregateUser {
  count: Int
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>
}

export interface BatchPayload {
  count: Long
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>
}

export interface SemesterSubscriptionPayload {
  mutation: MutationType
  node: Semester
  updatedFields: String[]
  previousValues: SemesterPreviousValues
}

export interface SemesterSubscriptionPayloadPromise
  extends Promise<SemesterSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>
  node: <T = SemesterPromise>() => T
  updatedFields: () => Promise<String[]>
  previousValues: <T = SemesterPreviousValuesPromise>() => T
}

export interface SemesterSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SemesterSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>
  node: <T = SemesterSubscription>() => T
  updatedFields: () => Promise<AsyncIterator<String[]>>
  previousValues: <T = SemesterPreviousValuesSubscription>() => T
}

export interface SemesterPreviousValues {
  id: ID_Output
  averagePoint: Float
  totalCredit: Int
  isOutside?: Boolean
  year: Int
  semester: SemesterType
}

export interface SemesterPreviousValuesPromise
  extends Promise<SemesterPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>
  averagePoint: () => Promise<Float>
  totalCredit: () => Promise<Int>
  isOutside: () => Promise<Boolean>
  year: () => Promise<Int>
  semester: () => Promise<SemesterType>
}

export interface SemesterPreviousValuesSubscription
  extends Promise<AsyncIterator<SemesterPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  averagePoint: () => Promise<AsyncIterator<Float>>
  totalCredit: () => Promise<AsyncIterator<Int>>
  isOutside: () => Promise<AsyncIterator<Boolean>>
  year: () => Promise<AsyncIterator<Int>>
  semester: () => Promise<AsyncIterator<SemesterType>>
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node: User
  updatedFields: String[]
  previousValues: UserPreviousValues
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>
  node: <T = UserPromise>() => T
  updatedFields: () => Promise<String[]>
  previousValues: <T = UserPreviousValuesPromise>() => T
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>
  node: <T = UserSubscription>() => T
  updatedFields: () => Promise<AsyncIterator<String[]>>
  previousValues: <T = UserPreviousValuesSubscription>() => T
}

export interface UserPreviousValues {
  id: ID_Output
  mailid: String
  name: String
  createdAt: DateTimeOutput
  averagePoint: Float
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>
  mailid: () => Promise<String>
  name: () => Promise<String>
  createdAt: () => Promise<DateTimeOutput>
  averagePoint: () => Promise<Float>
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  mailid: () => Promise<AsyncIterator<String>>
  name: () => Promise<AsyncIterator<String>>
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>
  averagePoint: () => Promise<AsyncIterator<Float>>
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string

export type Long = string

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: 'User',
    embedded: false,
  },
  {
    name: 'SemesterType',
    embedded: false,
  },
  {
    name: 'Semester',
    embedded: false,
  },
]

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/dream-plus/backend/dev`,
})
export const prisma = new Prisma()
