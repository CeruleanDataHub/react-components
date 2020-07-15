import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";

import { CheckboxDropdown } from "./CheckboxDropdown";

export default {
  title: "CheckboxDropdown",
  component: CheckboxDropdown,
  decorators: [withKnobs]
};

const items = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" },
  { value: "3", label: "Item 3" },
  { value: "4", label: "Item 4" },
  { value: "5", label: "Item 5" }
];

export const CheckboxDropdownStory = () => (
  <div style={{ width: 300 }}>
    <CheckboxDropdown label="Label" />
  </div>
);

export const CheckboxDropdownOpenStory = () => (
  <div style={{ minHeight: 250, width: 300 }}>
    <CheckboxDropdown label="Label" isOpen items={items} />
  </div>
);

export const CheckboxDropdownToggleStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ minHeight: 250, width: 300 }}>
      <CheckboxDropdown
        label="Label"
        items={items}
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
          action("dropdown-open");
        }}
      />
    </div>
  );
};
