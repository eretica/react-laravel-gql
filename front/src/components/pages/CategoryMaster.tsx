import React, {FC, useEffect, useRef, useState} from 'react'
import {useCategory} from "../../hooks/gql/useCategory";
import {Category} from "../../../generated/graphql";
import {Hider} from "../elements/Hider";
import {Button} from "../elements/Button";

type ResolvedType<T> =
  T extends Promise<infer R> ? R : T;

const CategoryMaster: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    fetch: _fetch,
    find,
    create,
    update,
    remove,
  } = useCategory()

  const [categories, setCategories] = useState<Category[]>([])
  const [fetching, setFeting] = useState(false)
  const [refetching, setRefetching] = useState(false)

  const fetch = async () => {
    setFeting(true)
    const response = await _fetch({})
    console.log(response)
    setCategories(response.data.categories!.data)
    setFeting(false)

  }

  useEffect(() => {
    setFeting(true)
    fetch()
    find({id: '16'})
  }, [])

  return (
    <div>
      GraphQL Example
      <button onClick={() => {
        setRefetching(true)
        fetch().finally(() => {
          setRefetching(false)
        })
      }}>
        refetch
      </button>

      <button onClick={() => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:10080/api/category", true);
        xhr.onload = function (e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
            } else {
              console.error(xhr.statusText);
            }
          }
        };
        xhr.onerror = function (e) {
          console.error(xhr.statusText);
        };
        xhr.send(null);

      }}>
        natice
      </button>

      <br/>

      {/*<h3>store of gql network status: {networkStatus}</h3>*/}

      <Hider isHide={fetching || refetching}>
        {categories && (
            <CategoryList
              categories={categories}
              onUpdate={async (id) => {
                console.log('ooo?')
                await update({id, name: `+`})
                await fetch()
              }}
              onDelete={async (id) => {
                await remove({id})
                await fetch()
              }}
            />
          )}
      </Hider>

      <br/>
      <input type="text" ref={inputRef}/>
      <button type="button" onClick={() => {
        const v = inputRef.current!.value
        create({name: v}).then(() => {
          inputRef.current!.value = ''
          fetch()
        })
      }}>create
      </button>
    </div>
  );
}

interface Props {
  category: Category
  onUpdate: (id: string) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

interface Props2 {
  categories: Category[]
  onUpdate: (id: string) => Promise<void>
  onDelete: (id: string) => Promise<void>
}
export const CategoryList: FC<Props2> =  ({categories,...rest}) => (
    <ul>
      {categories.map(category => (
        <Row key={category.id} category={category} {...rest} />
      ))}
    </ul>
)

export const Row: FC<Props> = ({category, onUpdate, onDelete}) => {
  const [updating, setUpdating] = useState(false)
  const [deleting, setDeleting] = useState(false)

  return (
    <li>
      {category.name}
      <Button
        onClick={() => {
          setUpdating(true)
          onUpdate(category.id)
            .finally(() => {
            setUpdating(false)
          })
        }}>
        {updating ? '...updating' : 'あっぷでーと'}
      </Button>
      <Button
        onClick={() => {
        setDeleting(true)
        onDelete(category.id)
          .finally(() => {
          setDeleting(false)
        })
      }}>
        {deleting ? '...deleting' : 'x'}
      </Button>
    </li>
  )
}

export default CategoryMaster
