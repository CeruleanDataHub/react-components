import { mount } from "enzyme";
import React from "react";

import { Navigation } from "./Navigation";

describe("Navigation", () => {
  let component;
  let onMenuToggleMock;

  beforeEach(() => {
    onMenuToggleMock = jest.fn();
    component = mount(
      <Navigation onMenuToggle={onMenuToggleMock}>Some children</Navigation>
    );
  });

  it("renders", () => {
    expect(component).toMatchHtmlSnapshot();
  });

  it("does not call callback function yet", () => {
    expect(onMenuToggleMock).not.toHaveBeenCalled();
  });

  it("when called, calls callback function", () => {
    component.props().onMenuToggle();

    expect(onMenuToggleMock).toHaveBeenCalled();
  });

  it("given initial state is false, has correct icon", () => {
    component = mount(<Navigation menuInitialState={false} />);

    expect(component.find("Icon[data-icon-test]")).toHaveProp("name", "menu");
  });

  it("given no onMenuToggle is passed, when onMenuToggle is called, calls default props function", () => {
    component = mount(<Navigation />);

    const actual = component.props().onMenuToggle();

    expect(actual).toBeNull();
  });

  describe("Button within", () => {
    let button;

    beforeEach(() => {
      button = component.find("button");
    });

    it("has onClick", () => {
      expect(button).toHaveProp("onClick");
    });

    it("has Icon", () => {
      expect(button.find("Icon")).toExist();
    });
  });
});
