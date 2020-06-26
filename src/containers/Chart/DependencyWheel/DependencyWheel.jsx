import PropTypes from "prop-types";
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

export const DependencyWheel = ({ title, xAxis, series, containerProps }) => (
  <Chart
    title={title}
    xAxis={xAxis}
    series={series}
    options={options}
    type="dependencywheel"
    containerProps={containerProps}
  />
);

DependencyWheel.propTypes = {
  ...Chart.propTypes,
  /** Title of the chart */
  title: Chart.propTypes.title,
  /** Values for X axis */
  xAxis: Chart.propTypes.xAxis,
  /** Data to be graphed */
  series: Chart.propTypes.series,
  /** Props to be passed to highcharts, such as styles or classname */
  // eslint-disable-next-line react/forbid-prop-types
  containerProps: PropTypes.object
};

DependencyWheel.defaultProps = {
  title: Chart.defaultProps.title,
  xAxis: Chart.defaultProps.xAxis,
  series: Chart.defaultProps.series,
  containerProps: null
};
