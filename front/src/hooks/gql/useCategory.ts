import {gql} from "apollo-boost";
import {
  Mutation,
  MutationCreateCategoryArgs,
  MutationRemoveCategoryArgs, MutationRemoveCategoryByNameArgs,
  MutationUpdateCategoryArgs, Query,
  QueryCategoriesArgs, QueryCategoryArgs
} from "../../../generated/graphql";
import { useSelector } from 'react-redux'
import {mutation, query} from "./index";
import {useCategoryActions} from "../../reducers/category";
import {IStore} from "../../store";
import {useState} from "react";

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

const gqlActions = {
  fetch: query<Pick<Query, 'categories'>, QueryCategoriesArgs>(FETCH),
  find: query<Pick<Query, 'category'>, QueryCategoryArgs>(FIND),
  create: mutation<Pick<Mutation, 'createCategory'>, MutationCreateCategoryArgs>(CREATE),
  update: mutation<Pick<Mutation, 'updateCategory'>, MutationUpdateCategoryArgs>(UPDATE),
  remove: mutation<Pick<Mutation, 'removeCategory'>, MutationRemoveCategoryArgs>(REMOVE),
}

export const useCategory = () => {
  const categoryActions = useCategoryActions()
  const [loading, setLoading] = useState(false)

  const fetch = (params: QueryCategoriesArgs) => {
    setLoading(true)
    return gqlActions.fetch(params)
      .then((result) => {
        categoryActions.fetch({
          categories: result.data.categories!.data
        });
      }).finally(() => {
        setLoading(false)
      })
  };

  const find = (params: QueryCategoryArgs) => {
    return gqlActions.find(params)
      .then((result) => {
        categoryActions.find({
          category: result.data.category!
        });
      })
  };

  const create = (params: MutationCreateCategoryArgs) => {
    return gqlActions.create(params)
      .then((result) => {
        categoryActions.create({
          category: result.data!.createCategory!
        });
      })
  };

  const update = (params: MutationUpdateCategoryArgs) => {
    return gqlActions.update(params)
      .then((result) => {
        categoryActions.update({
          category: result.data!.updateCategory!
        });
      })
  };

  const remove = (params: MutationRemoveCategoryArgs) => {
    return gqlActions.remove(params)
      .then((result) => {
        categoryActions.remove({
          id: params.id,
        });
      })
  };

  return {
    category: useSelector<IStore, IStore['category']>(state => {return state.category}),
    loading,
    fetch,
    find,
    create,
    update,
    remove,
  }
}
