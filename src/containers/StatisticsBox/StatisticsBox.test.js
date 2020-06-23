import React from "react";
import renderer from "react-test-renderer";

import { StatisticsBox } from "./StatisticsBox";

describe("StatisticsBox", () => {
  it("should render", () => {
    const component = renderer.create(
      <StatisticsBox title="Title" value={1} growth={0.3} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render green", () => {
    const component = renderer.create(
      <StatisticsBox title="Title" value={1} growth={0.3} greenValue />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render red", () => {
    const component = renderer.create(
      <StatisticsBox title="Title" value={1} growth={0.3} redValue />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render zero growth", () => {
    const component = renderer.create(
      <StatisticsBox title="Title" value={1} growth={0} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render positive growth", () => {
    const component = renderer.create(
      <StatisticsBox title="Title" value={1} growth={0.3} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render negative growth", () => {
    const component = renderer.create(
      <StatisticsBox title="Title" value={1} growth={-0.3} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should format large values", () => {
    const component = renderer.create(
      <StatisticsBox title="Title" value={10000000000} growth={0.3} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render two decimal points in growth", () => {
    const component = renderer.create(
      <StatisticsBox title="Title" value={1} growth={0.33333333} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
