import { mount } from "enzyme";
import React from "react";

import { Select } from "./Select";

describe("Select", () => {
  let component;
  let itemsStub;

  beforeEach(() => {
    itemsStub = [{ id: "1", value: "some value" }];
    component = mount(<Select items={itemsStub} />);
  });

  it("renders", () => {
    expect(component.render()).toMatchSnapshot();
  });

  it("has an option with value as text", () => {
    expect(component.find("option")).toHaveText("some value");
  });

  it("given item with name, has an option with name as text", () => {
    component = mount(
      <Select items={[{ id: "1", value: "some value", name: "some name" }]} />
    );

    expect(component.find("option")).toHaveText("some name");
  });

  it("given selected option, has option selected", () => {
    component = mount(<Select selectedOption="some selected option" />);

    expect(component.find("select")).toHaveValue("some selected option");
  });

  it("given items group, has options grouped", () => {
    const itemsGroupStub = [
      {
        group: "some group",
        children: [
          { id: "1", value: "some value" },
          { id: "2", value: "some other value" }
        ]
      },
      {
        group: "some other group",
        children: [
          {
            id: "3",
            value:
              "Extra long line of text which will overflow the select container."
          }
        ]
      }
    ];

    component = mount(<Select items={itemsGroupStub} />);

    expect(component.find("optgroup")).toExist();
  });

  it("given onChange, when called, calls callback function", () => {
    const onChangeMock = jest.fn();
    component = mount(<Select onChange={onChangeMock} />);

    component.props().onChange();

    expect(onChangeMock).toHaveBeenCalled();
  });

  it("given items with indentation, has an option with correct amount of non-breaking spaces prefixed to the value", () => {
    component = mount(
      <Select items={[{ id: "1", indentLevel: 2, value: "some value" }]} />
    );

    expect(component.find("option")).toHaveText("  some value");
  });
});
