import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

import moment from "moment";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { DateRangePicker as DateRangePickerWrapper } from "react-dates";
import momentPropTypes from "react-moment-proptypes";

export const DateRangePicker = ({
  name,
  startDate,
  endDate,
  onDatesChange
}) => {
  const [startDateValue, setStartDateValue] = useState(startDate);
  const [endDateValue, setEndDateValue] = useState(endDate);
  const [focusedInputValue, setFocusedInputValue] = useState(null);

  return (
    <DateRangePickerWrapper
      onDatesChange={dates => {
        setStartDateValue(dates.startDate);
        setEndDateValue(dates.endDate);
        onDatesChange({ startDate: dates.startDate, endDate: dates.endDate });
      }}
      startDate={startDateValue}
      startDateId={`${name}-start`}
      endDate={endDateValue}
      endDateId={`${name}-end`}
      focusedInput={focusedInputValue}
      onFocusChange={focusedInput => setFocusedInputValue(focusedInput)}
      hideKeyboardShortcutsPanel
    />
  );
};

DateRangePicker.propTypes = {
  /** Name for the date picker, used as the component ID */
  name: PropTypes.string.isRequired,
  /** Starting date to be shown on date picker. Defaults to current day. */
  startDate: momentPropTypes.momentObj,
  /** End date to be shown on date picker. Defaults to current day. */
  endDate: momentPropTypes.momentObj,
  /** Event listened for date change */
  onDatesChange: PropTypes.func.isRequired
};

const currentMoment = moment();

DateRangePicker.defaultProps = {
  startDate: currentMoment,
  endDate: currentMoment
};
