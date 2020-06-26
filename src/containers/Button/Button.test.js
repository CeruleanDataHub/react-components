import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";

import { Button } from "./Button";

const colors = ["crimson", "tomato", "khaki"];

describe("Button", () => {
  it("should render Button", () => {
    const component = renderer.create(<Button />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Button with props", () => {
    const component = renderer.create(<Button text="Button" color="blue" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should accept 'as' property", () => {
    const CustomButton = styled.button`
      background: black;
    `;

    const component = renderer.create(
      <Button text="Button" color="blue" as={CustomButton} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
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
