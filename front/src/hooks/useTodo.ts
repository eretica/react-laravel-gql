import {useSelector, useDispatch} from "react-redux";
import {IStore} from "../store";

export const useTodo = () => {
  const todo = useSelector((state: IStore) => state.todo);
  const dispatch = useDispatch()

  const addTodo = () => {
    dispatch({type: 'addTodo'})
  }

  return {
    todo,
    addTodo,
  }
}
