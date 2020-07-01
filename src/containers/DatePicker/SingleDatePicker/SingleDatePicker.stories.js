import React from "react";

import { SingleDatePicker } from "./SingleDatePicker";

export default {
  title: "SingleDatePicker",
  component: SingleDatePicker
};

export const SingleDatePickerStory = () => (
  <div style={{ minHeight: 400 }}>
    <SingleDatePicker />
  </div>
);

export const SingleDatePickerWithCustomDateFormatStory = () => (
  <div style={{ minHeight: 400 }}>
    <SingleDatePicker dateFormat="MM/DD/yyyy" />
  </div>
);

export const SingleDatePickerTwoMonthsShownStory = () => (
  <div style={{ minHeight: 400 }}>
    <SingleDatePicker monthsShown={2} />
  </div>
);
