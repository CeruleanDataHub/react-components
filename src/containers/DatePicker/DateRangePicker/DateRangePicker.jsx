import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

import moment from "moment";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { DateRangePicker as DateRangePickerWrapper } from "react-dates";
import momentPropTypes from "react-moment-proptypes";
import styled from "styled-components";

import { Icon } from "../../Icon/Icon";
import { Typography } from "../../Typography/Typography";
import { DateRangePickerStyles } from "../datepickerStyles";

const Container = styled.div`
  ${DateRangePickerStyles};
`;

const CalendarIcon = styled.span`
  font-size: 1.25em;
`;

export const DateRangePicker = ({
  name,
  startDate,
  endDate,
  onDatesChange,
  dateFormat
}) => {
  const [startDateValue, setStartDateValue] = useState(startDate);
  const [endDateValue, setEndDateValue] = useState(endDate);
  const [focusedInputValue, setFocusedInputValue] = useState(null);

  return (
    <Container>
      <Typography fontFamily="openSans">
        <DateRangePickerWrapper
          onDatesChange={dates => {
            setStartDateValue(dates.startDate);
            setEndDateValue(dates.endDate);
            onDatesChange({
              startDate: dates.startDate,
              endDate: dates.endDate
            });
          }}
          startDate={startDateValue}
          startDateId={`${name}-start`}
          endDate={endDateValue}
          endDateId={`${name}-end`}
          focusedInput={focusedInputValue}
          onFocusChange={focusedInput => setFocusedInputValue(focusedInput)}
          hideKeyboardShortcutsPanel
          customInputIcon={<Icon name="calendar" as={CalendarIcon} />}
          displayFormat={dateFormat}
        />
      </Typography>
    </Container>
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
  onDatesChange: PropTypes.func.isRequired,
  /** How the date should be displayed */
  dateFormat: PropTypes.string
};

const currentMoment = moment();

DateRangePicker.defaultProps = {
  startDate: currentMoment,
  endDate: currentMoment,
  dateFormat: "DD.MM.yyyy"
};
