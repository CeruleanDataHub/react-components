import { withKnobs } from "@storybook/addon-knobs";
import React from "react";

import { Cell, Grid } from "../Grid/Grid";
import { KPICard } from "./KPICard";

export default {
  title: "KPICard",
  component: KPICard,
  decorators: [withKnobs]
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

export const KPICardNoGrowthPercentageStory = () => (
  <KPICard
    title="Logins / week"
    value={3789}
    growth={0}
    showPercentage={false}
  />
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

export const KPICardEuro = () => (
  <KPICard title="Euro" value={3789} currency="EUR" dataFormat="currency" />
);

export const KPICardUSD = () => (
  <KPICard title="USD" value={3789} currency="USD" dataFormat="currency" />
);

export const KPICardEuroWithoutPercentage = () => (
  <KPICard
    title="Euro"
    value={3789}
    currency="EUR"
    dataFormat="currency"
    showPercentage={false}
  />
);

export const KPICardUSDWithoutPercentage = () => (
  <KPICard
    title="USD"
    value={3789}
    currency="USD"
    dataFormat="currency"
    showPercentage={false}
  />
);

export const KPICardUSDWithIcon = () => (
  <KPICard
    title="USD"
    icon="chef-hat"
    value={3789}
    currency="USD"
    dataFormat="currency"
  />
);

export const KPICardBackgroundColor = () => (
  <Grid>
    <Cell>
      <KPICard
        title="Logins / week"
        value={3789}
        backgroundColor="tomato"
        growth={-0.145}
      />
    </Cell>
    <Cell>
      <KPICard
        title="Logins / month"
        value={17283}
        backgroundColor="olive"
        growth={0.87}
      />
    </Cell>
    <Cell>
      <KPICard
        title="Active users / week"
        value={1054}
        growth={-0.062}
        backgroundColor="plum"
        greenValue
      />
    </Cell>
    <Cell>
      <KPICard
        title="Active users / month"
        value={1870}
        growth={0.953}
        backgroundColor="orange"
        redValue
      />
    </Cell>
  </Grid>
);

export const KPICardBorderRadius = () => (
  <KPICard
    title="Logins / week"
    value={3789}
    growth={0.145}
    backgroundColor="tomato"
    borderRadius="15px"
  />
);
