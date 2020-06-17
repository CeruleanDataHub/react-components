import React from "react";
import renderer from "react-test-renderer";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("should render Checkbox", () => {
    const component = renderer.create(<Checkbox />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Checkbox with checked prop", () => {
    const component = renderer.create(<Checkbox checked />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
