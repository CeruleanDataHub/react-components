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

export const Select = forwardRef(({ onChange, items, selectedOption }, ref) => (
  <SelectContainer onChange={onChange} value={selectedOption} ref={ref}>
    {items.map(item => (
      <option className="select" value={item.value} key={item.id}>
        {item.value}
      </option>
    ))}
  </SelectContainer>
));

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
