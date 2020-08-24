import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";

import humidity from "../../assets/images/humidity.svg";
import { Icon, names } from "./Icon";

describe("Icon", () => {
  describe("should render icon", () => {
    names.map(name =>
      it(name, () => {
        const component = renderer.create(<Icon name={name} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      })
    );
  });

  it("should render icon with custom styles", () => {
    const CustomIcon = styled.span`
      font-size: 1.5em;
      margin-right: 1.75rem;
    `;

    const component = renderer.create(<Icon name="home" as={CustomIcon} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render icon with custom icon image", () => {
    const component = renderer.create(<Icon customIcon={humidity} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
