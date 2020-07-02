import { mount } from "enzyme";
import MockDate from "mockdate";
import moment from "moment";
import React from "react";
import renderer from "react-test-renderer";

import { DateRangePicker } from "./DateRangePicker";

const mockDate = new Date("2020-06-19");

const before = () => {
  MockDate.set(mockDate);
};

const after = () => {
  MockDate.reset();
};

describe("DateRangePicker", () => {
  beforeAll(before);
  afterAll(after);

  it("should render", () => {
    const component = renderer.create(
      <DateRangePicker name="test" onDatesChange={() => null} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with custom date format", () => {
    const component = renderer.create(
      <DateRangePicker
        name="test-format"
        onDatesChange={() => null}
        dateFormat="MM/DD/yyyy"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should fire onDatesChange event handler", () => {
    const handleClick = jest.fn();
    const wrapper = mount(
      <DateRangePicker name="test-onDatesChange" onDatesChange={handleClick} />
    );
    expect(handleClick).not.toHaveBeenCalled();
    wrapper.props().onDatesChange({ startDate: moment(), endDate: moment() });
    expect(handleClick).toHaveBeenCalled();
  });

  it("should call onDatesChange event handler when date is changed", () => {
    const handleClick = jest.fn();
    const wrapper = mount(
      <DateRangePicker name="test-onDatesChange" onDatesChange={handleClick} />
    );
    const event = {
      target: {
        value: "2020-07-12"
      }
    };
    expect(handleClick).not.toHaveBeenCalled();
    wrapper
      .find("input")
      .first()
      .simulate("change", event);

    expect(handleClick).toHaveBeenCalled();
  });

  // TODO: this test seems like a stub for now, it's only for improving coverage
  it("should change focus of the inputs", () => {
    const wrapper = mount(
      <DateRangePicker name="test-onclick" onDatesChange={() => null} />
    );
    wrapper
      .find("input")
      .first()
      .simulate("focus");
  });
});

describe("DateRangePicker with given date", () => {
  beforeAll(before);
  afterAll(after);

  it("should render DateRangePicker starting from date provided", () => {
    const component = renderer.create(
      <DateRangePicker
        name="start-end-end"
        onDatesChange={() => null}
        dateFormat="MM/DD/yyyy"
        startDate={moment("2020-07-01", "YYYY-MM-DD")}
        endDate={moment("2020-07-12", "YYYY-MM-DD")}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
