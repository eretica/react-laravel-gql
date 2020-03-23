import React from 'react';
import {storiesOf} from "@storybook/react";
import {Hider} from './Hider'

storiesOf('Hider', module)
  .add('hiding', () => <Hider isHide={true}>Can not show</Hider>)
  .add('not hide', () => <Hider isHide={false}>show</Hider>)
  .add('instead hide', () => <Hider isHide={true} insteadOf={<p>instead of loader</p>}>Can not show</Hider>)
