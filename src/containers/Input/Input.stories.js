import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import styled from "styled-components";

import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  decorators: [withKnobs]
};

const StyledInput = styled.input`
  background: papayawhip;
  color: limegreen;
`;

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

export const InputStyledStory = () => (
  <Input
    type="text"
    placeholder="Styled input"
    onChange={action("on change")}
    as={StyledInput}
  />
);
