import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Dropdown } from "../Dropdown/Dropdown";

const SelectOption = styled.div`
  padding: 0.8rem 1.25rem;
  cursor: pointer;
  border-bottom: 1px solid #dedede;
  background: ${({ selected }) => (selected ? "#dedede" : "transparent")};

  &:hover {
    background: ${({ selected }) => (selected ? "#d4d4d4" : "#f5f5f5")};
  }
`;

export const Select = ({
  label,
  selectedOption,
  isOpen,
  onOpen,
  onChange,
  items
}) => (
  <Dropdown label={label} isOpen={isOpen} onClick={onOpen}>
    {items.map(item => (
      <SelectOption
        className="select"
        selected={item.id === selectedOption.id}
        onClick={() => onChange(item)}
        key={item.id}
      >
        {item.value}
      </SelectOption>
    ))}
  </Dropdown>
);

Select.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  selectedOption: PropTypes.object,
  /** Define select visibility state */
  isOpen: PropTypes.bool,
  /** Select options */
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
  /** onOpen handler function */
  onOpen: PropTypes.func,
  /** onChange handler function */
  onChange: PropTypes.func
};

Select.defaultProps = {
  label: "",
  selectedOption: {},
  isOpen: false,
  items: [],
  onOpen: () => {},
  onChange: () => {}
};
