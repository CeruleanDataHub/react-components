import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Icon, iconNameProps } from "../Icon/Icon.jsx";

const CardDash = styled.div`
  margin: "2em";
  border-radius: 0.5em;
  border: 2px dashed #ffffff;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props["justify-content"] || "center"};
  margin: 1em;
  border-radius: 0.25em;
  border: 1px solid #000000;
  background-color: #ffffff;
  height: ${(props) => props.height || "20em"};
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props["max-width"] || "auto"};
  font-family: "Open Sans", sans-serif;
  text-align: ${(props) => props["text-align"] || "center"};
  padding: 1em;
  box-sizing: border-box;
`;
const CardHeader = styled.h3`
  font-family: "Exo 2", sans-serif;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;
const CardBody = styled.div`
  text-align: center;
`;

export const Card = ({ title, icon, children }) => (
  <CardDash>
    <CardContainer>
      {icon && <Icon name={icon} />}
      {title && <CardHeader>{title}</CardHeader>}
      <CardBody>{children}</CardBody>
    </CardContainer>
  </CardDash>
);

Card.propTypes = {
  title: PropTypes.string,
  icon: iconNameProps,
  children: PropTypes.node,
};

Card.defaultProps = {
  title: null,
  icon: null,
  children: "",
};
