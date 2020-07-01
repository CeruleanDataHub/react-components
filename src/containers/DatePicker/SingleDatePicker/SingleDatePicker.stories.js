import React from "react";

import { SingleDatePicker } from "./SingleDatePicker";

export default {
  title: "SingleDatePicker",
  component: SingleDatePicker
};

export const SingleDatePickerStory = () => (
  <div style={{ minHeight: 400 }}>
    <SingleDatePicker name="default" />
  </div>
);

export const SingleDatePickerWithCustomDateFormatStory = () => (
  <div style={{ minHeight: 400 }}>
    <SingleDatePicker name="dateformat" dateFormat="MM/DD/yyyy" />
  </div>
);

export const SingleDatePickerTwoMonthsShownStory = () => (
  <div style={{ minHeight: 400 }}>
    <SingleDatePicker name="months" monthsShown={2} />
  </div>
);
