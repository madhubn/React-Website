import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

interface ButtonProps {
  text: string;
}

export const First = ({ text, ...props }: ButtonProps) => {
  return <div>Hello world {text}</div>;
};

export default {
  title: "Components/First",
  component: First,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof First>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof First> = (args) => <First {...args}/>;
export const SomeNameYouLike = Template.bind({});
SomeNameYouLike.args = {
  text:"gghhjjhjh"
};
