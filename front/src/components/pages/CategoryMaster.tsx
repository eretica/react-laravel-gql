import React, {FC, useEffect} from 'react'
import {useCategory} from "../../hooks/gql/useCategory";
import {Hider} from "../elements/Hider";
import {Button} from "../elements/Button";
import {CategoryList} from "../contexts/CategoryList";
import {CategoryRow} from "../contexts/CategoryRow";
import {Header} from "../elements/Header";
import {TextOnlyForm} from "../contexts/TextOnlyForm";

const CategoryMaster: FC = () => {
  const {
    category,
    loading,
    fetch,
    create,
    update,
    remove,
  } = useCategory()

  useEffect(() => {
    fetch({})
  }, [])

  return (
    <div>
      <Header>
        GraphQL Example
      </Header>

      <Button
        onClick={() => {
          fetch({})
        }}
      >
        refetch
      </Button>

      <br/>

      <Hider isHide={loading}>
        {category.categories.length > 0 && category.categories.map(category => (
          <CategoryList key={category.id}>
            <CategoryRow
              category={category}
              onUpdate={async (id) => {
                await update({id, name: `+`})
                // await fetch({})
              }}
              onDelete={async (id) => {
                await remove({id})
                // await fetch({})
              }}
            />
          </CategoryList>
        ))}
      </Hider>

      <br/>

      <TextOnlyForm onSubmit={(value) => {
        create({name: value}).then(() => {
          // fetch({})
        })
      }}/>
    </div>
  );
}

export default CategoryMaster
