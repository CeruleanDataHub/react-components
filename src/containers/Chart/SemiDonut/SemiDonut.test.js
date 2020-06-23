import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { SemiDonut } from "./SemiDonut";

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

describe("Semi Donut", () => {
  it("should render chart", () => {
    const component = shallow(<SemiDonut />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render chart with data", () => {
    const component = shallow(<SemiDonut series={series} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render chart with title and data", () => {
    const component = shallow(<SemiDonut title="Chart" series={series} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
