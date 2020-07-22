import PropTypes from "prop-types";
import React from "react";
import { Cell, Grid as GridWrapper } from "styled-css-grid";

const Grid = ({ as, className, children, columns }) => (
  <GridWrapper
    columns={columns || children.length}
    as={as}
    className={className}
  >
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
  children: PropTypes.node,
  /** grid-template-columns value for the grid */
  columns: PropTypes.string
};

Grid.defaultProps = {
  as: null,
  className: "",
  children: "",
  columns: ""
};

export { Grid, Cell };
