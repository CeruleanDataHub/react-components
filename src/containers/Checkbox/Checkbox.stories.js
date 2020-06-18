import { action } from "@storybook/addon-actions";
import React from "react";

import { Checkbox } from "./Checkbox";
import { CheckboxWrapper } from "./CheckboxWrapper";

export default {
  title: "Checkbox",
  component: Checkbox,
};

export const CheckboxDefault = () => (
  <Checkbox checked={false} label="Checkbox not checked" onChange={() => {}} />
);

export const CheckboxChecked = () => (
  <Checkbox checked label="Checkbox checked" onChange={() => {}} />
);

export const CheckboxToggle = () => (
  <CheckboxWrapper
    onToggle={action("checkbox-change")}
    label="Checkbox toggle"
  />
);
