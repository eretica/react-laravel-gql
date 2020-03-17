import React, {FC, useState} from 'react'
import {Category} from "../../../generated/graphql";
import {Button} from "../elements/Button";

interface Props {
  category: Category
  onUpdate: (id: string) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

export const CategoryRow: FC<Props> =  ({ category, onUpdate, onDelete }) => {
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
