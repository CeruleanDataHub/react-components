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

export const GridColumnsPropStory = () => (
  <Grid columns="3fr 1fr 1fr">
    <Cell>foo</Cell>
    <Cell>bar</Cell>
    <Cell>baz</Cell>
  </Grid>
);
