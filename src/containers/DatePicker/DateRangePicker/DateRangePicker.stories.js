import { action } from "@storybook/addon-actions";
import moment from "moment";
import React from "react";

import { DateRangePicker } from "./DateRangePicker";

export default {
  title: "DateRangePicker",
  component: DateRangePicker
};

export const DateRangePickerStory = () => (
  <div style={{ minHeight: 400 }}>
    <DateRangePicker name="story" onDatesChange={action("date changed")} />
  </div>
);

export const DateRangePickerCustomRangeStory = () => (
  <div style={{ minHeight: 400 }}>
    <DateRangePicker
      name="story-custom-range"
      onDatesChange={action("date changed")}
      startDate={moment(new Date(2020, 6, 1))}
      endDate={moment(new Date(2020, 6, 12))}
    />
  </div>
);

export const DateRangePickerCustomFormatStory = () => (
  <div style={{ minHeight: 400 }}>
    <DateRangePicker
      name="story"
      onDatesChange={action("date changed")}
      dateFormat="MM/DD/yyyy"
    />
  </div>
);
