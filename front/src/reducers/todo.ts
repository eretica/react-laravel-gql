import produce from 'immer'

type TodoState = {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [
    {name: 'a'},
    {name: 'b'},
  ]
}

export const todoReducer = (state = initialState, action: any): TodoState =>
  produce<TodoState, TodoState>(state, draft => {
    switch (action.type) {
      case 'addTodo': {
        draft.todos.push({name: 'z+' + state.todos.length})
        break
      }
      default:
    }
  })
