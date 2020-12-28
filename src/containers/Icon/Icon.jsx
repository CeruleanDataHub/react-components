import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const IconStyled = styled.span`
  text-align: center;
`;

const CustomIcon = styled.img`
  height: 2em;
`;

/**
 * Icon library is based on https://lineicons.com/icons/
 */
export const Icon = ({ className, name, customIcon, as }) =>
  customIcon ? (
    <CustomIcon src={customIcon} />
  ) : (
    <IconStyled className={[className, "lni", `lni-${name}`]} as={as} />
  );

export const names = [
  "",
  "home",
  "user",
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
  "enter",
  "control-panel",
  "arrow-left-circle",
  "search",
  "more",
  "more-alt",
  "plus",
  "trash",
  "lock",
  "plane",
  "caravan",
  "chef-hat",
  "network",
  "vector"
];

export const iconNameProps = PropTypes.oneOf(names);

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.oneOf(names),
  /** Custom icon if icon library does not have a suitable one */
  customIcon: PropTypes.shape({}),
  /** Extend styles, property is from styled components */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired })
  ]),
  className: PropTypes.string,
};

Icon.defaultProps = {
  name: "",
  customIcon: null,
  as: null,
  className: "",
};
