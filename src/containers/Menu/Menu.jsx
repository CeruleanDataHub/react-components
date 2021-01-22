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

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const MenuItemText = styled.span`
  margin-left: 1rem;
  /* text still selectable in browser */
  opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
`;

const SingleItem = ({ name, icon, LinkComponent, to, menuOpen }) => (
  <MenuItem>
    <Typography fontFamily="exo">
      <LinkComponent to={to}>
        <Flex>
          <Icon name={icon} as={MenuIcon} />
          <MenuItemText className="menu-text" menuOpen={menuOpen}>
            {name}
          </MenuItemText>
        </Flex>
      </LinkComponent>
    </Typography>
  </MenuItem>
);

SingleItem.propTypes = {
  name: PropTypes.string,
  icon: Icon.propTypes.name,
  to: PropTypes.string,
  LinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  menuOpen: PropTypes.bool
};

const DefaultLinkComponent = ({ children }) => children;
DefaultLinkComponent.propTypes = {
  children: PropTypes.node
};

DefaultLinkComponent.defaultProps = {
  children: ""
};

SingleItem.defaultProps = {
  name: "",
  icon: "",
  to: "",
  LinkComponent: DefaultLinkComponent,
  menuOpen: true
};

export const Menu = ({ items, menuOpen }) => (
  <MenuItems>
    {items.map(({ name, icon, LinkComponent, to }) => (
      <SingleItem
        name={name}
        icon={icon}
        LinkComponent={LinkComponent}
        to={to}
        menuOpen={menuOpen}
        key={name}
        data-menu-item-test
      />
    ))}
  </MenuItems>
);

Menu.propTypes = {
  /** Menu items to be rendered */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: Icon.propTypes.name,
      to: PropTypes.string,
      LinkComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
    })
  ),
  /** Defines whether the menu should be open or closed */
  menuOpen: PropTypes.bool
};

Menu.defaultProps = {
  items: [],
  menuOpen: true
};
