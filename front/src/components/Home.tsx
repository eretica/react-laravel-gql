import React, {FC, useEffect} from 'react'
import {useTodo} from "../hooks/useTodo";
import {gql} from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import {apolloClient, getCategory} from "../graphql";

const EXCHANGE_RATES = gql`
      {
        categories {
          paginatorInfo {
            total
          }
          data {
            name
          }
        }
      }
    `

export const Home: FC = () => {
  const { todo, addTodo } = useTodo()
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  useEffect(() => {
    getCategory()
  }, [])

  // console.log(error)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data)

  return (
    <div>
      HOME
      {data.categories.data.map((v: any) => v.name)}
      {todo.todos.map(v => (<p>{v.name}</p>))}
      <button type="button" onClick={addTodo}>Add</button>
    </div>
  );
}
