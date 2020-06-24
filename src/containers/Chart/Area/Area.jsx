import React from "react";

import { Chart } from "../Chart";

export const Area = ({ title, xAxis, series }) => (
  <Chart title={title} xAxis={xAxis} series={series} type="area" />
);

Area.propTypes = {
  /** Title of the chart */
  title: Chart.propTypes.title,
  /** Values for X axis */
  xAxis: Chart.propTypes.xAxis,
  /** Data to be graphed */
  series: Chart.propTypes.series
};

Area.defaultProps = {
  title: Chart.defaultProps.title,
  xAxis: Chart.defaultProps.xAxis,
  series: Chart.defaultProps.series
};
