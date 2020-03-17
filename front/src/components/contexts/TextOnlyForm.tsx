import React, {FC, useRef} from 'react'
import {InputText} from "../elements/InputText";
import {Button} from "../elements/Button";

type Props = {
  onSubmit: (text: string) => void
  // validation?: todo react-hooks-form?
}

export const TextOnlyForm: FC<Props> = ({
  onSubmit
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <InputText ref={inputRef} />
      <Button onClick={() => {
        onSubmit(inputRef.current?.value || '')
      }} />
    </>
  )
}
