import {mount} from "enzyme";
import React from "react";
import styled from "styled-components";

import {Button} from "./Button";

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

  it("does not call onClick yet", () => {
    expect(handleClickMock).not.toHaveBeenCalled();
  })

  it("when button is clicked, should call callback function", () => {
    component.simulate("click");

    expect(handleClickMock).toHaveBeenCalled();
  });

  it("should have empty string as default value for color prop", () => {
    expect(component).toHaveProp('color', '')
  });

  it("given 'as' prop, should have correct prop", () => {
    const CustomButton = styled.button`
      background: black;
    `;

    component = mount(<Button onClick={() => {}} as={CustomButton}>Button</Button>);

    expect(component).toHaveProp('as', CustomButton)
  });

  it("given 'onClick' prop, should have correct prop", () => {
    component = mount(<Button onClick={handleClickMock}>Button</Button>);

    expect(component).toHaveProp('onClick', handleClickMock)
  });

  describe("Type", () => {
    ["button", "submit", "reset"].forEach(type => {
      it(`given 'type' ${type} prop, has correct prop`, () => {
        component = mount(<Button onClick={() => {}} type={type}>Button</Button>);

        expect(component).toHaveProp('type', type);
      });
    });
  });

  it("given button with ref, should contain forwarded ref", () => {
    const ref = React.createRef();
    component = mount(<Button onClick={() => {}} ref={ref}>Button</Button>);

    expect(component.find("button").instance()).toEqual(ref.current);
  });
});
