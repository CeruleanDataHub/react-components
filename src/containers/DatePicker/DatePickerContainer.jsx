import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";

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

export const DatePickerContainer = forwardRef(({ value, onClick }, ref) => (
  <Container onClick={onClick} ref={ref}>
    {value}
  </Container>
));

DatePickerContainer.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

DatePickerContainer.defaultProps = {
  value: "",
  onClick: () => null
};
