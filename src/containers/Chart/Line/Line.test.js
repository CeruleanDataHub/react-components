import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { Line } from "./Line";

describe("Line", () => {
  it("should render line chart", () => {
    const component = shallow(<Line />);

    expect(toJson(component)).toMatchSnapshot();
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
      const component = shallow(<Line xAxis={xAxisStub} series={seriesStub} />);

      expect(toJson(component)).toMatchSnapshot();
    });

    it("without legend", () => {
      const component = shallow(
        <Line xAxis={xAxisStub} series={seriesStub} options={optionsStub} />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
