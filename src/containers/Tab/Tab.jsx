import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Typography } from "../Typography/Typography";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5em 1.5em;
  background: ${({ active }) => (active ? "white" : "#ddd")};
  border: 1px solid black;
  border-bottom-color: transparent;
  cursor: pointer;
  margin-right: 1em;
  border-radius: 3px 3px 0 0;
`;

const Text = styled.span`
  font-size: 1em;
  color: black;
`;

export const Tab = ({ text, active, onClick }) => (
  <Typography fontFamily="openSans">
    <Container active={active} onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  </Typography>
);

Tab.propTypes = {
  /** Text of the tab */
  text: PropTypes.string,
  /** Is the tab selected or not */
  active: PropTypes.bool,
  /** Handler function */
  onClick: PropTypes.func
};

Tab.defaultProps = {
  text: "",
  active: false,
  onClick: () => null
};
