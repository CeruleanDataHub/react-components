import React from "react";

import { Cell, Grid } from "../Grid/Grid";
import { StatisticsBox } from "./StatisticsBox";

export default {
  title: "StatisticsBox",
  component: StatisticsBox
};

export const StatisticsBoxStory = () => (
  <StatisticsBox title="Value" value={0} growth={0} />
);

export const StatisticsBoxPositiveGrowthStory = () => (
  <StatisticsBox title="Logins / week" value={3789} growth={0.145} />
);

export const StatisticsBoxNegativeGrowthStory = () => (
  <StatisticsBox title="Logins / week" value={3789} growth={-0.145} />
);

export const StatisticsBoxZeroGrowthStory = () => (
  <StatisticsBox title="Logins / week" value={3789} growth={0} />
);

export const StatisticsBoxGreenValueStory = () => (
  <StatisticsBox title="Logins / week" value={3789} growth={0.145} greenValue />
);

export const StatisticsBoxRedValueStory = () => (
  <StatisticsBox title="Logins / week" value={3789} growth={-0.145} redValue />
);

export const StatisticsBoxGridStory = () => (
  <Grid>
    <Cell>
      <StatisticsBox title="Logins / week" value={3789} growth={-0.145} />
    </Cell>
    <Cell>
      <StatisticsBox title="Logins / month" value={17283} growth={0.87} />
    </Cell>
    <Cell>
      <StatisticsBox
        title="Active users / week"
        value={1054}
        growth={-0.062}
        greenValue
      />
    </Cell>
    <Cell>
      <StatisticsBox
        title="Active users / month"
        value={1870}
        growth={0.953}
        redValue
      />
    </Cell>
  </Grid>
);
