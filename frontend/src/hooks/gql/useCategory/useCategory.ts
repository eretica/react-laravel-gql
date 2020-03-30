import {gql} from "apollo-boost";
import {
  Mutation,
  MutationCreateCategoryArgs,
  MutationRemoveCategoryArgs,
  MutationUpdateCategoryArgs, Query,
  QueryCategoriesArgs, QueryCategoryArgs
} from "../../../../generated/graphql";
import { useSelector } from 'react-redux'
import {mutation, query} from "../index";
import {useCategoryActions} from "../../../reducers/category";
import {IStore} from "../../../store";
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

const gqlActions = {
  fetch: query<Pick<Query, 'categories'>, QueryCategoriesArgs>(FETCH),
  find: query<Pick<Query, 'category'>, QueryCategoryArgs>(FIND),
  create: mutation<Pick<Mutation, 'createCategory'>, MutationCreateCategoryArgs>(CREATE),
  update: mutation<Pick<Mutation, 'updateCategory'>, MutationUpdateCategoryArgs>(UPDATE),
  remove: mutation<Pick<Mutation, 'removeCategory'>, MutationRemoveCategoryArgs>(REMOVE),
}

type Processing = {
  [index: string]: boolean
}

export const useCategory = () => {
  const categoryActions = useCategoryActions()
  const [loading, setLoading] = useState(false)
  // todo モデルがベター？
  const [updating, setUpdating] = useState<Processing>({})
  const [deleting, setDeleting] = useState<Processing>({})

  const fetch = async (params: QueryCategoriesArgs) => {
    setLoading(true)
    const result = await gqlActions.fetch(params)
    categoryActions.fetch({
      categories: result.data.categories!.data
    });
    setLoading(false)
  };

  const find = async (params: QueryCategoryArgs) => {
    const result = await gqlActions.find(params)
    categoryActions.find({
      category: result.data.category!
    });
  };

  const create = async (params: MutationCreateCategoryArgs) => {
    const result = await gqlActions.create(params)
    categoryActions.create({
      category: result.data!.createCategory!
    });
  };

  const update = async (params: MutationUpdateCategoryArgs) => {
    setUpdating({
      ...updating,
      [params.id]: true,
    })
    const result = await gqlActions.update(params)
    categoryActions.update({
      category: result.data!.updateCategory!
    });
    setUpdating({
      ...updating,
      [params.id]: false,
    })
  };

  const remove = async (params: MutationRemoveCategoryArgs) => {
    setDeleting({
      ...updating,
      [params.id]: true,
    })

    await gqlActions.remove(params)
    categoryActions.remove({
      id: params.id,
    });

    setDeleting({
      ...updating,
      [params.id]: false,
    })
  };

  return {
    category: useSelector<IStore, IStore['category']>(state => {return state.category}),
    loading,
    updating,
    deleting,
    fetch,
    find,
    create,
    update,
    remove,
  }
}
