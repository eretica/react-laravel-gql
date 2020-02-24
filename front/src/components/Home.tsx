import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import {IStore} from "../store";

export const Home: FC = () => {
  const todo = useSelector((state: IStore) => state.todo);

  console.log(todo)

  return (
    <div>
      HOME
      {todo.todos.map(v => v.name)}
    </div>
  );
}
