import { withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";

import { Typography } from "../Typography/Typography";
import { Select } from "./Select";

export default {
  title: "Select",
  component: Select,
  decorators: [withKnobs]
};

export const SelectStory = () => {
  const items = [
    { id: "1", value: "Label 1" },
    { id: "2", value: "Label 2" },
    {
      id: "3",
      value: "Extra long line of text which will overflow the select container."
    }
  ];

  const [selectedItem, setSelectedItem] = useState(items[0].value);

  return (
    <div style={{ minHeight: 250, width: 300 }}>
      <Typography fontFamily="openSans">
        <Select
          items={items}
          onChange={event => setSelectedItem(event.target.value)}
          selectedOption={selectedItem}
        />
      </Typography>
    </div>
  );
};

export const SelectWithNameStory = () => {
  const items = [
    { id: "1", value: "Label 1", name: "Name 1" },
    { id: "2", value: "Label 2", name: "Name 2" },
    {
      id: "3",
      value:
        "Extra long line of text which will overflow the select container.",
      name:
        "Name 3. Extra long line of text which will overflow the select container."
    }
  ];

  const [selectedItem, setSelectedItem] = useState(items[0].value);

  return (
    <div style={{ minHeight: 250, width: 300 }}>
      <Typography fontFamily="openSans">
        <Select
          items={items}
          onChange={event => setSelectedItem(event.target.value)}
          selectedOption={selectedItem}
        />
      </Typography>
    </div>
  );
};

export const SelectStoryWithOptionGroups = () => {
  const items = [
    {
      group: "Group 1",
      children: [
        { id: "1", value: "Label 1" },
        { id: "2", value: "Label 2" }
      ]
    },
    {
      group: "Group 2",
      children: [
        {
          id: "3",
          value:
            "Extra long line of text which will overflow the select container."
        }
      ]
    }
  ];

  const [selectedItem, setSelectedItem] = useState(items[0].value);

  return (
    <div style={{ minHeight: 250, width: 300 }}>
      <Typography fontFamily="openSans">
        <Select
          items={items}
          onChange={event => setSelectedItem(event.target.value)}
          selectedOption={selectedItem}
        />
      </Typography>
    </div>
  );
};
