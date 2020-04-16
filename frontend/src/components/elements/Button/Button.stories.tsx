import React from 'react';
import {storiesOf} from "@storybook/react";
import {Button} from './Button'
import {Separator} from "../../index.stories";

storiesOf('Elements/Button', module)
  .add('all', () => <>
    <Separator>
      <Button>Click Me!!</Button>
    </Separator>
  </>)
