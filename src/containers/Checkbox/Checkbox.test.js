import { shallow } from "enzyme";
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
});
