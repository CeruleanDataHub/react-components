import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

const NavBar = styled.nav`
  z-index: 1;
`;

const MenuOpen = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3.5em;
  cursor: pointer;
  border: none;
  margin-left: 0.5em;
`;

const MenuIcon = styled.span`
  font-size: 2rem;
  margin: 0.5rem;
`;

export const Navigation = ({ menuInitialState, onMenuToggle, children }) => {
  const [menuOpen, setMenuOpen] = useState(menuInitialState);

  const handleOnClick = () => {
    setMenuOpen(!menuOpen);
    onMenuToggle(!menuOpen);
  };

  return (
    <NavBar menuOpen={menuOpen}>
      <Button onClick={handleOnClick} as={MenuOpen}>
        <Icon name={menuOpen ? "close" : "menu"} as={MenuIcon} data-icon-test />
      </Button>
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
