
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {GenderOptions} from "./GenderOptions";

export default {
    title: 'Example/GenderOptions',
    component: GenderOptions,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof GenderOptions>;

  const Template: ComponentStory<typeof GenderOptions> = (args) => <GenderOptions {...args} />

  export const Vertical = Template.bind({})

  Vertical.args = {
    legend: "Gender"
  }

  export const Horizontal = Template.bind({})

  Horizontal.args = {
      isRow :true,
      legend:"Gender"
  }