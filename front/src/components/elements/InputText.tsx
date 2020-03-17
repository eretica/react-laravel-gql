import React, {FC, forwardRef, InputHTMLAttributes} from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

const _InputText: FC<Props> = ({
  ...rest
}) => (
  <input type="text" {...rest} />
)

export const InputText = forwardRef(_InputText)
