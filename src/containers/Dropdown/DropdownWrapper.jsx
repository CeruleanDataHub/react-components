import PropTypes from "prop-types";
import React, { useState } from "react";

import { Dropdown } from "./Dropdown";

export const DropdownWrapper = ({ onClick, label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onDropdownClick = () => {
    setIsOpen(!isOpen);
    onClick(isOpen);
  };

  return (
    <Dropdown
      label={label}
      onClick={onDropdownClick}
      isOpen={isOpen}
      items={items}
    />
  );
};

DropdownWrapper.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  )
};

DropdownWrapper.defaultProps = {
  onClick: () => {},
  label: "",
  items: []
};
