import {gql} from "apollo-boost";
import {useMutation, useQuery, useLazyQuery} from "@apollo/react-hooks";
import {
  Mutation,
  MutationCreateCategoryArgs,
  MutationRemoveCategoryArgs, MutationRemoveCategoryByNameArgs,
  MutationUpdateCategoryArgs, Query,
  QueryCategoriesArgs, QueryCategoryArgs
} from "../../../generated/graphql";
import {parseLazyQuery, parseQuery} from "../../helpers/gqlHelpers";

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


export const useCategory = () => {
  // todo loading refreshのステータスはここで抽象化しとく？ redux的にLoadingをLocalStateで管理するほうがよさげ？
  const fetch = useQuery<Pick<Query, 'categories'>, QueryCategoriesArgs>(FETCH, {
    notifyOnNetworkStatusChange: true

  });
  const find = useLazyQuery<Pick<Query, 'category'>, QueryCategoryArgs>(FIND, {
    notifyOnNetworkStatusChange: true
  });
  const create = useMutation<Mutation['createCategory'], MutationCreateCategoryArgs>(CREATE);
  const update = useMutation<Mutation['updateCategory'], MutationUpdateCategoryArgs>(UPDATE);
  const remove = useMutation<Mutation['removeCategory'], MutationRemoveCategoryArgs>(REMOVE);
  const removeByName = useMutation<Mutation['removeCategoryByName'], MutationRemoveCategoryByNameArgs>(REMOVE);

  return {
    fetch: parseQuery(fetch),
    find: parseLazyQuery(find),
    create,
    update,
    remove,
    removeByName,
  }
}
