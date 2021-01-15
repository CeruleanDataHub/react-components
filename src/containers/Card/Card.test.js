import React from "react";
import { mount } from "enzyme";

import { Card } from "./Card";

describe("Card", () => {
  let component;

  beforeEach(() => {
    component = mount(<Card>Some children</Card>);
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });

  it("given icon, has icon", () => {
    component = mount(<Card icon="users" />);

    expect(component.find("Icon[data-icon-test]")).toExist();
  });

  it("given title, has correct title", () => {
    component = mount(<Card title="some title" />);

    expect(
      component
        .find("h3[data-title-test]")
        .children()
        .html()
    ).toEqual("some title");
  });
});
