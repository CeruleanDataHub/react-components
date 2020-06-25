import React from "react";

import { Chart } from "../Chart";

const options = {
  accessibility: {
    point: {
      valueDescriptionFormat:
        "{index}. From {point.from} to {point.to}: {point.weight}."
    }
  }
};

export const DependencyWheel = ({ title, xAxis, series }) => (
  <Chart
    title={title}
    xAxis={xAxis}
    series={series.map(value => ({ ...value, type: "dependencywheel" }))}
    options={options}
  />
);

DependencyWheel.propTypes = {
  ...Chart.propTypes,
  /** Title of the chart */
  title: Chart.propTypes.title,
  /** Values for X axis */
  xAxis: Chart.propTypes.xAxis,
  /** Data to be graphed */
  series: Chart.propTypes.series
};

DependencyWheel.defaultProps = {
  title: Chart.defaultProps.title,
  xAxis: Chart.defaultProps.xAxis,
  series: Chart.defaultProps.series
};
