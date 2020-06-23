import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { DependencyWheel } from "./DependencyWheel";

const series = [
  {
    keys: ["from", "to", "weight"],
    data: [
      ["Brazil", "Canada", 5],
      ["Brazil", "Mexico", 1],
      ["Canada", "Brazil", 1],
      ["Canada", "Mexico", 5],
      ["Mexico", "Brazil", 1],
      ["Mexico", "Canada", 5]
    ],
    name: "Dependency wheel series",
    dataLabels: {
      color: "#333",
      textPath: {
        enabled: true,
        attributes: {
          dy: 5
        }
      },
      distance: 10
    },
    size: "95%"
  }
];

describe("Dependency Wheel", () => {
  it("should render chart", () => {
    const component = shallow(<DependencyWheel />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render chart with data and title", () => {
    const component = shallow(
      <DependencyWheel series={series} title="Dependency wheel" />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
