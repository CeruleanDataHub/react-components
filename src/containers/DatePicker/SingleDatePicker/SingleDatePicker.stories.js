import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import moment from "moment";
import React from "react";

import { SingleDatePicker } from "./SingleDatePicker";

export default {
  title: "SingleDatePicker",
  component: SingleDatePicker,
  decorators: [withKnobs]
};

export const SingleDatePickerStory = () => (
  <div style={{ minHeight: 400 }}>
    <SingleDatePicker name="default" onDateChange={action("date changed")} />
  </div>
);

export const SingleDatePickerWithCustomDateFormatStory = () => (
  <div style={{ minHeight: 400 }}>
    <SingleDatePicker
      name="dateformat"
      dateFormat="MM/DD/yyyy"
      onDateChange={action("date changed")}
    />
  </div>
);

export const SingleDatePickerTwoMonthsShownStory = () => (
  <div style={{ minHeight: 400 }}>
    <SingleDatePicker
      name="months"
      monthsShown={2}
      onDateChange={action("date changed")}
    />
  </div>
);

export const SingleDatePickerWithCustomStartDateStory = () => (
  <div style={{ minHeight: 400 }}>
    <SingleDatePicker
      name="startDate"
      startDate={moment("2016-06-01")}
      onDateChange={action("date changed")}
    />
  </div>
);
