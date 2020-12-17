import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs]
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
  <Button color="blue" onClick={action("button clicked")}>
    Button
  </Button>
);

export const ButtonColorsStory = () =>
  colors.map(color => (
    <span style={{ margin: "0.5em" }} key={color}>
      <Button color={color} onClick={action("button-clicked")}>
        Button
      </Button>
    </span>
  ));

export const CustomStyledButtonStory = () => {
  const StyledButton = styled(Button)`
    color: green;
    background: tomato;
  `
  return <StyledButton>Button</StyledButton>
}
