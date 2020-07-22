import { withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";

import { Select } from "./Select";

export default {
  title: "Select",
  component: Select,
  decorators: [withKnobs]
};

export const SelectStory = () => {
  const items = [
    { id: 1, value: "Label 1" },
    { id: 2, value: "Label 2" },
    {
      id: 3,
      value:
        "Extra long line of text which will overflow the select container. Should this use ellipsis or let it flow like this"
    }
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState({});

  const onItemSelect = item => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div style={{ minHeight: 250, width: 300 }}>
      <Select
        label={
          Object.keys(selectedItem).length ? selectedItem.value : "Select value"
        }
        items={items}
        isOpen={isOpen}
        onOpen={() => setIsOpen(!isOpen)}
        onChange={item => onItemSelect(item)}
        selectedOption={selectedItem}
      />
    </div>
  );
};
