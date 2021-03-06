import React from "react";
import { mount } from "enzyme";

import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  let component;
  let onClickMock;

  beforeEach(() => {
    onClickMock = jest.fn();

    component = mount(<Dropdown onClick={onClickMock}>Some content</Dropdown>);
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });

  it("does not call onClick yet", () => {
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it("given open dropdown, should show itemList", () => {
    component = mount(
      <Dropdown onClick={onClickMock} isOpen>
        Some content
      </Dropdown>
    );

    const itemList = component.find("[data-item-list-test]");

    expect(itemList).toExist();
  });

  describe("Button within", () => {
    let button;

    beforeEach(() => {
      button = component.find("button[data-button-test]");
    });

    it("has onClick", () => {
      expect(button).toHaveProp("onClick", onClickMock);
    });

    it("when clicked, calls callback function", () => {
      button.simulate("click");

      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
