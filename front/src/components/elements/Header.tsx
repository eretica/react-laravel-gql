import React, {FC} from 'react'

interface Props {
}

export const Header: FC<Props> = ({
  children,
}) => (
  <h1>
    {children}
  </h1>
)
