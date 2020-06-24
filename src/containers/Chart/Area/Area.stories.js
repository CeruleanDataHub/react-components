import React from "react";

import { Area } from "./Area";

export default {
  title: "Area",
  component: Area
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

export const AreaStory = () => (
  <Area title="Sauna histogram as area" xAxis={xAxis} series={series} />
);
