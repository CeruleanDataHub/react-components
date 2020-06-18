import { action } from "@storybook/addon-actions";
import React from "react";

import { Checkbox } from "./Checkbox";
import { CheckboxWrapper } from "./CheckboxWrapper";

export default {
  title: "Checkbox",
  component: Checkbox,
};

const checkboxes = [...Array(10).keys()].map((index) => index + 1);

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

export const MultipleCheckBoxes = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    {checkboxes.map((index) => (
      <CheckboxWrapper
        onToggle={action(`checkbox-${index}-change`)}
        label={`Checkbox ${index}`}
      />
    ))}
  </div>
);
