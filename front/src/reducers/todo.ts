// import { produce } from 'immer'
import produce from 'immer'
import { Todo } from '../types'

interface State {
  todos: Todo[]
}

const initialState: State = {
  todos: [
    {name: 'a'},
    {name: 'b'},
  ]
}

export const todoReducer = (state = initialState, action: any) =>
  produce<State, State>(state, draft => {
    switch (action.type) {
      // case USER_ACTION_TYPE.LOGIN: {
      //   draft.user = action.payload.user
      //   break
      // }
      // case USER_ACTION_TYPE.SET: {
      //   draft.user = action.payload.user
      //   break
      // }
      // case USER_ACTION_TYPE.LOGOUT: {
      //   draft.user = null
      //   break
      // }
      default:
    }
  })
