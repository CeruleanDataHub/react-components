import React from "react";
import { mount } from "enzyme";

import { Header } from "./Header";

describe("Header", () => {
  let component;

  beforeEach(() => {
    component = mount(<Header />);
  });

  it("renders", () => {
    expect(component).toMatchHtmlSnapshot();
  });
});
