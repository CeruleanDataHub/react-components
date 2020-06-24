import React from "react";

import { Chart } from "./Chart";

export default {
  title: "Chart",
  component: Chart
};

const xAxis = [
  {
    categories: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ]
  }
];

const series = [
  { name: "Temperature", data: [99, 80, 82, 59, 90, 6, 99] },
  { name: "Humidity", data: [29, 39, 26, 53, 9, 46, 31] }
];

export const ChartStory = () => (
  <Chart title="Chart" xAxis={xAxis} series={series} />
);

export const ChartAreaStory = () => (
  <Chart
    title="Sauna histogram as area chart"
    xAxis={xAxis}
    series={series}
    type="area"
  />
);

export const ChartAreaSplineStory = () => (
  <Chart
    title="Sauna histogram as area spline"
    xAxis={xAxis}
    series={series}
    type="areaspline"
  />
);
