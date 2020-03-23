import React, {FC} from 'react'
import {Category} from "../../../generated/graphql";
import {Button} from "../elements/Button";

interface Props {
  category: Category
  onUpdate: (id: string) => void
  updating: boolean
  onDelete: (id: string) => void
  deleting: boolean
}

export const CategoryRow: FC<Props> =  ({ category, onUpdate, onDelete, updating, deleting }) => {
  return (
    <li>
      {category.name}
      <Button
        onClick={() => {
          onUpdate(category.id)
        }}>
        {updating ? '...updating' : 'あっぷでーと'}
      </Button>
      <Button
        onClick={() => {
          onDelete(category.id)
        }}>
        {deleting ? '...deleting' : 'x'}
      </Button>
    </li>
  )
}
