import PropTypes from "prop-types";
import React from "react";
import { Cell, Grid as GridWrapper } from "styled-css-grid";

const Grid = ({ children }) => (
  <GridWrapper columns={children.length}>{children}</GridWrapper>
);

Grid.propTypes = {
  children: PropTypes.node
};

Grid.defaultProps = {
  children: ""
};

export { Grid, Cell };
