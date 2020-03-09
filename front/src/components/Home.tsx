import React, {FC, useRef, useState} from 'react'
import {useTodo} from "../hooks/useTodo";
import {useCategory} from "../hooks/gql/useCategory";

const NetworkStatus = {
  loading: 1,
  setVariables: 2,
  fetchMore: 3,
  refetch: 4,
  poll: 6,
  ready: 7,
  error: 8
}

export const Home: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const {todo, addTodo} = useTodo()
  const {
    fetch: {loading: fetching, data, error, refetch, networkStatus},
    create: [createCategory, {loading: creating}],
    update: [updateCategory, {loading: updating}],
    remove: [removeCategory, {loading: removing}],
  } = useCategory()

  const [deletings, setDeleting] = useState<{ [key: number]: boolean }>({})
  const [updatings, setUpdating] = useState<{ [key: number]: boolean }>({})

  if (error) return <p>Error :(</p>;

  return (
    <div>
      HOME
      <button onClick={() => {
        refetch()
      }}>
        refetch
      </button>

      {networkStatus === NetworkStatus.loading && <p>Loading...</p>}

      <br/>
      <h3>store of redux <button type="button" onClick={addTodo}>Add</button>
      </h3>
      {todo.todos.map(v => (<p key={v.name}>{v.name}</p>))}

      <h3>store of gql network status: {networkStatus}</h3>
      {data && data.categories.data.map((category: any) => (
          <Row
            key={category.id}
            category={category}
            onUpdate={() => {
              setUpdating({
                ...updatings,
                [category.id]: true
              })
              updateCategory({variables: {id: category.id, name: `${category.name}+`}})
                .then(refetch)
                .then(() => {
                  // todo モデルに持たせる
                  delete updatings[category.id]
                  setUpdating({...updatings})
                })
            }}
            updating={!!updatings[category.id]}
            onDelete={() => {
              setDeleting({
                ...deletings,
                [category.id]: true
              })
              removeCategory({variables: {id: category.id}})
                .then(refetch)
                .then(() => {
                  // todo モデルに持たせる
                  delete deletings[category.id]
                  setDeleting({...deletings})
                })
            }}
            deleting={!!deletings[category.id]}
          />
        )
      )}

      {networkStatus === NetworkStatus.refetch && <p>refetch...</p>}

      <br/>
      <input type="text" ref={inputRef} disabled={creating}/>
      <button type="button" disabled={creating} onClick={() => {
        const v = inputRef.current!.value
        createCategory({variables: {name: v}}).then(() => {
          inputRef.current!.value = ''
          refetch()
        })
      }}>create
      </button>
    </div>
  );
}

interface Props {
  category: any
  onUpdate: (id: string) => void
  updating: boolean
  onDelete: (id: string) => void
  deleting: boolean
}

export const Row: FC<Props> = ({category, onUpdate, updating, onDelete, deleting}) => {
  return (
    <p>
      {category.name}
      <span onClick={() => {
        onUpdate(category.id)
      }}>
        {updating ? '[...updating]' : '[あっぷでーと]'}
      </span>
      <span onClick={() => {
        onDelete(category.id)
      }}>
        {deleting ? '[...deleting]' : '[x]'}
      </span>
    </p>
  )
}
