import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { Dropdown } from "./Dropdown";

const items = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" }
];

describe("Dropdown", () => {
  it("should render dropdown", () => {
    const component = shallow(<Dropdown />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render dropdown with items and clicked open", () => {
    const component = shallow(<Dropdown items={items} isOpen />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
