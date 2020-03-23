import React, {FC, useEffect, useRef, useState} from 'react'
import {useCategory} from "../../hooks/gql/useCategory";
import {Category} from "../../../generated/graphql";
import {Hider} from "../elements/Hider";
import {Button} from "../elements/Button";
import {CategoryList} from "../contexts/CategoryList";
import {CategoryRow} from "../contexts/CategoryRow";
import {Header} from "../elements/Header";
import {TextOnlyForm} from "../contexts/TextOnlyForm";

type ResolvedType<T> =
  T extends Promise<infer R> ? R : T;

const CategoryMaster: FC = () => {
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
      <Header>
        GraphQL Example
      </Header>

      <Button
        onClick={() => {
          setRefetching(true)
          fetch().finally(() => {
            setRefetching(false)
          })
        }}
      >
        refetch
      </Button>

      <br/>

      <Hider isHide={fetching || refetching}>
        {categories.length > 0 && categories.map(category => (
          <CategoryList>
            <CategoryRow
              category={category}
              onUpdate={async (id) => {
                await update({id, name: `+`})
                await fetch()
              }}
              onDelete={async (id) => {
                await remove({id})
                await fetch()
              }}
            />
          </CategoryList>
        ))}
      </Hider>

      <br/>

      <TextOnlyForm onSubmit={(value) => {
        create({name: value}).then(() => {
          fetch()
        })
      }}/>
    </div>
  );
}

export default CategoryMaster
