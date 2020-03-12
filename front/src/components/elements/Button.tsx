import React, {ButtonHTMLAttributes, FC} from 'react'

interface Props {
  onClick?: () => void
  color?: 'primary' | 'secondary'
}

export const Button: FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => (
  <button
    {...rest}
  >
    {children}
  </button>
)
