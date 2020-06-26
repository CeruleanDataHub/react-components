import PropTypes from "prop-types";
import React from "react";
import { Cell, Grid as GridWrapper } from "styled-css-grid";

const Grid = ({ as, children }) => (
  <GridWrapper columns={children.length} as={as}>
    {children}
  </GridWrapper>
);

Grid.propTypes = {
  /** Extend styles, property is from styled components */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired })
  ]),
  /** React node */
  children: PropTypes.node
};

Grid.defaultProps = {
  as: null,
  children: ""
};

export { Grid, Cell };
