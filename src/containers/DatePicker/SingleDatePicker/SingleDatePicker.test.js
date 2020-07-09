import { mount } from "enzyme";
import moment from "moment";
import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../../../styles/theme";
import { SingleDatePicker } from "./SingleDatePicker";

jest.mock("moment", () => {
  const mockedMoment = jest.requireActual("moment");
  const mockedDate = "2020-06-19";
  const momentInstance = mockedMoment(mockedDate);
  jest.spyOn(momentInstance, "format");

  function fakeMoment() {
    return momentInstance;
  }

  Object.assign(fakeMoment, mockedMoment);

  return fakeMoment;
});

const themes = [
  { name: "light", theme: lightTheme },
  { name: "dark", theme: darkTheme }
];

themes.forEach(({ name, theme }) => {
  describe(`SingleDatePicker ${name}`, () => {
    it("should render", () => {
      const component = renderer.create(
        <ThemeProvider theme={theme}>
          <SingleDatePicker name="test" onDateChange={() => null} />
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render with custom date format", () => {
      const component = renderer.create(
        <ThemeProvider theme={theme}>
          <SingleDatePicker
            name="test-format"
            dateFormat="MM/DD/yyyy"
            onDateChange={() => null}
          />
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render with two months shown", () => {
      const component = renderer.create(
        <ThemeProvider theme={theme}>
          <SingleDatePicker
            name="test-months"
            monthsShown={2}
            onDateChange={() => null}
          />
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should call onDateChange event handler when date is changed", () => {
      const handleClick = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={theme}>
          <SingleDatePicker
            name="test-onDatesChange"
            onDateChange={handleClick}
          />
        </ThemeProvider>
      );
      const event = {
        target: {
          value: "2020-07-12"
        }
      };
      expect(handleClick).not.toHaveBeenCalled();
      wrapper.find("input").simulate("change", event);

      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe("SingleDatePicker with given date", () => {
    it("should render with given startDate", () => {
      const component = renderer.create(
        <ThemeProvider theme={theme}>
          <SingleDatePicker
            name="test-date"
            startDate={moment("2020-01-01")}
            onDateChange={() => null}
          />
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
