import React from "react";

import { Chart } from "../Chart";

const options = {
  tooltip: {
    split: true
  }
};

export const Spline = ({ title, xAxis, series }) => (
  <Chart
    title={title}
    xAxis={xAxis}
    series={series}
    options={options}
    type="spline"
  />
);

Spline.propTypes = {
  /** Title of the chart */
  title: Chart.propTypes.title,
  /** Values for X axis */
  xAxis: Chart.propTypes.xAxis,
  /** Data to be graphed */
  series: Chart.propTypes.series
};

Spline.defaultProps = {
  title: Chart.defaultProps.title,
  xAxis: Chart.defaultProps.xAxis,
  series: Chart.defaultProps.series
};
