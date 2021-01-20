import { mount } from "enzyme";
import React from "react";

import { Tab } from "./Tab";

describe("Tab", () => {
  let component;
  let onClickMock;

  beforeEach(() => {
    onClickMock = jest.fn();
    component = mount(<Tab onClick={onClickMock} text="Some text" />);
  });

  it("renders", () => {
    expect(component.render()).toMatchSnapshot();
  });

  it("should not have icon", () => {
    expect(component.find("Icon[data-icon-test]")).not.toExist();
  });

  it("should not call onClick yet", () => {
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it("when onClick is called, should call callback function", () => {
    component.props().onClick();

    expect(onClickMock).toHaveBeenCalled();
  });

  it("given active prop, is active", () => {
    component = mount(<Tab onClick={() => {}} active />);

    expect(component.find("div[data-active-tab-test=true]")).toExist();
  });

  it("given icon prop, has icon", () => {
    component = mount(<Tab onClick={() => {}} icon="chef-hat" />);

    expect(component.find("Icon[data-icon-test]")).toExist();
  });
});
