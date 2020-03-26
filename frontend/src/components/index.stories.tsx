import React, {FC} from 'react'
import styled from "styled-components";

export const Separator: FC<{
  label?: string
}> = ({label}) =>
  <Warapper>
    <LarabelWarapper>
      {label}
    </LarabelWarapper>
  </Warapper>

export const Warapper = styled.div`
  margin-top: 15px;
  padding-bottom: 3px;
`

export const LarabelWarapper = styled.div`
  font: caption;
  color: gray;
`
