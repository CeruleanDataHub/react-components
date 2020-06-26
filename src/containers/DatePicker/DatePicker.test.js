import React from "react";
import renderer from "react-test-renderer";

import { DatePicker } from "./DatePicker";

describe("DatePicker", () => {
  it("should render", () => {
    const component = renderer.create(<DatePicker />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render DatePicker with custom dateFormat", () => {
    const component = renderer.create(<DatePicker dateFormat="MM/dd/yyyy" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
