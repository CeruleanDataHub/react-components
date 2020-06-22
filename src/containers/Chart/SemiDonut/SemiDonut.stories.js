import React from "react";

import { SemiDonut } from "./SemiDonut";

export default {
  title: "SemiDonut",
  component: SemiDonut
};

const series = [
  {
    name: "Browser share",
    innerSize: "50%",
    data: [
      ["Chrome", 58.9],
      ["Firefox", 13.29],
      ["Internet Explorer", 13],
      ["Edge", 3.78],
      ["Safari", 3.42],
      {
        name: "Other",
        y: 7.61,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }
];

export const SemiDonutStory = () => <SemiDonut title="Chart" series={series} />;
