import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { Checkbox } from "../Checkbox/Checkbox";
import { Dropdown } from "../Dropdown/Dropdown";

const DropdownItem = styled.li`
  padding-top: 1em;
  padding-left: 0.5em;
`;

const DropdownText = styled.span`
  color: ${({ theme }) => theme.green};
  font-size: 1.25em;
  font-weight: bold;
`;

const generateList = (items, handleSelection) =>
  items.map(({ value, label, checked }) => (
    <DropdownItem key={label}>
      <Checkbox
        checked={checked}
        value={value}
        label={label}
        onChange={handleSelection}
      />
    </DropdownItem>
  ));

const setSelectedItemAsChecked = value => items =>
  items.map(item => ({
    ...item,
    checked: item.value === value ? !item.checked : item.checked
  }));

const Label = ({ label, items, isOpen }) => (
  <>
    {label}
    {isOpen && <DropdownText>{`${items.length} selected`}</DropdownText>}
  </>
);

Label.propTypes = {
  /** Define dropdown visibility state */
  isOpen: Dropdown.propTypes.isOpen,
  /** Text to show in dropdown */
  label: Dropdown.propTypes.label,
  /** Handler function */
  /** Items to be shown in dropdown list */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  )
};

Label.defaultProps = {
  isOpen: false,
  label: "",
  items: []
};

export const CheckboxDropdown = ({ items, isOpen, label, onClick }) => {
  const [selectedItems, setSelectedItems] = useState(
    items.map(item => ({ ...item, checked: false }))
  );

  const checkedItems = selectedItems.filter(({ checked }) => checked);

  const handleSelection = value => {
    setSelectedItems(setSelectedItemAsChecked(value));
  };

  const dropdownLabel = (
    <Label label={label} items={checkedItems} isOpen={isOpen} />
  );

  return (
    <Dropdown label={dropdownLabel} isOpen={isOpen} onClick={onClick}>
      {generateList(selectedItems, handleSelection)}
    </Dropdown>
  );
};

CheckboxDropdown.propTypes = {
  /** Define dropdown visibility state */
  isOpen: Dropdown.propTypes.isOpen,
  /** Text to show in dropdown */
  label: Dropdown.propTypes.label,
  /** Handler function */
  onClick: Dropdown.propTypes.onClick,
  /** Items to be shown in dropdown list */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  )
};

CheckboxDropdown.defaultProps = {
  isOpen: Dropdown.defaultProps.isOpen,
  label: Dropdown.defaultProps.label,
  onClick: Dropdown.defaultProps.onClick,
  items: []
};
