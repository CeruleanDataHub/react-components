import React from "react";
import renderer from "react-test-renderer";

import { Card } from "./Card";

describe("Card", () => {
  it("should render card", () => {
    const component = renderer.create(<Card />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render card with icon", () => {
    const component = renderer.create(<Card title="Users" icon="users" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render card with children", () => {
    const component = renderer.create(<Card>Children textual content</Card>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render card with icon and children", () => {
    const component = renderer.create(
      <Card title="Users" icon="users">
        Children textual content
      </Card>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
