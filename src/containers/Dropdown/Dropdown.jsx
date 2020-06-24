import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { CheckboxWrapper } from "../Checkbox/CheckboxWrapper";
import { Icon } from "../Icon/Icon";

const DropdownContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 40px;
  border: 1px solid #0f181c;
  background: #0f181c;
  border-radius: 4px;
  position: relative;
  padding: 1.25em;
  cursor: pointer;
`;

const ItemList = styled.ul`
  width: calc(100% + 2px);
  padding: 0;
  background: #0f181c;
  position: absolute;
  top: 24px;
  left: -1px;
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const Dropdown = ({ isOpen, label, onClick, items, amountSelected }) => {
  const generateList = listItems =>
    listItems.map(item => (
      <DropdownItem>
        <CheckboxWrapper label={item} />
      </DropdownItem>
    ));

  return (
    <DropdownContainer onClick={onClick}>
      <DropdownText>{label}</DropdownText>
      {isOpen && (
        <DropdownText color="green">{`${amountSelected} selected`}</DropdownText>
      )}
      <Icon name={isOpen ? "chevron-up" : "chevron-down"} as={DropdownText} />
      {isOpen && <ItemList>{generateList(items)}</ItemList>}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.string),
  amountSelected: PropTypes.number
};

Dropdown.defaultProps = {
  isOpen: false,
  label: "",
  onClick: () => {},
  items: [],
  amountSelected: 0
};
