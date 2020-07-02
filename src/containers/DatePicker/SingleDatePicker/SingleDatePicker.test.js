import MockDate from "mockdate";
import moment from "moment";
import React from "react";
import renderer from "react-test-renderer";

import { SingleDatePicker } from "./SingleDatePicker";

const mockDate = new Date("2020-06-19");

const before = () => {
  MockDate.set(mockDate);
};

const after = () => {
  MockDate.reset();
};

describe("SingleDatePicker", () => {
  beforeAll(before);
  afterAll(after);

  it("should render", () => {
    const component = renderer.create(<SingleDatePicker name="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with custom date format", () => {
    const component = renderer.create(
      <SingleDatePicker name="test-format" dateFormat="MM/DD/yyyy" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with two months shown", () => {
    const component = renderer.create(
      <SingleDatePicker name="test-months" monthsShown={2} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("SingleDatePicker with given date", () => {
  it("should render with given startDate", () => {
    const component = renderer.create(
      <SingleDatePicker name="test-date" startDate={moment("2020-01-01")} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
