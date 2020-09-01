import React from "react";

import { Line } from "./Line";

export default {
  title: "Line",
  component: Line
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

const options = { plotOptions: { series: { dataLabels: { enabled: false } } } };

export const LineStory = () => (
  <Line
    title="Sauna histogram as line"
    xAxis={xAxis}
    series={series}
    options={options}
  />
);
