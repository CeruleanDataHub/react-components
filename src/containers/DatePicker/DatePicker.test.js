import React from "react";
import renderer from "react-test-renderer";

import { DatePicker } from "./DatePicker";

const mockDate = new Date("2020-06-19");
const RealDate = Date;

describe("DatePicker with mocked date", () => {
  beforeAll(() => {
    global.Date = class extends RealDate {
      constructor() {
        super();
        return mockDate;
      }
    };
  });

  afterAll(() => {
    global.Date = RealDate;
  });

  it("should render", () => {
    const component = renderer.create(<DatePicker />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render DatePicker with custom dateFormat", () => {
    const component = renderer.create(<DatePicker dateFormat="MM/dd/yyyy" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render DatePicker with two months", () => {
    const component = renderer.create(<DatePicker monthsShown={2} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("DatePicker with given date", () => {
  it("should render DatePicker starting from date provided", () => {
    const component = renderer.create(
      <DatePicker startDate={new Date(2019, 5, 12)} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
