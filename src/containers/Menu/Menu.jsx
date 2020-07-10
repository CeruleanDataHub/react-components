import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography/Typography";

const MenuIcon = styled.span`
  font-size: 1.5em;
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

const Flex = styled.div`
  display: flex;
`;

const MenuItemText = styled.span`
  margin-left: 1rem;
  /* text still selectable in browser */
  opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
`;

const SingleItem = ({ name, icon, menuOpen }) => (
  <MenuItem>
    <Typography fontFamily="exo">
      <Flex>
        <Icon name={icon} as={MenuIcon} />
        <MenuItemText className="menu-text" menuOpen={menuOpen}>
          {name}
        </MenuItemText>
      </Flex>
    </Typography>
  </MenuItem>
);

SingleItem.propTypes = {
  name: PropTypes.string,
  icon: Icon.propTypes.name,
  menuOpen: PropTypes.bool
};

SingleItem.defaultProps = {
  name: "",
  icon: "",
  menuOpen: true
};

export const Menu = ({ items, menuOpen }) => (
  <MenuItems>
    {items.map(({ name, icon }) => (
      <SingleItem name={name} icon={icon} menuOpen={menuOpen} key={name} />
    ))}
  </MenuItems>
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
