import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
  padding: 0.6rem;
  width: 100%;
  box-sizing: border-box;
`;

export const Input = ({ type, placeholder, onChange, as }) => (
  <InputWrapper
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    as={as}
  />
);

Input.propTypes = {
  /** Input type */
  type: PropTypes.oneOf(["text", "search"]),
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** onChange handler function */
  onChange: PropTypes.func,
  /** Extend styles, property is from styled components */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired })
  ])
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  onChange: () => {},
  as: null
};
