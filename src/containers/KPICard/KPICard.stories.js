import React from "react";

import { Cell, Grid } from "../Grid/Grid";
import { KPICard } from "./KPICard";

export default {
  title: "KPICard",
  component: KPICard
};

export const KPICardStory = () => (
  <KPICard title="Value" value={0} growth={0} />
);

export const KPICardPositiveGrowthStory = () => (
  <KPICard title="Logins / week" value={3789} growth={0.145} />
);

export const KPICardNegativeGrowthStory = () => (
  <KPICard title="Logins / week" value={3789} growth={-0.145} />
);

export const KPICardZeroGrowthStory = () => (
  <KPICard title="Logins / week" value={3789} growth={0} />
);

export const KPICardGreenValueStory = () => (
  <KPICard title="Logins / week" value={3789} growth={0.145} greenValue />
);

export const KPICardRedValueStory = () => (
  <KPICard title="Logins / week" value={3789} growth={-0.145} redValue />
);

export const KPICardGreenValueZeroGrowthStory = () => (
  <KPICard title="Logins / week" value={3789} growth={0} greenValue />
);

export const KPICardRedValueZeroGrowthStory = () => (
  <KPICard title="Logins / week" value={3789} growth={0} redValue />
);

export const KPICardGridStory = () => (
  <Grid>
    <Cell>
      <KPICard title="Logins / week" value={3789} growth={-0.145} />
    </Cell>
    <Cell>
      <KPICard title="Logins / month" value={17283} growth={0.87} />
    </Cell>
    <Cell>
      <KPICard
        title="Active users / week"
        value={1054}
        growth={-0.062}
        greenValue
      />
    </Cell>
    <Cell>
      <KPICard
        title="Active users / month"
        value={1870}
        growth={0.953}
        redValue
      />
    </Cell>
  </Grid>
);
