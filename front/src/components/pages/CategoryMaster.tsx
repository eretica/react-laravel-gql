import React, {FC, useEffect} from 'react'
import {useCategory} from "../../hooks/gql/useCategory";
import {Hider} from "../elements/Hider/Hider";
import {Button} from "../elements/Button/Button";
import {CategoryList} from "../contexts/CategoryList";
import {CategoryRow} from "../contexts/CategoryRow";
import {Header} from "../elements/Header/Header";
import {TextOnlyForm} from "../contexts/TextOnlyForm";

const CategoryMaster: FC = () => {
  const {
    category,
    loading,
    updating,
    deleting,
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
              onUpdate={id => {
                update({id, name: `${category.name}+`})
              }}
              updating={updating[category.id] || false}
              onDelete={id => {
                remove({id})
              }}
              deleting={deleting[category.id] || false}
            />
          </CategoryList>
        ))}
      </Hider>

      <br/>

      <TextOnlyForm onSubmit={(value) => {
        create({name: value}).then(() => {
      })
      }}/>
    </div>
  );
}

export default CategoryMaster
