import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Date: any;
};

export type Category = {
   __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type CategoryPaginator = {
   __typename?: 'CategoryPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<Category>;
};



export type Mutation = {
   __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  updateCategory?: Maybe<Category>;
  removeCategory?: Maybe<Category>;
  removeCategoryByName?: Maybe<SimpleResponse>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveCategoryByNameArgs = {
  name: Scalars['String'];
};


export type MutationCreateUserArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type OrderByClause = {
  field: Scalars['String'];
  order: SortOrder;
};

export type PageInfo = {
   __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  lastPage?: Maybe<Scalars['Int']>;
};

export type PaginatorInfo = {
   __typename?: 'PaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages: Scalars['Boolean'];
  lastItem?: Maybe<Scalars['Int']>;
  lastPage: Scalars['Int'];
  perPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
   __typename?: 'Query';
  categories?: Maybe<CategoryPaginator>;
  category?: Maybe<Category>;
  users?: Maybe<UserPaginator>;
  user?: Maybe<User>;
};


export type QueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type SimpleResponse = {
   __typename?: 'SimpleResponse';
  res: Scalars['String'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum Trashed {
  Only = 'ONLY',
  With = 'WITH',
  Without = 'WITHOUT'
}

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type UserPaginator = {
   __typename?: 'UserPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<User>;
};


