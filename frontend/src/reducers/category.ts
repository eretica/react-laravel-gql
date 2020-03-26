import produce from 'immer'
import {Category} from "../../generated/graphql";
import {useDispatch} from "react-redux";

type CategoryState = {
  categories: Category[]
}

const initialState: CategoryState = {
  categories: []
}

export const useCategoryActions = () => {
  const dispatch = useDispatch()

  return {
    fetch: (payload: {categories: Category[]}) => dispatch({
      type: 'category/fetch' as const,
      payload
    }),
    find: (payload: {category: Category}) => dispatch({
      type: 'category/find' as const,
      payload
    }),
    create: (payload: {category: Category}) => dispatch({
      type: 'category/create' as const,
      payload
    }),
    update: (payload: {category: Category}) => dispatch({
      type: 'category/update' as const,
      payload
    }),
    remove: (payload: {id: Category['id']}) => dispatch({
      type: 'category/remove' as const,
      payload
    }),
  }
}

export const categoryReducer = (state = initialState, action: ActionToUnion<ReturnType<typeof useCategoryActions>>): CategoryState =>
  produce<CategoryState, CategoryState>(state, draft => {
    switch (action.type) {
      case 'category/fetch': {
        draft.categories = action.payload.categories
        break
      }
      case 'category/find': {
        // todo 単体取得の場合はNormalize的なストアにするか？詳細画面とか考えるなら詳細用のストアつくる？
        break
      }
      case 'category/create': {
        draft.categories = draft.categories.concat(action.payload.category)
        break
      }
      case 'category/update': {
        draft.categories = draft.categories.map(category => {
          if (category.id !== action.payload.category.id) {
            return category
          }

          return {
            ...category,
            ...action.payload.category,
          }
        })
        break
      }
      case 'category/remove': {
        draft.categories = draft.categories.filter(category => category.id !== action.payload.id)
        break
      }
      default:
    }
  })
