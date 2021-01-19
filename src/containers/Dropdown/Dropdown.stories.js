import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";

import { Dropdown } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [withKnobs]
};

export const DropdownStory = () => (
  <div style={{ width: 300 }}>
    <Dropdown onClick={() => {}} label="Label">
      Dropdown item
    </Dropdown>
  </div>
);

export const DropdownOpenStory = () => (
  <div style={{ minHeight: 250, width: 300 }}>
    <Dropdown onClick={() => {}} label="Label" isOpen>
      Dropdown item
    </Dropdown>
  </div>
);
export const DropdownLongLabelStory = () => (
  <div style={{ minHeight: 250, width: 300 }}>
    <Dropdown
      onClick={() => {}}
      label="Extra long label; Extra long label; Extra long label; Extra long label"
    >
      Dropdown item
    </Dropdown>
  </div>
);

export const DropdownOpenWithCustomChildrenStory = () => (
  <div style={{ minHeight: 250, width: 300 }}>
    <Dropdown onClick={() => {}} label="Label" isOpen>
      <ul>
        <li>first</li>
        <li>second</li>
        <li>third</li>
        <li>fourth</li>
      </ul>
    </Dropdown>
  </div>
);

export const DropdownToggleStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ minHeight: 250, width: 300 }}>
      <Dropdown
        label="Label"
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
          action("dropdown-open");
        }}
      >
        Dropdown item
      </Dropdown>
    </div>
  );
};
