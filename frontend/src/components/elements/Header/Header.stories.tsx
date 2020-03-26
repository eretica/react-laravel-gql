import React from 'react';
import {storiesOf} from "@storybook/react";
import {Header} from './Header'

storiesOf('Elements/Header', module)
  .add('all', () => <Header>Im Header!</Header>)
