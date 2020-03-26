import React from 'react';
import {storiesOf} from "@storybook/react";
import {Button} from './Button'

// add comment
storiesOf('Elements/Button', module)
  .add('all', () => <Button>Click Me!</Button>)
