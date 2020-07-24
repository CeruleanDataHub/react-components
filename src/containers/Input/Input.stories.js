import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import React from "react";

import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  decorators: [withKnobs]
};

export const InputStory = () => (
  <Input placeholder="Write your thing here" onChange={action("on change")} />
);

export const InputSearchStory = () => (
  <Input
    type="search"
    placeholder="Write your thing here"
    onChange={action("on change")}
  />
);
