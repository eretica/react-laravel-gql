import React from 'react';
import {storiesOf} from "@storybook/react";
import {Loading} from './Loading'
import {Separator} from "../../index.stories";

storiesOf('Elements/Loading', module)
  .add('all', () => <>
    <Separator>
    <Loading />
    </Separator>
    </>)

