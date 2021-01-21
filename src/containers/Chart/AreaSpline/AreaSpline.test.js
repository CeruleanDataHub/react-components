import { mount } from "enzyme";
import React from "react";

import { AreaSpline } from "./AreaSpline";

describe("AreaSpline", () => {
  it("should render chart", () => {
    const component = mount(<AreaSpline />);

    expect(component).toMatchHtmlSnapshot();
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
      <AreaSpline title="Chart" xAxis={xAxis} series={series} />
    );

    expect(component).toMatchHtmlSnapshot();
  });
});
