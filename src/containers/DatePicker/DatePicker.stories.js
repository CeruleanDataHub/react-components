import React from "react";

import { DatePicker } from "./DatePicker";

export default {
  title: "DatePicker",
  component: DatePicker
};

export const DatePickerStory = () => (
  <div style={{ minHeight: 400, width: 300 }}>
    <DatePicker />
  </div>
);

export const DatePickerCustomDateFormatStory = () => (
  <div style={{ minHeight: 400, width: 300 }}>
    <DatePicker dateFormat="MM/dd/yyyy" />
  </div>
);

export const DatePickerTwoMonthsShownStory = () => (
  <div style={{ minHeight: 400, width: 300 }}>
    <DatePicker monthsShown={2} />
  </div>
);
