import React, { useState } from "react";

import { Checkbox } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

const CheckboxWrapper = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      label="Checkbox toggle"
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
};

export const CheckboxDefault = () => (
  <Checkbox checked={false} label="Checkbox not checked" onChange={() => {}} />
);

export const CheckboxChecked = () => (
  <Checkbox checked label="Checkbox checked" onChange={() => {}} />
);

export const CheckboxToggle = () => <CheckboxWrapper />;
