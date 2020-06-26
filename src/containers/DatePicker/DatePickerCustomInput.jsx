import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";

const Container = styled.button`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  border: 1px solid #0f181c;
  background: #0f181c;
  padding: 1.25em;
  color: #999;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;

const CalendarIcon = styled.span`
  font-size: 1.5em;
  margin-right: 1em;
`;

export const DatePickerCustomInput = forwardRef(({ value, onClick }, ref) => (
  <Container onClick={onClick} ref={ref}>
    <Icon name="calendar" as={CalendarIcon} />
    {value}
  </Container>
));

DatePickerCustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

DatePickerCustomInput.defaultProps = {
  value: "",
  onClick: () => null
};
