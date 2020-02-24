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
      case 'addTodo': {
        draft.todos.push({name: 'z+' + state.todos.length})
        break
      }
      default:
    }
  })
