import { mount } from "enzyme";
import React from "react";

import { Chart } from "./Chart";

describe("Chart", () => {
  it("should render chart", () => {
    const component = mount(<Chart />);

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

    const component = mount(<Chart xAxis={xAxis} series={series} />);

    expect(component).toMatchHtmlSnapshot();
  });

  it("should render chart with custom options", () => {
    const xAxis = [
      {
        categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
      }
    ];

    const series = [
      {
        name: "John",
        data: [5, 3, 4, 7, 2],
        stack: "male"
      },
      {
        name: "Joe",
        data: [3, 4, 4, 2, 5],
        stack: "male"
      },
      {
        name: "Jane",
        data: [2, 5, 6, 2, 1],
        stack: "female"
      },
      {
        name: "Janet",
        data: [3, 0, 4, 4, 3],
        stack: "female"
      }
    ];

    const options = {
      chart: {
        type: "column"
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: "Number of fruits"
        }
      },
      plotOptions: {
        column: {
          stacking: "normal"
        }
      }
    };

    const component = mount(
      <Chart
        title="Total fruit consumption, grouped by gender"
        xAxis={xAxis}
        series={series}
        options={options}
      />
    );

    expect(component).toMatchHtmlSnapshot();
  });
});
