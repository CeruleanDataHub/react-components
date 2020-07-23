import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import selectArrow from "../../assets/images/chevron-down.svg";

const SelectContainer = styled.select`
  appearance: none;
  font-family: inherit;
  display: flex;
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  padding: 0 3em 0 1.25em;
  cursor: pointer;
  background-image: url(${selectArrow});
  background-size: 1em;
  background-repeat: no-repeat;
  background-position: right 1em top 50%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #999;
  line-height: 1.5;
`;

export const Select = ({ onChange, items, selectedOption }) => (
  <SelectContainer onChange={onChange} value={selectedOption}>
    {items.map(item => (
      <option className="select" value={item.value} key={item.id}>
        {item.value}
      </option>
    ))}
  </SelectContainer>
);

Select.propTypes = {
  /** Currently selected option */
  selectedOption: PropTypes.string,
  /** Select options */
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, value: PropTypes.string })
  ),
  /** onChange handler function */
  onChange: PropTypes.func
};

Select.defaultProps = {
  selectedOption: "",
  items: [],
  onChange: () => {}
};
