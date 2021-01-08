import React from "react";

import { mount } from "enzyme";

import { KPICard } from "./KPICard";

describe("KPICard", () => {
  let component;

  beforeEach(() => {
    component = mount(
      <KPICard
        title="Some title"
        value={42}
        growth={0}
        showPercentage={false}
        currency="EUR"
        dataFormat="currency"
        greenValue
        backgroundColor="tomato"
        borderRadius="15px"
      />
    );
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });

  it("given different currency, renders", () => {
    component = mount(<KPICard currency="USD" />);

    expect(component).toMatchSnapshot();
  });

  it("given different props, renders", () => {
    component = mount(
      <KPICard
        title="Some other title"
        growth={42}
        dataFormat="decimal"
        redValue
        showPercentage
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("given negative growth, renders", () => {
    component = mount(<KPICard growth={-42} />);

    expect(component).toMatchSnapshot();
  });

  it("given large value, has formatted value", () => {
    component = mount(<KPICard value={420000000000} />);

    const formattedValue = component.find("div[data-cell-test]").text();

    expect(formattedValue).toEqual("420,000,000,000");
  });

  it("given large decimal, has formatted decimal", () => {
    component = mount(<KPICard growth={0.33333333} />);

    const formattedValue = component.find("span[data-flex-row-test]").text();

    expect(formattedValue).toEqual("+33.33%");
  });

  it("given icon, has icon", () => {
    component = mount(<KPICard icon="chef-hat" />);

    const icon = component.find("Icon[data-icon-test]");

    expect(icon).toExist();
  });
});
