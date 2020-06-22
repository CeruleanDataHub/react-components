import React from "react";
import renderer from "react-test-renderer";

import { Cell, Grid } from "./Grid";

describe("Grid", () => {
  it("should render grid", () => {
    const component = renderer.create(<Grid />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render grid with cell", () => {
    const component = renderer.create(
      <Grid>
        <Cell>Content</Cell>
      </Grid>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
