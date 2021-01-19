import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TopHeader = styled.header`
  position: fixed;
  height: 0;
  color: #ffffff;
  z-index: 1;
`;

const Logo = styled.img`
  width: 10em;
  margin-left: 4em;
`;

export const Header = ({ logo }) => (
  <TopHeader id="header" image={logo}>
    <Logo src={logo} />
  </TopHeader>
);

Header.propTypes = {
  logo: PropTypes.node
};

Header.defaultProps = {
  logo: null
};
