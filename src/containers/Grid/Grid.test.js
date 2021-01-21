import React from "react";
import { mount } from "enzyme";

import { Cell, Grid } from "./Grid";

describe("Grid", () => {
  it("renders", () => {
    const component = mount(
      <Grid>
        <Cell>Some content</Cell>
      </Grid>
    );

    expect(component).toMatchHtmlSnapshot();
  });
});
