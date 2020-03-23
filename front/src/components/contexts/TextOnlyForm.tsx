import React, {FC, useRef} from 'react'
import {InputText} from "../elements/InputText";
import {Button} from "../elements/Button";

type Props = {
  onSubmit: (text: string) => void
  submitLabel?: string
  // validation?: todo react-hooks-form?
}

export const TextOnlyForm: FC<Props> = ({
  onSubmit,
  submitLabel,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSubmit(inputRef.current!.value || '')
    }}>
      <InputText ref={inputRef}/>
      <Button type='submit'>
        {submitLabel ?? '送信'}
      </Button>
    </form>
  )
}
