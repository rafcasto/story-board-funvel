
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TextBox} from "./TextBox";
import {Button} from "../Button/Button"



export default {
    title: 'Example/TextBox',
    component: TextBox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof TextBox>;

  const Template: ComponentStory<typeof TextBox> = (args) => <TextBox {...args} />

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