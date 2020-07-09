import React from "react";

import { Chart } from "../Chart";

/**
 * Use this component to generate Bar charts. Component properties are inherited from the `Chart` component.
 */
export const Bar = ({ title, xAxis, series }) => (
  <Chart title={title} xAxis={xAxis} series={series} type="bar" />
);

Bar.propTypes = {
  /** Title of the chart, type is inherited from the `Chart` base component */
  title: Chart.propTypes.title,
  /** Values for X axis, type is inherited from the `Chart` base component */
  xAxis: Chart.propTypes.xAxis,
  /** Data to be graphed, type is inherited from the `Chart` base component */
  series: Chart.propTypes.series
};

Bar.defaultProps = {
  title: Chart.defaultProps.title,
  xAxis: Chart.defaultProps.xAxis,
  series: Chart.defaultProps.series
};
