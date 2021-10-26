
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {DatePicker} from "./DatePicker";




export default {
    title: 'Example/DatePicker',
    component: DatePicker,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof DatePicker>;

  const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />

  export const Outlined = Template.bind({});

  Outlined.args = {
      label:  "Outlined",
      variant: "outlined",
      isFullSize: true
  }

  export const Filled =  Template.bind({});

  Filled.args = {
      label: "Filled",
      variant:"filled",
      isFullSize: true
  }

  export const Standard =  Template.bind({});

  Standard.args = {
      label: "Standard",
      variant:"standard",
      isFullSize: true 
  }