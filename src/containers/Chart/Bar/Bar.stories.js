import React from "react";

import { Bar } from "./Bar";

export default {
  title: "Bar",
  component: Bar
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

export const BarStory = () => (
  <Bar title="Sauna histogram as bar" xAxis={xAxis} series={series} />
);
