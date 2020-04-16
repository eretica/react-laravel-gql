import React from 'react';
import {storiesOf} from "@storybook/react";
import {Header} from './Header'
import {Separator} from "../../index.stories";

storiesOf('Elements/Header', module)
  .add('all', () =>
  <>
    <Separator>
      <Header>Im Header!!</Header>
    </Separator>
  </>
  )
