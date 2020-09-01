import React from "react";

import { Chart } from "../Chart";

/**
 * Use this component to generate Line charts. Component properties are inherited from the `Chart` component.
 */
export const Line = ({ title, xAxis, series, options }) => (
  <Chart
    title={title}
    xAxis={xAxis}
    series={series}
    options={options}
    type="line"
  />
);

Line.propTypes = {
  /** Title of the chart, type is inherited from the `Chart` base component */
  title: Chart.propTypes.title,
  /** Values for X axis, type is inherited from the `Chart` base component */
  xAxis: Chart.propTypes.xAxis,
  /** Data to be graphed, type is inherited from the `Chart` base component */
  series: Chart.propTypes.series,
  /** Options object for chart */
  options: Chart.propTypes.options
};

Line.defaultProps = {
  title: Chart.defaultProps.title,
  xAxis: Chart.defaultProps.xAxis,
  series: Chart.defaultProps.series,
  options: Chart.defaultProps.options
};
