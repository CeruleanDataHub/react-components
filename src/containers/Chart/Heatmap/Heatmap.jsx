import PropTypes from "prop-types";
import React from "react";

import { Chart } from "../Chart";

const stops = [
  [0.1, "#f45b5b"],
  [0.2, "#f56b6b"],
  [0.3, "#f67b7b"],
  [0.4, "#f78c8c"],
  [0.5, "#f89c9c"],
  [0.6, "#f9adad"],
  [0.7, "#fabdbd"],
  [0.8, "#fbcdcd"],
  [0.9, "#fcdede"],
  [1, "#fdeeee"]
];

const options = {
  colorAxis: {
    minColor: stops[0][1],
    maxColor: stops[stops.length - 1][1],
    stops
  },
  legend: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  plotOptions: { heatmap: { borderColor: "#000000", borderWidth: 4 } },
  yAxis: [{ visible: false, reversed: true }],
  xAxis: [{ visible: false }]
};

/**
 * Use this component to generate Heatmap charts. Component properties are inherited from the `Chart` component.
 */
export const Heatmap = ({ data, containerProps }) => {
  const series = [
    {
      data,
      dataLabels: {
        enabled: true,
        color: "#000000"
      }
    }
  ];

  return (
    <Chart
      series={series}
      options={options}
      type="heatmap"
      containerProps={containerProps}
    />
  );
};

Heatmap.propTypes = {
  /** Data to be graphed */
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  /** Props to be passed to highcharts, such as styles or classname */
  // eslint-disable-next-line react/forbid-prop-types
  containerProps: PropTypes.object
};

Heatmap.defaultProps = {
  data: [],
  containerProps: null
};
