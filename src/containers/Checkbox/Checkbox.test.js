import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../../styles/theme";
import { Checkbox } from "./Checkbox";

const wrapWithTheme = (fn, theme, children) => {
  return fn(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

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

  it("should render Checkbox with value and label", () => {
    const component = renderer.create(<Checkbox value={1} label="Test" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Checkbox with value and label, and be checked", () => {
    const component = renderer.create(
      <Checkbox value={1} label="Test" checked />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should accept onChange function", () => {
    const component = renderer.create(
      <Checkbox value={1} label="Test" onChange={() => null} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should fire onChange event callback function", () => {
    const handleChange = jest.fn();
    const wrapper = mount(
      <Checkbox value={1} label="Test" onChange={handleChange} />
    );
    expect(handleChange).not.toHaveBeenCalled();
    wrapper.find("input").simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });

  it("should call default props onChange function when no onChange property is passed", () => {
    const component = renderer.create(<Checkbox value={1} label="Test" />);
    const tree = component.toJSON();
    component.root.props.onChange();
    expect(tree).toMatchSnapshot();
  });

  it("applies default styles", () => {
    const component = mount(<Checkbox />);
    expect(component.find("div")).toHaveStyleRule("border", "1px solid #999");
    expect(component.find("div")).toHaveStyleRule("background", "transparent");
  });

  it("changes styles according to props in light theme", () => {
    const component = wrapWithTheme(mount, lightTheme, <Checkbox checked />);
    expect(component.find("div")).toHaveStyleRule(
      "border",
      "1px solid #2C908F"
    );
    expect(component.find("div")).toHaveStyleRule("background", "#2C908F");
  });

  it("changes styles according to props in dark theme", () => {
    const component = wrapWithTheme(mount, darkTheme, <Checkbox checked />);
    expect(component.find("div")).toHaveStyleRule(
      "border",
      "1px solid #8fef7e"
    );
    expect(component.find("div")).toHaveStyleRule("background", "#8fef7e");
  });
});
