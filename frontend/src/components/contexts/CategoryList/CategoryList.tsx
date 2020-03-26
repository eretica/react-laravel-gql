import React, {FC} from 'react'
import styled from "styled-components";

interface Props {
}

export const CategoryList: FC<Props> =  ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.ul`
 padding: 0;
`
