import React, {FC} from 'react'
import {storiesOf} from "@storybook/react";
import {Separator} from "../../index.stories";
import {CategoryList} from "./CategoryList";
import {CategoryRow} from "../CategoryRow/CategoryRow";
import {Category} from "../../../../generated/graphql";
import {action} from '@storybook/addon-actions';

const categories: Category[] = [
  {id: '1', name: 'PS4', created_at: (new Date()).getTime(), updated_at: (new Date()).getTime()},
  {id: '2', name: 'Switch', created_at: (new Date()).getTime(), updated_at: (new Date()).getTime()},
  {id: '3', name: 'Xbox', created_at: (new Date()).getTime(), updated_at: (new Date()).getTime()},
]

storiesOf('Contexts/CategoryList', module)
.add('all', () => (
  <>
    <Separator>
      <CategoryList>
        {categories.map(category => (
          <CategoryRow
            category={category}
            onUpdate={action('onUpdate')}
            onDelete={action('onDelete')}
            processing={false}
          />
            ))}
          </CategoryList>
    </Separator>
    <Separator label='loading'>
      <CategoryList>
        {categories.map(category => (
          <CategoryRow
            category={category}
            onUpdate={action('onUpdate')}
            onDelete={action('onDelete')}
            processing={true}
          />
        ))}
      </CategoryList>
    </Separator>
  </>
))
