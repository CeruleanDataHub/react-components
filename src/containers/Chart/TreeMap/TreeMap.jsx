import React from "react";

import { Chart } from "../Chart";

const treeMapSeriesOptions = {
  layoutAlgorithm: "squarified",
  alternateStartingDirection: true,
  levels: [
    {
      level: 1,
      layoutAlgorithm: "strip",
      dataLabels: {
        enabled: true,
        align: "left",
        verticalAlign: "top",
        style: {
          fontSize: "15px",
          fontWeight: "bold"
        }
      }
    }
  ]
};

/**
 * Use this component to generate TreeMap charts. Component properties are inherited from the `Chart` component.
 */
export const TreeMap = ({ title, series }) => (
  <Chart
    title={title}
    series={series.map(value => ({
      ...value,
      ...treeMapSeriesOptions
    }))}
    type="treemap"
  />
);

TreeMap.propTypes = {
  ...Chart.propTypes,
  /** Title of the chart, type is inherited from the `Chart` base component */
  title: Chart.propTypes.title,
  /** Data to be graphed, type is inherited from the `Chart` base component */
  series: Chart.propTypes.series
};

TreeMap.defaultProps = {
  title: Chart.defaultProps.title,
  series: Chart.defaultProps.series
};
