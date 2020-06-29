import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";

const Container = styled.span`
  cursor: pointer;
`;

export const Fullscreen = ({ onClick }) => (
  <Container onClick={onClick} onKeyPress={onClick} role="button" tabIndex={0}>
    <Icon name="full-screen" />
  </Container>
);

Fullscreen.propTypes = {
  /** Click event listener */
  onClick: PropTypes.func
};

Fullscreen.defaultProps = {
  onClick: () => null
};
