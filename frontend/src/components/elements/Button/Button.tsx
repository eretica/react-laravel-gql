import React, {ButtonHTMLAttributes, FC} from 'react'
import styled from "styled-components";
import {Color} from "../../../const/styles";

interface Props {
  onClick?: () => void
  color?: 'primary' | 'secondary'
}

export const Button: FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => (
  <Wrapper
    {...rest}
  >
    {children}
  </Wrapper>
)

export const Wrapper = styled.button`
  height: 50px;
  display: inline-block;
  max-width: 180px;
  background-color: ${Color.buttonColor};
  text-align: left;
  border: 2px solid ${Color.border};
  font-size: 16px;
  color: ${Color.text};
  text-decoration: none;
  font-weight: bold;
  padding: 10px 16px;
  border-radius: 4px;
  transition: .4s;
  white-space: nowrap;

&:disabled {
 color: ${Color.disable};
 border: ${Color.disableBorder};
 background-color: ${Color.disableBackground};
}

&:not(:disabled):hover {
  background-color: ${Color.hoverBackground};
  border-color: ${Color.hoverBorder};
  color: ${Color.hoverText};
}
`
