import PropTypes from "prop-types";
import React from "react";
import DataTableWrapper from "react-data-table-component";

export const DataTable = ({ columns, data }) => (
  <DataTableWrapper
    pagination={data.length > 10}
    striped
    highlightOnHover
    noHeader
    columns={columns}
    data={data}
  />
);

DataTable.propTypes = {
  /** Table columns */
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array,
  /** Table data. List of objects. You can create create a custom cell containing an react component by adding an `cell` value to the object */
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array
};

DataTable.defaultProps = {
  columns: [],
  data: []
};
