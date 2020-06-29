import React from "react";
import renderer from "react-test-renderer";

import { Fullscreen } from "./Fullscreen";

describe("Fullscreen", () => {
  it("should render", () => {
    const component = renderer.create(<Fullscreen />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should have onClick listener", () => {
    const component = renderer.create(<Fullscreen onClick={() => null} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
