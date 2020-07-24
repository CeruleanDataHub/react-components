import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
  padding: 1rem;
  width: 100%;
`;

export const Input = ({ type, placeholder, onChange }) => (
  <InputWrapper type={type} onChange={onChange} placeholder={placeholder} />
);

Input.propTypes = {
  /** Input type */
  type: PropTypes.oneOf(["text", "search"]),
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** onChangehandler function */
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  onChange: () => {}
};
