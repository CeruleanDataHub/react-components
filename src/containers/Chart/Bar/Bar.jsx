import React from "react";

import { Chart } from "../Chart";

export const Bar = ({ title, xAxis, series }) => (
  <Chart title={title} xAxis={xAxis} series={series} type="bar" />
);

Bar.propTypes = {
  /** Title of the chart */
  title: Chart.propTypes.title,
  /** Values for X axis */
  xAxis: Chart.propTypes.xAxis,
  /** Data to be graphed */
  series: Chart.propTypes.series
};

Bar.defaultProps = {
  title: Chart.defaultProps.title,
  xAxis: Chart.defaultProps.xAxis,
  series: Chart.defaultProps.series
};
