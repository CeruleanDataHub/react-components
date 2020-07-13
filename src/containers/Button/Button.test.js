import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";

import { Button } from "./Button";

const colors = ["crimson", "tomato", "khaki"];

describe("Button", () => {
  it("should render Button", () => {
    const component = renderer.create(<Button>Button</Button>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Button with props", () => {
    const component = renderer.create(<Button color="blue">Button</Button>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should accept 'as' property", () => {
    const CustomButton = styled.button`
      background: black;
    `;

    const component = renderer.create(
      <Button color="blue" as={CustomButton}>
        Button
      </Button>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should accept onClick prop", () => {
    const component = renderer.create(
      <Button color="blue" onClick={() => null}>
        Button
      </Button>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("type", () => {
    ["button", "submit", "reset"].forEach(type => {
      it(`should render ${type} button`, () => {
        const component = renderer.create(<Button type={type}>Button</Button>);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  it("should fire onClick event callback function", () => {
    const handleClick = jest.fn();
    const component = shallow(<Button onClick={handleClick}>Button</Button>);
    expect(handleClick).not.toHaveBeenCalled();
    component.simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("should call default props onClick function when no onClick property is passed", () => {
    const component = renderer.create(<Button>Button</Button>);
    component.root.props.onClick();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Should render Button color based on props", () => {
    colors.map(color =>
      it("renders with correct color", () => {
        const component = shallow(<Button color={color}>Button</Button>);
        expect(component).toHaveStyleRule("color", color);
        expect(component).toHaveStyleRule("border", `1px solid ${color}`);
      })
    );
  });
});
