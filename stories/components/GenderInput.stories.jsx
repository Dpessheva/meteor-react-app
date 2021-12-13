
import React from "react";

import GenderInput from "./GenderInput";

export default {
  title: 'Example/GenderInput',
  component: GenderInput,
};

const Template = (args) => <GenderInput {...args} />;


export const Default = Template.bind({});
Default.args = {
    label:'Geslacht'
}

export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
