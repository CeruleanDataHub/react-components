import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

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
  border: 1px solid ${(props) => (props.checked ? "black" : "grey")};
  background: ${(props) => (props.checked ? "black" : "white")};
`;

const CheckboxLabel = styled.span`
  color: #333;
  margin-left: 0.5em;
`;

export const Checkbox = ({ className, checked, label, onChange }) => {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  className: "",
  checked: false,
  label: "",
  onChange: () => {},
};
