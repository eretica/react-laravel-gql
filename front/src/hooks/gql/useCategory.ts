import {gql} from "apollo-boost";
import {
  Mutation,
  MutationCreateCategoryArgs,
  MutationRemoveCategoryArgs, MutationRemoveCategoryByNameArgs,
  MutationUpdateCategoryArgs, Query,
  QueryCategoriesArgs, QueryCategoryArgs
} from "../../../generated/graphql";
import {useMutation, useQuery} from "./index";

const FETCH = gql`
    query fetchCategories {
        categories {
            paginatorInfo {
                total
            }
            data {
                id
                name
            }
        }
    }

`

const FIND = gql`
    query FIndCategory($id: ID!) {
        category (id: $id) {
            id
            name
        }
    }
`

const CREATE = gql`
    mutation CreateCategory($name: String!) {
        createCategory(name: $name) {
            id
            name
        }
    }
`

const UPDATE = gql`
    mutation removeCategory($id: ID!, $name: String!) {
        updateCategory(id: $id, name: $name) {
            name
            id
        }
    }
`;

const REMOVE = gql`
    mutation removeCategory($id: ID!) {
        removeCategory(id: $id) {
            id
        }
    }
`;

const REMOVE_BY_NAME = gql`
    mutation removeByName($name: String!) {
        removeCategoryByName(name: $name) {
            res
        }
    }
`;


export const useCategory = () => {
  const fetch = useQuery<Pick<Query, 'categories'>, QueryCategoriesArgs>(FETCH);
  const find = useQuery<Pick<Query, 'category'>, QueryCategoryArgs>(FETCH);
  const create = useMutation<Pick<Mutation, 'createCategory'>, MutationCreateCategoryArgs>(FIND);
  const update = useMutation<Pick<Mutation, 'updateCategory'>, MutationUpdateCategoryArgs>(CREATE);
  const remove = useMutation<Pick<Mutation, 'removeCategory'>, MutationRemoveCategoryArgs>(UPDATE);
  const removeByName = useMutation<Pick<Mutation, 'removeCategoryByName'>, MutationRemoveCategoryByNameArgs>(REMOVE_BY_NAME);

  return {
    fetch,
    find,
    create,
    update,
    remove,
    removeByName,
  }
}
