import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";

const Container = styled.span`
  cursor: pointer;
`;

export const Fullscreen = ({ as, onClick }) => (
  <Container
    onClick={onClick}
    onKeyPress={onClick}
    as={as}
    role="button"
    tabIndex={0}
  >
    <Icon name="full-screen" />
  </Container>
);

Fullscreen.propTypes = {
  /** Extend styles, property is from styled components */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired })
  ]),
  /** Click event listener */
  onClick: PropTypes.func
};

Fullscreen.defaultProps = {
  as: null,
  onClick: () => null
};
