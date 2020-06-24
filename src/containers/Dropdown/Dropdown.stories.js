import { action } from "@storybook/addon-actions";
import React from "react";

import { Dropdown } from "./Dropdown";
import { DropdownWrapper } from "./DropdownWrapper";

export default {
  title: "Dropdown",
  component: Dropdown
};

const items = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" },
  { value: "3", label: "Item 3" },
  { value: "4", label: "Item 4" },
  { value: "5", label: "Item 5" }
];

export const DropdownStory = () => <Dropdown label="Label" />;

export const DropdownOpenStory = () => (
  <div style={{ minHeight: 250 }}>
    <Dropdown label="Label" isOpen items={items} />
  </div>
);

export const DropdownToggleStory = () => (
  <div style={{ minHeight: 250 }}>
    <DropdownWrapper
      label="Label"
      items={items}
      onClick={action("dropdown-open")}
    />
  </div>
);
