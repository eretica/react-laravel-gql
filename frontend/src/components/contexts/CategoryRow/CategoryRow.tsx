import React, {FC} from 'react'
import {Category} from "../../../../generated/graphql";
import {Button} from "../../elements/Button/Button";
import styled from "styled-components";
import {Color} from "../../../const/styles";
import {Text} from "../../elements/Text/Text";

interface Props {
  category: Category
  onUpdate: (id: string) => void
  processing: boolean
  onDelete: (id: string) => void
}

export const CategoryRow: FC<Props> =  ({ category, onUpdate, onDelete, processing }) => {
  return (
    <Warapper>
      <Main>
      <Text size="l">
        {category.name}
      </Text>
      </Main>
      <Sub>
        <Button
          disabled={processing}
          onClick={() => {
            onUpdate(category.id)
          }}>
          あっぷでーと
        </Button>
        <Button
          disabled={processing}
          onClick={() => {
            onDelete(category.id)
          }}>
          x
        </Button>
      </Sub>
    </Warapper>
  )
}

const Warapper = styled.li`
  display: grid;
  grid-template-columns: 60% 40%;
  border: 1px ${Color.border} solid;
  border-bottom: 0;
  background-color: ${Color.RowBackground};
  
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
    border-bottom: 1px ${Color.border} solid
  }
  padding: 5px 10px;
`

const Main = styled.div`
  display: flex;
  align-items: center;
`

const Sub = styled.div`
 display: flex;
 justify-content: flex-end;
 align-items: center;
`