import { mount } from "enzyme";
import React from "react";

import { Line } from "./Line";

describe("Line", () => {
  it("should render line chart", () => {
    const component = mount(<Line />);

    expect(component).toMatchHtmlSnapshot();
  });

  describe("renders", () => {
    let xAxisStub;
    let seriesStub;
    let optionsStub;

    beforeEach(() => {
      xAxisStub = [
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

      seriesStub = [
        { name: "temperature", data: [10, 15, 20, 25, 15, 20, 15] }
      ];

      optionsStub = {
        legend: { enabled: false }
      };
    });

    it("with simple data", () => {
      const component = mount(<Line xAxis={xAxisStub} series={seriesStub} />);

      expect(component).toMatchHtmlSnapshot();
    });

    it("without legend", () => {
      const component = mount(
        <Line xAxis={xAxisStub} series={seriesStub} options={optionsStub} />
      );

      expect(component).toMatchHtmlSnapshot();
    });
  });
});
