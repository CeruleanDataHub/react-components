import PropTypes from "prop-types";
import React from "react";
import { Cell, Grid as GridWrapper } from "styled-css-grid";

const Grid = ({ as, className, children }) => (
  <GridWrapper columns={children.length} as={as} className={className}>
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
  /** Classname, can be used to extend styled component styles */
  className: PropTypes.string,
  /** React node */
  children: PropTypes.node
};

Grid.defaultProps = {
  as: null,
  className: "",
  children: ""
};

export { Grid, Cell };
