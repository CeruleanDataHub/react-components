import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 18em;
  transition: width linear 280ms;
  width: ${(props) => (props.menuOpen ? 20 : 4.5)}em;
  background-color: rgba(0, 0, 0, 0.75);
  color: #ffffff;
`;

const MenuOpen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  height: 3.5em;
  cursor: pointer;
`;
const MenuIcon = styled.span`
  font-size: 2em;
  margin: 0.5em;
`;

export const Navigation = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <NavBar id="left-navigation" menuOpen={menuOpen}>
      <MenuOpen onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon className={["lnr", menuOpen ? "lnr-cross" : "lnr-menu"]} />
      </MenuOpen>
      {children}
    </NavBar>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
};

Navigation.defaultProps = {
  children: "",
};
