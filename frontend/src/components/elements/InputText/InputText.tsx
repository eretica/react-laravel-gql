import React, {forwardRef, InputHTMLAttributes} from 'react'
import styled from "styled-components";
import {Color} from "../../../const/styles";

type Props = InputHTMLAttributes<HTMLInputElement>

export const InputText = forwardRef<HTMLInputElement, Props>(
  ({...rest}, ref) => (<Input type="text" {...rest} ref={ref} />)
)

const Input = styled.input`
  color: ${Color.text};
  font-size: 16px;
  padding: 14px 16px;
  border-radius: 5px;
  border:solid 1px ${Color.border};
  
  &:focus {
    border:solid 2px ${Color.focus};
    outline:none;
      box-shadow: 1px 5px 10px -3px ${Color.shadow};
  -webkit-box-shadow: 1px 5px 10px -3px ${Color.shadow};
  -moz-box-shadow: 1px 5px 10px -3px ${Color.shadow};
  }
  
  &::placeholder {
    color: ${Color.placeholder};
  }
  
  &:disabled {
    color: ${Color.disable};
    background: ${Color.disableBackground};
    border:solid 1px ${Color.disableBorder};
  }
`

