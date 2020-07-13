import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: inherit;
  background: transparent;
  color: ${({ color }) => color};
  font-size: 1em;
  padding: 0.25em 1.5em;
  border: 1px solid ${({ color }) => color};
  border-radius: 4px;
  cursor: pointer;
`;

export const Button = ({ children, onClick, color, type, as }) => (
  <StyledButton color={color} onClick={onClick} type={type} as={as}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  /** Children of the button */
  children: PropTypes.node,
  /** Handler function */
  onClick: PropTypes.func,
  /** Color of the button */
  color: PropTypes.string,
  /** Button type */
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  /** Extend styles, property is from styled components */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired })
  ])
};

Button.defaultProps = {
  children: "",
  onClick: () => null,
  color: "",
  type: "button",
  as: null
};
