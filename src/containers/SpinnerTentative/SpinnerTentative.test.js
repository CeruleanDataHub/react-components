import React from "react";
import { mount } from "enzyme";
import SpinnerTentative from "./SpinnerTentative";

describe("SpinnerTentative", () => {
  let component;
  let conditionToBeResolved;

  beforeEach(() => {
    conditionToBeResolved = false;
  });

  it("renders", () => {
    component = mount(
      <SpinnerTentative condition={conditionToBeResolved}>
        Some content
      </SpinnerTentative>
    );

    expect(component).toMatchSnapshot();
  });

  it("when condition has not resolved, does not view content", () => {
    const content = component.find("div[data-test='content']");
    expect(content).not.toExist();
  });

  it("when condition resolves, views content", () => {
    component.setProps({ condition: true });

    const content = component.find("div[data-test='content']");
    expect(content).toExist();
  });
});
