import React from "react";

import { Cell, Grid } from "./Grid";

export default {
  title: "Grid",
  component: Grid
};

export const GridStory = () => (
  <Grid>
    <Cell>foo</Cell>
    <Cell>bar</Cell>
    <Cell>baz</Cell>
  </Grid>
);
