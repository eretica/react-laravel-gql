import React, {FC, useEffect, useRef, useState} from 'react'
import {useTodo} from "../../hooks/useTodo";
import {useCategory} from "../../hooks/gql/useCategory";
import {Category} from "../../../generated/graphql";
import {Loading} from "../elements/Loading";
import {Hider} from "../elements/Hider";


export const CategoryMaster: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    fetch: {loading: fetching, refetching, data, error, refetch, networkStatus},
    find: [find, {loading: finding, data: findedCategory}],
    create: [createCategory, {loading: creating}],
    update: [updateCategory, {loading: updating}],
    remove: [removeCategory, {loading: removing}],
  } = useCategory()

  useEffect(() => {
    find({variables: {id: '16'}})
  }, [])

  const [deletings, setDeleting] = useState<{ [key: string]: boolean }>({})
  const [updatings, setUpdating] = useState<{ [key: string]: boolean }>({})

  if (error) return <p>Error :(</p>;

  return (
    <div>
      GraphQL Example
      <button onClick={() => {
        refetch()
      }}>
        refetch
      </button>

      <br/>

      <h3>store of gql network status: {networkStatus}</h3>

      <Hider isHide={fetching || refetching}>
        {data && data.categories!.data.map((category) => (
            <Row
              key={category.id}
              category={category}
              onUpdate={async () => {
                setUpdating({
                  ...updatings,
                  [category.id]: true
                })

                await updateCategory({variables: {id: category.id, name: `${category.name}+`}})
                await refetch({})
                // todo モデルに持たせる?
                delete updatings[category.id]
                setUpdating({...updatings})
              }}
              updating={!!updatings[category.id]}
              onDelete={async () => {
                setDeleting({
                  ...deletings,
                  [category.id]: true
                })
                await removeCategory({variables: {id: category.id}})
                await refetch({})
                // todo モデルに持たせる
                delete deletings[category.id]
                setDeleting({...deletings})
              }}
              deleting={!!deletings[category.id]}
            />
          )
        )}
      </Hider>

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
  category: Category
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
