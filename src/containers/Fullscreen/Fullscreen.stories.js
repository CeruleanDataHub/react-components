import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import React from "react";

import { Fullscreen } from "./Fullscreen";

export default {
  title: "Fullscreen",
  component: Fullscreen,
  decorators: [withKnobs]
};

export const ChartStory = () => (
  <Fullscreen onClick={action("button clicked")} />
);
