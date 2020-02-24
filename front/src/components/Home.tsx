import React, { FC } from 'react'
import {useTodo} from "../hooks/useTodo";

export const Home: FC = () => {
  const { todo, addTodo } = useTodo()

  return (
    <div>
      HOME
      {todo.todos.map(v => (<p>{v.name}</p>))}
      <button type="button" onClick={addTodo}>Add</button>
    </div>
  );
}
