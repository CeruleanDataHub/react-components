import { action } from "@storybook/addon-actions";
import React from "react";

import { Fullscreen } from "./Fullscreen";

export default {
  title: "Fullscreen",
  component: Fullscreen
};

export const ChartStory = () => (
  <Fullscreen onClick={action("button clicked")} />
);
