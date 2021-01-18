import { mount } from "enzyme";
import React from "react";

import { Spline } from "./Spline";

describe("Spline", () => {
  it("should render chart", () => {
    const component = mount(<Spline />);

    expect(component.render()).toMatchSnapshot();
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

    const component = mount(
      <Spline title="Chart" xAxis={xAxis} series={series} />
    );

    expect(component.render()).toMatchSnapshot();
  });
});
