import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import { Chart } from "./Chart";

describe("Chart", () => {
  it("should render chart", () => {
    const component = renderer.create(<Chart />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
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

    expect(component).toMatchSnapshot();
  });
});
