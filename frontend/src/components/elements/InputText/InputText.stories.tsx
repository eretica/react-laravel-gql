import React from 'react';
import {storiesOf} from "@storybook/react";
import {InputText} from './InputText'
import {Separator} from "../../index.stories";
import {action} from '@storybook/addon-actions';

storiesOf('Elements/InputText', module)
  .add('all', () =>
    <>
      <Separator label='none'>
        <InputText onBlur={action('onBlur')}/>
      </Separator>
      <Separator label='with value'>
        <InputText defaultValue='va2lue'/>
      </Separator>
      <Separator label='with placeholder'>
        <InputText placeholder='placeholder'/>
      </Separator>
      <Separator label='with disabled'>
        <InputText disabled={true} defaultValue="value"/>
      </Separator>
    </>
  )
