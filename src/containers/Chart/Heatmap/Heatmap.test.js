import { mount } from "enzyme";
import React from "react";

import { Heatmap } from "./Heatmap";

const repeat = n => new Array(n).fill(null).map((_, i) => i);

const xAxisCategories = ["1", "2", "3", "4", "5", "6", "7"];
const yAxisCategories = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
];

const values = [
  [71, 45, 100, 40, 59],
  [41, 72, 29, 13, 33],
  [85, 52, 72, 52, 93],
  [84, 72, 100, 49, 92],
  [75, 97, 63, 12, 64],
  [74, 82, 83, 91, 48],
  [52, 91, 56, 57, 93]
];

const data = repeat(xAxisCategories.length)
  .map(i => repeat(yAxisCategories.length).map(n => [i, n, values[i][n]]))
  .reduce((a, b) => [...a, ...b], [])
  .slice(0, 30);

describe("Heatmap", () => {
  it("should render heatmap", () => {
    const component = mount(<Heatmap />);

    expect(component.render()).toMatchSnapshot();
  });

  it("should render heatmap with data", () => {
    const component = mount(<Heatmap data={data} />);

    expect(component.render()).toMatchSnapshot();
  });
});
