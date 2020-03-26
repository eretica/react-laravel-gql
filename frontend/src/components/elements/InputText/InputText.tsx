import React, {forwardRef, InputHTMLAttributes} from 'react'
import styled from "styled-components";

type Props = InputHTMLAttributes<HTMLInputElement>

export const InputText = forwardRef<HTMLInputElement, Props>(
  ({...rest}, ref) => (<Input type="text" {...rest} ref={ref} />)
)

const Input = styled.input`
  color: #0384cc;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border:solid 1px #3fb6cc;
  
  &:focus {
    border:solid 2px #4cf0e8;
    outline:none;
      box-shadow: 1px 5px 10px -3px rgba(169,230,248,0.6);
  -webkit-box-shadow: 1px 5px 10px -3px rgba(169,230,248,0.6);
  -moz-box-shadow: 1px 5px 10px -3px rgba(169,230,248,0.6);

  }
  
  &::placeholder {
    color: #8da5cc;
  }
  
  &:disabled {
    color: #acbdcc;
    background: #e6edf7;
    border:solid 1px #b5c8cc;
  }
`

