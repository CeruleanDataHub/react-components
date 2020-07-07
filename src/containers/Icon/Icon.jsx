import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const IconStyled = styled.span`
  text-align: center;
`;

export const Icon = ({ name, as }) => (
  <IconStyled className={["lni", `lni-${name}`]} as={as} />
);

export const names = [
  "home",
  "users",
  "rocket",
  "briefcase",
  "cog",
  "eye",
  "checkmark",
  "minus",
  "chevron-down",
  "chevron-up",
  "calendar",
  "menu",
  "close",
  "dashboard",
  "full-screen",
  "layers",
  "exit",
  "enter"
];
export const iconNameProps = PropTypes.oneOf(names);

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.oneOf(names),
  /** Extend styles, property is from styled components */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired })
  ])
};

Icon.defaultProps = {
  name: "",
  as: null
};
