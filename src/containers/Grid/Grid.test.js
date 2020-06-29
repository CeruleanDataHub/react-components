import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";

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

  it("should render grid with extended styles", () => {
    const CustomGrid = styled.div`
      margin-bottom: 0.5rem;
    `;

    const component = renderer.create(
      <Grid as={CustomGrid}>
        <Cell>Content</Cell>
      </Grid>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render when extending the styles", () => {
    const CustomGrid = styled(Grid)`
      grid-template-columns: 4rem auto;
    `;

    const component = renderer.create(
      <CustomGrid>
        <Cell>Content</Cell>
      </CustomGrid>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
