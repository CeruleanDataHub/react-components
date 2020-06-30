import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import moment from "moment";
import React, { useState } from "react";
import { SingleDatePicker as DatePicker } from "react-dates";

import { Typography } from "../Typography/Typography";

export const SingleDatePicker = () => {
  const [dateValue, setDateValue] = useState(moment());
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Typography fontFamily="openSans">
      <DatePicker
        date={dateValue}
        onDateChange={date => setDateValue(date)}
        focused={isFocused}
        onFocusChange={({ focused }) => setIsFocused(focused)}
        numberOfMonths={1}
        firstDayOfWeek={1}
        displayFormat="DD.MM.yyyy"
        id="single-date-picker"
      />
    </Typography>
  );
};
