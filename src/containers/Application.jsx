import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import header from "../assets/images/Header.png";

const Main = styled.article`
  min-height: 100vh;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-color: #ffffff;
  background-attachment: fixed;
  background-position: left -15em;
`;

export const Application = ({ children }) => (
  <Main id="header" image={header}>
    {children}
  </Main>
);

Application.propTypes = {
  children: PropTypes.node,
};

Application.defaultProps = {
  children: "",
};
