import mapDataFI from "@highcharts/map-collection/countries/fi/fi-all.geo.json";
import React from "react";

import { Map } from "./Map";

export default {
  title: "Map",
  component: Map
};

const series = [
  {
    data: [
      ["fi-3280", 0],
      ["fi-3272", 1],
      ["fi-3275", 2],
      ["fi-3281", 3],
      ["fi-3279", 4],
      ["fi-3276", 5],
      ["fi-3287", 6],
      ["fi-3286", 7],
      ["fi-3290", 8],
      ["fi-3291", 9],
      ["fi-3292", 10],
      ["fi-3293", 11],
      ["fi-3294", 12],
      ["fi-3295", 13],
      ["fi-3296", 14],
      ["fi-3288", 15],
      ["fi-3285", 16],
      ["fi-3289", 17]
    ],
    mapData: mapDataFI,
    name: "Data"
  }
];

export const MapStory = () => (
  <Map title="Finland" minColor="#CCE7E7" maxColor="#048B8A" series={series} />
);
