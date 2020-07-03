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
  width: 1em;
  height: 1em;
  border: 1px solid ${({ checked, theme }) => (checked ? theme.green : "#999")};
  background: ${({ checked, theme }) =>
    checked ? theme.green : "transparent"};
  text-align: center;
  border-radius: 4px;
  line-height: 1em;
`;

const CheckmarkIcon = styled.span`
  color: ${({ theme }) => theme.checkmark};
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

export const Checkbox = ({ checked, value, label, onChange }) => (
  <CheckboxContainer>
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
  /** Defines if the checkbox is checked or not */
  checked: PropTypes.bool,
  /** Label text */
  label: PropTypes.string,
  /** Value of the checkbox item */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Handler function */
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  label: "",
  value: undefined,
  onChange: () => null
};
