import React from "react";

import { Chart } from "../Chart";

export const DependencyWheel = ({ title, xAxis, series }) => {
  const options = {
    title: {
      text: title
    },
    accessibility: {
      point: {
        valueDescriptionFormat:
          "{index}. From {point.from} to {point.to}: {point.weight}."
      }
    },
    series: series.map(value => ({ ...value, type: "dependencywheel" }))
  };

  return (
    <Chart title={title} xAxis={xAxis} series={series} options={options} />
  );
};

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
