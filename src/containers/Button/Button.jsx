import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";

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

const StyledIcon = styled(Icon)`
  margin: 0 2px;
`

export const Button = forwardRef(
  ({ children, className, onClick, color, type, as, icon }, ref) => (
    <StyledButton data-button-test className={className} color={color} onClick={onClick} type={type} as={as} ref={ref}>
      { icon && <Icon name={icon} as={StyledIcon} data-button-icon-test /> }

      {children}
    </StyledButton>
  )
);

Button.propTypes = {
  /** Children of the button */
  children: PropTypes.node,
  className: PropTypes.string,
  /** Handler function */
  onClick: PropTypes.func.isRequired,
  /** Color of the button */
  color: PropTypes.string,
  /** Button type */
  type: PropTypes.string,
  /** Extend styles, property is from styled components */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired })
  ]),
  icon: PropTypes.string,
};

Button.defaultProps = {
  children: "",
  className: "",
  color: "",
  type: "button",
  as: null,
  icon: "",
};
