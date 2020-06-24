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

  it("should render Checkbox with value and label", () => {
    const component = shallow(<Checkbox value={1} label="Test" />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render Checkbox with value and label, and be checked", () => {
    const component = shallow(<Checkbox value={1} label="Test" checked />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render Checkbox with value and label, and be checked, and have classname", () => {
    const component = shallow(
      <Checkbox value={1} label="Test" checked className="test" />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should accept onChange function", () => {
    const component = shallow(
      <Checkbox value={1} label="Test" onChange={() => null} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("applies default styles", () => {
    const component = mount(<Checkbox />);
    expect(component.find("div")).toHaveStyleRule("border", "1px solid #999");
    expect(component.find("div")).toHaveStyleRule("background", "transparent");
  });

  it("changes styles according to props", () => {
    const component = mount(<Checkbox checked />);
    expect(component.find("div")).toHaveStyleRule(
      "border",
      "1px solid #90ee7e"
    );
    expect(component.find("div")).toHaveStyleRule("background", "#90ee7e");
  });
});
