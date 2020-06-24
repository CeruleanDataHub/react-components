import React from "react";

import { Dropdown } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown
};

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

export const DropdownStory = () => <Dropdown label="Label" />;
export const DropdownOpenStory = () => (
  <Dropdown label="Label" isOpen items={items} />
);
