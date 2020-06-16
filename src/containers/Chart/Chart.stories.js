import React from "react";

import { Chart } from "./Chart";

export default {
  title: "Chart",
  component: Chart,
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
      "sunday",
    ],
  },
];

const series = [{ name: "temperature", data: [10, 15, 20, 25, 15, 20, 15] }];

export const ChartStory = () => <Chart xAxis={xAxis} series={series} />;
