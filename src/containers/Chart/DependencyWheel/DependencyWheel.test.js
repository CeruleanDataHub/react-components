import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { DependencyWheel } from "./DependencyWheel";

describe("Dependency Wheel", () => {
  it("should render chart", () => {
    const component = shallow(<DependencyWheel />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
