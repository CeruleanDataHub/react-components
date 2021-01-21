import { mount } from "enzyme";
import React from "react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  let component;
  let onChangeMock;

  beforeEach(() => {
    onChangeMock = jest.fn();

    component = mount(
      <Checkbox value={1} label="Some label" onChange={onChangeMock} />
    );
  });

  it("renders", () => {
    expect(component).toMatchHtmlSnapshot();
  });

  it("should not call onChange yet", () => {
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("onChange, when called, callback is called", () => {
    component
      .find("input[data-checkbox-test]")
      .props()
      .onChange();

    expect(onChangeMock).toHaveBeenCalled();
  });

  it("given checkbox is checked, is checked", () => {
    component = mount(<Checkbox onChange={onChangeMock} checked />);

    const actual = component.find("input[data-checkbox-test]");

    expect(actual).toBeChecked();
  });
});
