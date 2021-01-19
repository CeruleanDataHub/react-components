import { mount } from "enzyme";
import React from "react";

import { CheckboxDropdown } from "./CheckboxDropdown";

const items = [
  { value: "some value", label: "Some item" },
  { value: "some other value", label: "Some other item" }
];

describe("CheckboxDropdown", () => {
  let component;
  let onClickMock;

  beforeEach(() => {
    onClickMock = jest.fn();

    component = mount(
      <CheckboxDropdown
        label="hello"
        items={items}
        isOpen
        onClick={onClickMock}
      />
    );
  });

  it("renders", () => {
    expect(component.render()).toMatchSnapshot();
  });

  it("does not call onClick yet", () => {
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it("when clicked, callback is called", () => {
    component.find("button").simulate("click");

    expect(onClickMock).toHaveBeenCalled();
  });

  it("should be able to select item from list", () => {
    component
      .find("input")
      .first()
      .simulate("change");

    expect(component.render()).toMatchSnapshot();
  });
});
