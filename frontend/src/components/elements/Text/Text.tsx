import React, {FC} from 'react';
import styled from "styled-components";

const Sizes = {
  s: '.8rem',
  m: '1rem',
  l: '1.2rem',
}

type Props = {
  size?: keyof typeof Sizes
}

export const Text: FC<Props> = ({children, size = 'm'}) => {
  return <Warapper size={size}>{children}</Warapper>
}

const Warapper = styled.p<{size: keyof typeof Sizes}>`
  font-size: ${props => Sizes[props.size]};
`
