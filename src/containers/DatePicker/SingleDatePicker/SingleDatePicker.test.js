import moment from "moment";
import React from "react";
import renderer from "react-test-renderer";

import { SingleDatePicker } from "./SingleDatePicker";

const mockDate = new Date("2020-06-19");
const RealDate = Date;

describe("SingleDatePicker", () => {
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
    const component = renderer.create(<SingleDatePicker />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with custom date format", () => {
    const component = renderer.create(
      <SingleDatePicker dateFormat="MM/DD/yyyy" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with two months shown", () => {
    const component = renderer.create(<SingleDatePicker monthsShown={2} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("SingleDatePicker with given date", () => {
  it("should render with given startDate", () => {
    const component = renderer.create(
      <SingleDatePicker startDate={moment("2020-01-01")} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
