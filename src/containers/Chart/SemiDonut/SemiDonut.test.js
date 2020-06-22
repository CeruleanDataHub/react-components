import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { SemiDonut } from "./SemiDonut";

describe("Semi Donut", () => {
  it("should render chart", () => {
    const component = shallow(<SemiDonut />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
