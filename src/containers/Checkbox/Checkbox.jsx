import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid ${props => (props.checked ? "#90ee7e" : "#999")};
  background: ${props => (props.checked ? "#90ee7e" : "transparent")};
  text-align: center;
  border-radius: 4px;
`;

const CheckmarkIcon = styled.span`
  color: black;
  font-size: 0.75em;
  font-weight: bold;
`;

const CheckboxLabel = styled.span`
  color: #999;
  margin-left: 1.5em;
`;

const CheckboxContainer = styled.label`
  display: inline-flex;
  cursor: pointer;
  margin: 0.25em 0;

  &:hover {
    ${StyledCheckbox} {
      border-color: #333;
    }

    ${CheckboxLabel} {
      color: #666;
    }
  }
`;

export const Checkbox = ({ className, checked, value, label, onChange }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox
      checked={checked}
      value={value}
      onChange={() => onChange(value)}
    />
    <StyledCheckbox checked={checked}>
      {checked && <Icon name="checkmark" as={CheckmarkIcon} />}
    </StyledCheckbox>
    <CheckboxLabel>{label}</CheckboxLabel>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  className: "",
  checked: false,
  label: "",
  value: undefined,
  onChange: () => {}
};
