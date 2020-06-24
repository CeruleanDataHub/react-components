import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { Line } from "./Line";

describe("Line", () => {
  it("should render line chart", () => {
    const component = shallow(<Line />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render chart with simple data", () => {
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
      { name: "temperature", data: [10, 15, 20, 25, 15, 20, 15] }
    ];

    const component = shallow(<Line xAxis={xAxis} series={series} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
