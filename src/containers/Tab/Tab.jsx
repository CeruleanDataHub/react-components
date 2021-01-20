import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Typography } from "../Typography/Typography";
import { Icon } from "../Icon/Icon";

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
    <Container active={active} onClick={onClick} data-active-tab-test={active}>
      {icon && <Icon name={icon} data-icon-test />}

      <Text>{text}</Text>
    </Container>
  </Typography>
);

Tab.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

Tab.defaultProps = {
  text: "",
  icon: "",
  active: false
};
