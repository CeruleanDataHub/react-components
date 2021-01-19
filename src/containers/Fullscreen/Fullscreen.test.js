import { mount } from "enzyme";
import React from "react";
import styled from "styled-components";

import { Fullscreen } from "./Fullscreen";

describe("Fullscreen", () => {
  let onClickMock;
  let component;

  beforeEach(() => {
    onClickMock = jest.fn();
    component = mount(<Fullscreen onClick={onClickMock} />);
  });

  it("should render", () => {
    expect(component.render()).toMatchSnapshot();
  });

  it("does not call onClick yet", () => {
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it("should fire onClick event callback function", () => {
    component.simulate("click");
    expect(onClickMock).toHaveBeenCalled();
  });

  it("given 'as' prop, should have correct prop", () => {
    const Custom = styled.div``;

    component = mount(<Fullscreen onClick={onClickMock} as={Custom} />);

    expect(component).toMatchSnapshot();
  });
});
