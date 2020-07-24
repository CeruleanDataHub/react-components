import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import { Input } from "./Input";

describe("Input", () => {
  it("should render", () => {
    const component = renderer.create(<Input />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render placeholder", () => {
    const component = renderer.create(<Input placeholder="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should be able to call onChange function", () => {
    const handleOnChange = jest.fn();
    const wrapper = shallow(
      <Input placeholder="test" onChange={handleOnChange} />
    );

    wrapper.simulate("change", "test");
    expect(handleOnChange).toHaveBeenCalledWith("test");
  });

  it("should be able to call default onChange function when no function is passed", () => {
    const component = renderer.create(<Input placeholder="test" />);
    const tree = component.toJSON();
    component.root.props.onChange();
    expect(tree).toMatchSnapshot();
  });

  describe("types", () => {
    it("should render text input", () => {
      const component = renderer.create(
        <Input type="text" placeholder="test" />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render search input", () => {
      const component = renderer.create(
        <Input type="search" placeholder="test" />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
