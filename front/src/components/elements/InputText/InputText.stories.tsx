import React from 'react';
import {storiesOf} from "@storybook/react";
import {InputText} from './InputText'

storiesOf('Elements/InputText', module)
  .add('all', () => <>
    <InputText />
    <br/>
    <InputText value={'default value'} />
    </>
  )
