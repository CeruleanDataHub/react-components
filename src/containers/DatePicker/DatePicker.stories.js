import React from "react";

import { DatePicker } from "./DatePicker";

export default {
  title: "DatePicker",
  component: DatePicker
};

export const DatePickerStory = () => (
  <div style={{ minHeight: 400 }}>
    <DatePicker />
  </div>
);
