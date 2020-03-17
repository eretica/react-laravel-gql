import React, {FC} from 'react'

interface Props {
}

export const CategoryList: FC<Props> =  ({ children }) => (
  <ul>
    {children}
  </ul>
)
