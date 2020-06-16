import React from "react";
import styled from "styled-components";

import logo from "../../assets/images/Denim_Logo_Color.png";

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

export const Header = () => (
  <TopHeader id="header" image={logo}>
    <Logo src={logo} />
  </TopHeader>
);
