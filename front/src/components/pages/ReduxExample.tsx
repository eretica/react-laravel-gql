import React, {FC} from 'react'
import {useTodo} from "../../hooks/useTodo";

export const ReduxExample: FC = () => {
  const {todo, addTodo} = useTodo()

  return (
    <div>
      Redux Example
      <br/>

      <h3>store of redux <button type="button" onClick={addTodo}>Add</button>
      </h3>

      {todo.todos.length !== 0 && (
        <ul>
          {todo.todos.map(v => (<li key={v.name}>{v.name}</li>))}
        </ul>
      )}
    </div>
  );
}
