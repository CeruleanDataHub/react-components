import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Typography } from "../Typography/Typography";

const Container = styled.div`
  display: flex;
  padding: 0.5em 1.5em;
  background: ${({ active }) => (active ? "white" : "#ddd")};
  border: 1px solid black;
  border-bottom-color: transparent;
  cursor: pointer;
  margin-right: 1em;
  border-radius: 3px 3px 0 0;
  align-items: center;
  justify-content: space-evenly;
`;

const Text = styled.span`
  font-size: 1em;
  color: black;
  user-select: none;
`;

export const Tab = ({ text, icon, active, onClick }) => (
  <Typography fontFamily="openSans">
    <Container active={active} onClick={onClick}>
      {icon && icon}

      <Text>{text}</Text>
    </Container>
  </Typography>
);

Tab.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

Tab.defaultProps = {
  text: "",
  icon: null,
  active: false,
  onClick: () => null
};
