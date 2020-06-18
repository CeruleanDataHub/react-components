import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { Chart } from "./Chart";

describe("Chart", () => {
  it("should render chart", () => {
    const component = shallow(<Chart />);

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
          "sunday",
        ],
      },
    ];

    const series = [
      { name: "temperature", data: [10, 15, 20, 25, 15, 20, 15] },
    ];

    const component = shallow(<Chart xAxis={xAxis} series={series} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
