import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { Button } from "./Button";

const colors = ["crimson", "tomato", "khaki"];

describe("Button", () => {
  it("should render Button", () => {
    const component = shallow(<Button />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render Button with props", () => {
    const component = shallow(<Button text="Button" color="blue" />);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe("Should render Button color based on props", () => {
    colors.map(color =>
      it("renders with correct color", () => {
        const component = shallow(<Button text="Button" color={color} />);
        expect(component).toHaveStyleRule("color", color);
        expect(component).toHaveStyleRule("border", `1px solid ${color}`);
      })
    );
  });
});
