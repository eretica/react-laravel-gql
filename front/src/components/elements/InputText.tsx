import React, {forwardRef, InputHTMLAttributes} from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

export const InputText = forwardRef<HTMLInputElement, Props>(
  ({...rest}, ref) => (<input type="text" {...rest} ref={ref}/>)
)
