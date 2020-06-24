import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  color: ${({ color }) => color};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1.5em;
  border: 1px solid ${({ color }) => color};
  border-radius: 4px;
  cursor: pointer;
`;

export const Button = ({ text, onClick, color }) => (
  <StyledButton color={color} onClick={onClick}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  /** Text on the button */
  text: PropTypes.string,
  /** Handler function */
  onClick: PropTypes.func,
  /** Color of the button */
  color: PropTypes.string
};

Button.defaultProps = {
  text: "",
  onClick: () => null,
  color: ""
};
