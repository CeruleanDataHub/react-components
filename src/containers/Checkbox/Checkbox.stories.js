import React from "react";

import { Checkbox } from "./Checkbox";

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
