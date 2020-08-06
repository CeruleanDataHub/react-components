import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";

const SelectContainer = styled.select`
  font-family: inherit;
  display: flex;
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  padding: 0 3em 0 1.25em;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;
  line-height: 1.5;
`;

const mapOptions = options =>
  options.map(({ id, value, name }) => (
    <option id={id} value={value} key={id}>
      {name || value}
    </option>
  ));

const mapOptionGroups = optionGroups =>
  optionGroups.map(({ group, children }) => (
    <optgroup label={group} key={group}>
      {mapOptions(children)}
    </optgroup>
  ));

export const Select = forwardRef(({ onChange, items, selectedOption }, ref) => {
  const isOptionsGroup = items.some(item =>
    Object.keys(item).includes("group")
  );

  return (
    <SelectContainer onChange={onChange} value={selectedOption} ref={ref}>
      {isOptionsGroup ? mapOptionGroups(items) : mapOptions(items)}
    </SelectContainer>
  );
});

Select.propTypes = {
  /** Currently selected option */
  selectedOption: PropTypes.string,
  /** Select options */
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
        name: PropTypes.string
      })
    ),
    PropTypes.arrayOf(
      PropTypes.shape({
        group: PropTypes.string,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            value: PropTypes.string,
            name: PropTypes.string
          })
        )
      })
    )
  ]),
  /** onChange handler function */
  onChange: PropTypes.func
};

Select.defaultProps = {
  selectedOption: "",
  items: [],
  onChange: () => {}
};
