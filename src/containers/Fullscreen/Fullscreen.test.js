import { shallow } from "enzyme";
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

  it("should fire onClick event callback function", () => {
    const handleClick = jest.fn();
    const component = shallow(<Fullscreen onClick={handleClick} />);
    expect(handleClick).not.toHaveBeenCalled();
    component.simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("should call default props onClick function when no onClick property is passed", () => {
    const component = renderer.create(<Fullscreen />);
    component.root.props.onClick();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
