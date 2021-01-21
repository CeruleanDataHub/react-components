import { mount } from "enzyme";
import React from "react";

import { Area } from "./Area";

describe("Area", () => {
  it("should render chart", () => {
    const component = mount(<Area />);

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
      <Area title="Chart" xAxis={xAxis} series={series} />
    );

    expect(component).toMatchHtmlSnapshot();
  });
});
