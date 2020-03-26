import React from 'react';
import {storiesOf} from "@storybook/react";
import {Hider} from './Hider'
import {Separator} from "../../index.stories";

storiesOf('Elements/Hider', module)
  .add('all', () => <>
      <Separator label='hide on'>
        <Hider isHide={true}>Can not show</Hider>
      </Separator>
      <Separator label='hide off'>
        <Hider isHide={false}>Can show</Hider>
      </Separator>
      <Separator label='hide on with instead component'>
        <Hider isHide={true} insteadOf={<p>...instead of dummy loading</p>}>Can not show</Hider>
      </Separator>
    </>
  )
