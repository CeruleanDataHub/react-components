import React from "react";

import { Icon, names } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
};

export const IconStory = () =>
  names.map((name) => (
    <span style={{ display: "inline-block", margin: 20 }} key={name}>
      <Icon name={name} />
    </span>
  ));
