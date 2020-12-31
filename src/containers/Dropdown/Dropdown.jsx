import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography/Typography";

const Container = styled.div`
  position: relative;
`;

const DropdownContainer = styled.button`
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  padding: 1.25em;
  cursor: pointer;
`;

const ItemList = styled.ul`
  width: 100%;
  padding: 0;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-top: none;
  position: absolute;
  top: 22px;
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;
  list-style: none;
  z-index: 1;
  box-sizing: border-box;
`;

const DropdownText = styled.span`
  color: #999;
  font-size: 1.25em;
  font-weight: bold;
`;

const DropdownTextWrapped = styled(DropdownText)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Dropdown = React.forwardRef(
  ({ isOpen, label, onClick, children }, ref) => (
    <Typography fontFamily="openSans">
      <Container ref={ref}>
        <Button onClick={onClick} as={DropdownContainer}>
          <DropdownTextWrapped>{label}</DropdownTextWrapped>
          <Icon
            name={isOpen ? "chevron-up" : "chevron-down"}
            as={DropdownText}
          />
        </Button>
        {isOpen && <ItemList data-item-list-test>{children}</ItemList>}
      </Container>
    </Typography>
  )
);

Dropdown.propTypes = {
  /** Define dropdown visibility state */
  isOpen: PropTypes.bool,
  /** Text to show in dropdown */
  label: PropTypes.node,
  /** Handler function */
  onClick: PropTypes.func,
  /** Children component to render */
  children: PropTypes.node
};

Dropdown.defaultProps = {
  isOpen: false,
  label: "",
  onClick: () => {},
  children: ""
};
