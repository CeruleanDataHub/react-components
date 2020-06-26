import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { Checkbox } from "../Checkbox/Checkbox";
import { Icon } from "../Icon/Icon";

const Container = styled.div`
  width: 300px;
  position: relative;
`;

const DropdownContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid #0f181c;
  background: #0f181c;
  border-radius: 4px;
  padding: 1.25em;
  cursor: pointer;
`;

const ItemList = styled.ul`
  width: 100%;
  padding: 0;
  background: #0f181c;
  position: absolute;
  top: 22px;
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding-top: 1em;
  padding-left: 0.5em;
`;

const DropdownText = styled.span`
  color: ${({ color }) => color || "#999"};
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

export const Dropdown = ({ isOpen, label, onClick, items }) => {
  const [selectedItems, setSelectedItems] = useState(
    items.map(item => ({ ...item, checked: false }))
  );

  const checkedItems = selectedItems.filter(({ checked }) => checked);

  const handleSelection = value => {
    setSelectedItems(setSelectedItemAsChecked(value));
  };

  return (
    <Container>
      <DropdownContainer onClick={onClick}>
        <DropdownText>{label}</DropdownText>
        {isOpen && (
          <DropdownText color="#90ee7e">{`${checkedItems.length} selected`}</DropdownText>
        )}
        <Icon name={isOpen ? "chevron-up" : "chevron-down"} as={DropdownText} />
      </DropdownContainer>
      {isOpen && (
        <ItemList>{generateList(selectedItems, handleSelection)}</ItemList>
      )}
    </Container>
  );
};

Dropdown.propTypes = {
  /** Define dropdown visibility state */
  isOpen: PropTypes.bool,
  /** Text to show in dropdown */
  label: PropTypes.string,
  /** Handler function */
  onClick: PropTypes.func,
  /** Items to be shown in dropdown list */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  )
};

Dropdown.defaultProps = {
  isOpen: false,
  label: "",
  onClick: () => {},
  items: []
};
