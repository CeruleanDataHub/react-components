import mapDataFI from "@highcharts/map-collection/countries/fi/fi-all.geo.json";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { Map } from "./Map";

const series = [
  {
    data: [
      ["fi-3280", 0],
      ["fi-3272", 1],
      ["fi-3275", 2],
      ["fi-3281", 3],
      ["fi-3279", 4],
      ["fi-3276", 5],
      ["fi-3287", 6],
      ["fi-3286", 7],
      ["fi-3290", 8],
      ["fi-3291", 9],
      ["fi-3292", 10],
      ["fi-3293", 11],
      ["fi-3294", 12],
      ["fi-3295", 13],
      ["fi-3296", 14],
      ["fi-3288", 15],
      ["fi-3285", 16],
      ["fi-3289", 17]
    ],
    mapData: mapDataFI,
    name: "Data"
  }
];

xdescribe("Map", () => {
  it("should render map with data", () => {
    const component = shallow(<Map series={series} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render map with data and title", () => {
    const component = shallow(<Map series={series} title="Map title" />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should accept containerProps property", () => {
    const component = shallow(
      <Map
        series={series}
        title="Map title"
        containerProps={{ title: "test" }}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render map with data, title and min and max color values", () => {
    const component = shallow(
      <Map
        series={series}
        title="Map title"
        minColor="#000000"
        maxColor="#ffffff"
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
