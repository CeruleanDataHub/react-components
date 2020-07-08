import React from "react";

import { Chart } from "../Chart";

/**
 * Use this component to generate Area Spline charts. Component properties are inherited from the `Chart` component.
 */
export const AreaSpline = ({ title, xAxis, series }) => (
  <Chart title={title} xAxis={xAxis} series={series} type="areaspline" />
);

AreaSpline.propTypes = {
  /** Title of the chart */
  title: Chart.propTypes.title,
  /** Values for X axis */
  xAxis: Chart.propTypes.xAxis,
  /** Data to be graphed */
  series: Chart.propTypes.series
};

AreaSpline.defaultProps = {
  title: Chart.defaultProps.title,
  xAxis: Chart.defaultProps.xAxis,
  series: Chart.defaultProps.series
};
