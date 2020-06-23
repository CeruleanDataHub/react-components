import "jest-styled-components";

import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("should render Checkbox", () => {
    const component = shallow(<Checkbox />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render Checkbox with checked prop", () => {
    const component = shallow(<Checkbox checked />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("applies default styles", () => {
    const component = mount(<Checkbox />);
    expect(component.find("div")).toHaveStyleRule("border", "1px solid grey");
    expect(component.find("div")).toHaveStyleRule("background", "white");
  });

  it("changes styles according to props", () => {
    const component = mount(<Checkbox checked />);
    expect(component.find("div")).toHaveStyleRule("border", "1px solid black");
    expect(component.find("div")).toHaveStyleRule("background", "black");
  });
});
