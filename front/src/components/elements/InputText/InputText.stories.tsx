import React from 'react';
import {storiesOf} from "@storybook/react";
import {InputText} from './InputText'

storiesOf('InputText', module)
  .add('input text', () => <InputText />)
  .add('input text with default value', () => <InputText value={'default value'} />)
