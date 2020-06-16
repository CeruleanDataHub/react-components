import React from "react";

import { Application } from "./Application";
import { Card } from "./Card/Card";
import { Dashboard } from "./Dashboard/Dashboard";
import { Header } from "./Header/Header";
import { Menu } from "./Menu/Menu";
import { Navigation } from "./Navigation/Navigation";

export default {
  title: "Denim Data Hub",
  component: Application,
};

const menuItems = [
  {
    name: "Home",
    iconClass: "lnr-home",
  },
  {
    name: "Users",
    iconClass: "lnr-users",
  },
  {
    name: "Devices",
    iconClass: "lnr-rocket",
  },
  {
    name: "Costs",
    iconClass: "lnr-briefcase",
  },
];

export const AdminFrontpage = () => (
  <Application>
    <Header />
    <Navigation>
      <Menu items={menuItems} />
    </Navigation>
    <Dashboard>
      <Card icon="users" title="Users">
        100 users
      </Card>
      <Card icon="rocket" title="Devices">
        98 devices
      </Card>
      <Card icon="briefcase" title="Costs">
        300k € incured
      </Card>
    </Dashboard>
  </Application>
);
