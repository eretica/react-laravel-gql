import React, {FC} from 'react'
import {Category} from "../../../../generated/graphql";
import {Button} from "../../elements/Button/Button";
import styled from "styled-components";
import {Color} from "../../../const/styles";
import {Text} from "../../elements/Text/Text";

interface Props {
  category: Category
  onUpdate: (id: string) => void
  updating: boolean
  onDelete: (id: string) => void
  deleting: boolean
}

export const CategoryRow: FC<Props> =  ({ category, onUpdate, onDelete, updating, deleting }) => {
  return (
    <Warapper>
      <Main>
      <Text size="l">
        {category.name}
      </Text>
      </Main>
      <Sub>
        <Button
          onClick={() => {
            onUpdate(category.id)
          }}>
          {updating ? '...updating' : 'あっぷでーと'}
        </Button>
        <Button
          onClick={() => {
            onDelete(category.id)
          }}>
          {deleting ? '...deleting' : 'x'}
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