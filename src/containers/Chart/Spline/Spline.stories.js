import React from "react";

import { Spline } from "./Spline";

export default {
  title: "Spline",
  component: Spline
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

export const SplineStory = () => (
  <Spline title="Sauna histogram as spline" xAxis={xAxis} series={series} />
);
