import { action } from "@storybook/addon-actions";
import React from "react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button
};

const colors = [
  "crimson",
  "tomato",
  "khaki",
  "mediumseagreen",
  "darkcyan",
  "steelblue",
  "magenta",
  "palevioletred"
];

export const ButtonStory = () => (
  <Button text="Button" color="blue" onClick={action("button clicked")} />
);

export const ButtonColorsStory = () =>
  colors.map(color => (
    <span style={{ margin: "0.5em" }} key={color}>
      <Button text="Button" color={color} onClick={action("button-clicked")} />
    </span>
  ));
