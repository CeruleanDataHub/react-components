import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";

const NavBar = styled.nav`
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1;
`;

const MenuOpen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3.5em;
  cursor: pointer;
`;

const MenuIcon = styled.span`
  font-size: 2rem;
  margin: 0.5rem;
`;

export const Navigation = ({
  menuInitialState = true,
  onMenuToggle,
  children
}) => {
  const [menuOpen, setMenuOpen] = useState(menuInitialState);

  return (
    <NavBar id="left-navigation" menuOpen={menuOpen}>
      <MenuOpen
        onClick={() => {
          setMenuOpen(!menuOpen);
          onMenuToggle(!menuOpen);
        }}
      >
        <Icon name={menuOpen ? "close" : "menu"} as={MenuIcon} />
      </MenuOpen>
      {children}
    </NavBar>
  );
};

Navigation.propTypes = {
  menuInitialState: PropTypes.bool,
  onMenuToggle: PropTypes.func,
  children: PropTypes.node
};

Navigation.defaultProps = {
  menuInitialState: true,
  onMenuToggle: () => null,
  children: ""
};
