import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import moment from "moment";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { SingleDatePicker as DatePicker } from "react-dates";
import momentPropTypes from "react-moment-proptypes";
import styled from "styled-components";

import { Icon } from "../../Icon/Icon";
import { Typography } from "../../Typography/Typography";
import { SingleDatePickerStyles } from "../datePickerStyles";

const Container = styled.div`
  ${SingleDatePickerStyles}
`;

const CalendarIcon = styled.span`
  font-size: 1.25em;
`;

export const SingleDatePicker = ({
  name,
  startDate,
  dateFormat,
  monthsShown
}) => {
  const [dateValue, setDateValue] = useState(startDate);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Typography fontFamily="openSans">
        <DatePicker
          date={dateValue}
          onDateChange={date => setDateValue(date)}
          focused={isFocused}
          onFocusChange={({ focused }) => setIsFocused(focused)}
          numberOfMonths={monthsShown}
          firstDayOfWeek={1}
          displayFormat={dateFormat}
          customInputIcon={<Icon name="calendar" as={CalendarIcon} />}
          id={`${name}-single-datepicker`}
          hideKeyboardShortcutsPanel
        />
      </Typography>
    </Container>
  );
};

SingleDatePicker.propTypes = {
  /** Unique id for datepicker */
  name: PropTypes.string.isRequired,
  /** Starting date to be shown on date picker. Defaults to current day. */
  startDate: momentPropTypes.momentObj,
  /** How the date should be displayed. */
  dateFormat: PropTypes.string,
  /** How many months are shown. */
  monthsShown: PropTypes.number
};

SingleDatePicker.defaultProps = {
  startDate: moment(),
  dateFormat: "DD.MM.yyyy",
  monthsShown: 1
};
