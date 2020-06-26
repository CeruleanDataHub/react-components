import "react-datepicker/dist/react-datepicker.css";

import PropTypes from "prop-types";
import React, { useState } from "react";
import DatePickerWrapper from "react-datepicker";

import { DatePickerContainer } from "./DatePickerContainer";

export const DatePicker = ({ dateFormat }) => {
  const [startDate, setStartDate] = useState(new Date());
  const ref = React.createRef();

  return (
    <DatePickerWrapper
      selected={startDate}
      onChange={date => setStartDate(date)}
      dateFormat={dateFormat}
      customInput={<DatePickerContainer />}
      ref={ref}
    />
  );
};

DatePicker.propTypes = {
  /** How the date should be displayed */
  dateFormat: PropTypes.string
};

DatePicker.defaultProps = {
  dateFormat: "dd.MM.yyyy"
};
