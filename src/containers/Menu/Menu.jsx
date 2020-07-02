import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography/Typography";

const MenuIcon = styled.span`
  font-size: 1.5em;
  margin-right: 1.75rem;
  float: left;
`;

const MenuItems = styled.ul`
  margin: 1em 0 0 0.25em;
  padding: 0;
  list-style-type: none;
`;

const MenuItem = styled.li`
  display: block;
  padding: 1em;
  line-height: 1.5em;
  height: 1.5em;
  font-weight: 300;
  text-transform: uppercase;
`;

const MenuItemText = styled.span`
  display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
`;

const renderItems = ({ items, menuOpen }) =>
  items &&
  items.map(item => (
    <MenuItem key={item.name}>
      <Typography fontFamily="exo">
        <Icon name={item.icon} as={MenuIcon} />
        <MenuItemText menuOpen={menuOpen}>{item.name}</MenuItemText>
      </Typography>
    </MenuItem>
  ));

export const Menu = ({ items, menuOpen }) => (
  <MenuItems>{renderItems({ items, menuOpen })}</MenuItems>
);

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, icon: Icon.propTypes.name })
  ),
  menuOpen: PropTypes.bool
};

Menu.defaultProps = {
  items: [],
  menuOpen: true
};
