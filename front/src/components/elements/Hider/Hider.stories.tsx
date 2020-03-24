import React from 'react';
import {storiesOf} from "@storybook/react";
import {Hider} from './Hider'

storiesOf('Elements/Hider', module)
  .add('all', () => <>
    <Hider isHide={true}>Can not show</Hider>
    <Hider isHide={false}>show</Hider>
    <Hider isHide={true} insteadOf={<p>...instead of dummy loading</p>}>Can not show</Hider>
  </>
)
