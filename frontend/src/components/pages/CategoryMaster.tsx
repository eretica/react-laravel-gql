import React, {FC, useEffect} from 'react'
import {useCategory} from "../../hooks/gql/useCategory";
import {Hider} from "../elements/Hider/Hider";
import {Button} from "../elements/Button/Button";
import {CategoryList} from "../contexts/CategoryList/CategoryList";
import {CategoryRow} from "../contexts/CategoryRow/CategoryRow";
import {Header} from "../elements/Header/Header";
import {TextOnlyForm} from "../contexts/TextOnlyForm";
import {LoadingProvider} from "../../contexts/LoadingContext";

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
        {category.categories.length > 0 && (
          <CategoryList >
            {category.categories.map(category => (
              <LoadingProvider key={category.id}>
                {({loading, setLoading}) => {
                return (
                <CategoryRow
                key={category.id}
                category={category}
                processing={loading}
                onUpdate={async id => {
                  setLoading(true)
                  await update({id, name: `${category.name}+`})
                  setLoading(false)
                }}
                onDelete={async id => {
                  setLoading(true)
                  await remove({id})
                  setLoading(false)
                }}
                />
                )
              }}
              </LoadingProvider>
            ))}
          </CategoryList>
        )}
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
