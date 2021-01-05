import { mount } from "enzyme";
import React from "react";

import { Button } from "./Button";

describe("Button", () => {
  let component;
  let handleClickMock;

  beforeEach(() => {
    handleClickMock = jest.fn();
    component = mount(<Button onClick={handleClickMock}>Button</Button>);
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });

  it("given button without children, has no children", () => {
    component = mount(<Button onClick={() => {}} />);

    expect(component.find("button[data-button-test]").children()).not.toExist();
  });

  it("does not call onClick yet", () => {
    expect(handleClickMock).not.toHaveBeenCalled();
  });

  it("when button is clicked, should call callback function", () => {
    component.simulate("click");

    expect(handleClickMock).toHaveBeenCalled();
  });

  it("given 'color' prop, should have correct prop", () => {
    component = mount(
      <Button onClick={() => {}} color="blue">
        Button
      </Button>
    );

    expect(component.find("button[data-button-test]")).toHaveProp(
      "color",
      "blue"
    );
  });

  it("given 'icon' prop, should have correct prop", () => {
    component = mount(
      <Button onClick={() => {}} icon="chef-hat">
        Some content
      </Button>
    );

    expect(component.find("Icon[data-button-icon-test]")).toHaveProp(
      "name",
      "chef-hat"
    );
  });

  it("given 'onClick' prop, should have correct prop", () => {
    component = mount(<Button onClick={handleClickMock}>Button</Button>);

    expect(component.find("button[data-button-test]")).toHaveProp(
      "onClick",
      handleClickMock
    );
  });

  describe("Type", () => {
    ["button", "submit", "reset"].forEach(type => {
      it(`given 'type' ${type} prop, has correct prop`, () => {
        component = mount(
          <Button onClick={() => {}} type={type}>
            Button
          </Button>
        );

        expect(component.find("button[data-button-test]")).toHaveProp(
          "type",
          type
        );
      });
    });
  });

  it("given button with ref, should contain forwarded ref", () => {
    const ref = React.createRef();
    component = mount(
      <Button onClick={() => {}} ref={ref}>
        Button
      </Button>
    );

    expect(component.find("button").instance()).toEqual(ref.current);
  });
});
