import "react-datepicker/dist/react-datepicker.css";

import enGb from "date-fns/locale/en-GB";
import PropTypes from "prop-types";
import React, { useState } from "react";
import DatePickerWrapper, { registerLocale } from "react-datepicker";
import styled from "styled-components";

import { DatePickerCustomInput } from "./DatePickerCustomInput";
import { DatePickerStyles } from "./datePickerStyles";

registerLocale("en-gb", enGb);

const Container = styled.div`
  ${DatePickerStyles}
`;

export const DatePicker = ({ startDate, dateFormat, monthsShown }) => {
  const [dateValue, setDateValue] = useState(startDate);
  const ref = React.createRef();

  return (
    <Container>
      <DatePickerWrapper
        selected={dateValue}
        onChange={date => setDateValue(date)}
        dateFormat={dateFormat}
        formatWeekDay={day => day.substring(0, 1)}
        customInput={<DatePickerCustomInput ref={ref} />}
        locale="en-gb"
        monthsShown={monthsShown}
      />
    </Container>
  );
};

DatePicker.propTypes = {
  /** Starting date to be shown on date picker. Defaults to current day. */
  startDate: PropTypes.instanceOf(Date),
  /** How the date should be displayed */
  dateFormat: PropTypes.string,
  /** How many months are shown */
  monthsShown: PropTypes.number
};

DatePicker.defaultProps = {
  startDate: new Date(),
  dateFormat: "dd.MM.yyyy",
  monthsShown: 1
};
