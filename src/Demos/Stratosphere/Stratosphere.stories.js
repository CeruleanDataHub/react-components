import { withKnobs } from "@storybook/addon-knobs";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { Button } from "../../containers/Button/Button";
import { Card } from "../../containers/Card/Card";
import { Line } from "../../containers/Chart/Line/Line";
import { DataTable } from "../../containers/DataTable/DataTable";
import { Dropdown } from "../../containers/Dropdown/Dropdown";
import { Fullscreen } from "../../containers/Fullscreen/Fullscreen";
import { Cell, Grid } from "../../containers/Grid/Grid";
import { Icon } from "../../containers/Icon/Icon";
import { KPICard } from "../../containers/KPICard/KPICard";
import { Menu } from "../../containers/Menu/Menu";
import { Navigation } from "../../containers/Navigation/Navigation";
import { Popover } from "../../containers/Popover/Popover";
import { Typography } from "../../containers/Typography/Typography";

const logins = [
  8052,
  2152,
  7085,
  6063,
  9790,
  7649,
  1298,
  8123,
  6219,
  9943,
  9271,
  9072,
  1969,
  3831,
  3241,
  3308,
  3957,
  8083,
  4220,
  5789,
  6752,
  2861,
  4336,
  3286,
  4831,
  7843,
  4559,
  7176,
  6384,
  6083
];

const activeUsers = [
  1068,
  9641,
  3667,
  9787,
  2471,
  7648,
  5628,
  3380,
  4777,
  1040,
  4612,
  7332,
  4961,
  6425,
  1597,
  4431,
  9885,
  1966,
  3030,
  4524,
  4543,
  9144,
  3796,
  6210,
  6932,
  4136,
  5582,
  9090,
  8860,
  2735
];

const categories = [
  "Jun 26",
  "Jun 27",
  "Jun 28",
  "Jun 29",
  "Jun 30",
  "Jul 1",
  "Jul 2",
  "Jul 3",
  "Jul 4",
  "Jul 5",
  "Jul 6",
  "Jul 7",
  "Jul 8",
  "Jul 9",
  "Jul 10",
  "Jul 11",
  "Jul 12",
  "Jul 13",
  "Jul 14",
  "Jul 15",
  "Jul 16",
  "Jul 17",
  "Jul 18",
  "Jul 19",
  "Jul 20",
  "Jul 21",
  "Jul 22",
  "Jul 23",
  "Jul 24",
  "Jul 25",
  "Jul 26",
  "Jul 27",
  "Jul 28",
  "Jul 29",
  "Jul 30",
  "Jul 31",
  "Aug 1",
  "Aug 2",
  "Aug 3",
  "Aug 4",
  "Aug 5",
  "Aug 6",
  "Aug 7",
  "Aug 8",
  "Aug 9",
  "Aug 10",
  "Aug 11",
  "Aug 12",
  "Aug 13",
  "Aug 14"
];

const splineXAxis = [{ categories }];

const splineSeries = [
  { name: "Logins", data: logins },
  { name: "Active users", data: activeUsers }
];

const dropdownItems = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" },
  { value: "3", label: "Item 3" },
  { value: "4", label: "Item 4" },
  { value: "5", label: "Item 5" }
];

const LinkComponent = ({ to, children }) => (
  <a
    href={to}
    onClick={event => {
      event.preventDefault();
      // eslint-disable-next-line no-console
      console.log(`${to} menu link clicked`);
    }}
  >
    {children}
  </a>
);

LinkComponent.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
};

LinkComponent.defaultProps = {
  to: "",
  children: ""
};

const menuItems = [
  {
    name: "Dashboard",
    icon: "dashboard",
    LinkComponent,
    to: "#dashboard"
  },
  {
    name: "Users",
    icon: "users",
    LinkComponent,
    to: "#users"
  },
  {
    name: "Devices",
    icon: "rocket",
    LinkComponent,
    to: "#devices"
  },
  {
    name: "Settings",
    icon: "control-panel",
    LinkComponent,
    to: "#settings"
  }
];

const Container = styled.div`
  background: ${({ theme }) => theme.keyperBackground};
  color: #999999;
`;

const Content = styled.div`
  padding: 1rem;
`;

const HeaderRow = styled.div`
  margin-bottom: 2rem;
`;

const Logo = styled.div`
  width: 150px;
  height: 70px;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3667&q=80);
`;

const KPIGrid = styled.div`
  margin-bottom: 0.5rem;
`;

const KPICell = styled.div`
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;
`;

const GridWithCollapsibleMenu = styled(Grid)`
  grid-template-columns: ${({ menuOpen }) => (menuOpen ? 10 : 4)}rem auto;
`;

const FullscreenOnRight = styled.div`
  position: absolute;
  z-index: 1;
  right: 10px;
  top: 10px;
  font-size: 1.5rem;
`;

const PositionRelative = styled.div`
  position: relative;
`;

const NavigatonContainer = styled.div`
  color: ${({ theme }) => theme.menuColor};

  button {
    color: ${({ theme }) => theme.menuColor};
  }
`;

const Centered = styled.div`
  text-align: center;
`;

const UserPicture = styled.div`
  width: 3rem;
  height: 3rem;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3634&q=80);
  border-radius: 100%;
  margin-left: 1rem;
  cursor: pointer;
`;

const UserPictureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const CardGrid = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.6rem;
`;

const SearchButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  span {
    margin-right: 0.4rem;
  }
`;

// eslint-disable-next-line no-console
const mockonlick = () => console.log("clicked on element");

export const StratosphereDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const containerRef = useRef(null);

  return (
    <Container>
      <Typography fontFamily="openSans">
        <GridWithCollapsibleMenu menuOpen={menuOpen}>
          <Cell as={NavigatonContainer}>
            <Navigation onMenuToggle={setMenuOpen} menuInitialState={menuOpen}>
              <Menu items={menuItems} menuOpen={menuOpen} />
            </Navigation>
          </Cell>
          <Cell as={Content}>
            <Grid as={HeaderRow}>
              <Cell>
                <Logo />
              </Cell>
              <Cell as={UserPictureContainer}>
                <Dropdown
                  label="Customer name"
                  items={dropdownItems}
                  isOpen={dropdownOpen}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>

            <Grid as={KPIGrid}>
              <Cell as={Centered}>June</Cell>
              <Cell as={Centered}>July Forecast</Cell>
            </Grid>

            <Grid as={KPIGrid}>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Devices / <prev month>"
                  value={3789}
                  growth={-0.145}
                  redValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Users / <prev month>"
                  value={17283}
                  growth={0.87}
                  redValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Devices Costs"
                  value={1054}
                  growth={-0.062}
                  greenValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Users Costs"
                  value={1870}
                  growth={0.953}
                  greenValue
                />
              </Cell>
            </Grid>

            <Grid as={KPIGrid}>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Devices Costs"
                  value={3789}
                  dataFormat="currency"
                  currency="EUR"
                  showPercentage={false}
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Users Costs"
                  value={17283}
                  dataFormat="currency"
                  currency="EUR"
                  showPercentage={false}
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Devices Costs"
                  value={1054}
                  dataFormat="currency"
                  currency="EUR"
                  showPercentage={false}
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Users Costs"
                  value={1870}
                  dataFormat="currency"
                  currency="EUR"
                  showPercentage={false}
                />
              </Cell>
            </Grid>

            <Grid>
              <Cell as={PositionRelative}>
                <Fullscreen onClick={mockonlick} as={FullscreenOnRight} />
                <Line xAxis={splineXAxis} series={splineSeries} />
              </Cell>
              <Cell as={PositionRelative}>
                <Fullscreen onClick={mockonlick} as={FullscreenOnRight} />
                <Line xAxis={splineXAxis} series={splineSeries} />
              </Cell>
            </Grid>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

export const StratosphereUsersAndRolesDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const containerRef = useRef(null);

  return (
    <Container>
      <Typography fontFamily="openSans">
        <GridWithCollapsibleMenu menuOpen={menuOpen}>
          <Cell as={NavigatonContainer}>
            <Navigation onMenuToggle={setMenuOpen} menuInitialState={menuOpen}>
              <Menu items={menuItems} menuOpen={menuOpen} />
            </Navigation>
          </Cell>
          <Cell as={Content}>
            <Grid as={HeaderRow}>
              <Cell>
                <Logo />
              </Cell>
              <Cell as={UserPictureContainer}>
                <Dropdown
                  label="Customer name"
                  items={dropdownItems}
                  isOpen={dropdownOpen}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Typography color="black" size="large">
              Users &amp; Roles
            </Typography>
            <Grid as={KPIGrid}>
              <Cell as={KPICell}>
                <KPICard
                  title="Largest Amount of Logins in a Day"
                  value={3789}
                  growth={-0.145}
                  redValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Users / <prev month>"
                  value={17283}
                  growth={0.87}
                  redValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Users / <this month> so far"
                  value={1054}
                  growth={-0.062}
                  greenValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active Users / <this month>"
                  value={1870}
                  growth={0.953}
                  greenValue
                />
              </Cell>
            </Grid>
            <Grid as={CardGrid}>
              <Cell>
                <LinkComponent to="#manage-users">
                  <Card title="Manage Users" icon="user" />
                </LinkComponent>
              </Cell>
              <Cell>
                <LinkComponent to="#manage-users">
                  <Card title="Manage Roles" icon="rocket" />
                </LinkComponent>
              </Cell>
              <Cell>
                <LinkComponent to="#manage-users">
                  <Card title="Manage Groups" icon="users" />
                </LinkComponent>
              </Cell>
            </Grid>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

// eslint-disable-next-line react/prop-types
const UserDataCell = ({ id }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const moreRef = useRef(null);

  return (
    <>
      {/* TODO: popover is in incorrect location */}
      <Button onClick={() => setPopoverOpen(!popoverOpen)} forwardRef={moreRef}>
        <Icon name="more" />
      </Button>
      <Popover isOpen={popoverOpen} containerRef={moreRef}>
        <p>{id}</p>
      </Popover>
    </>
  );
};

const manageUsersData = {
  data: [
    {
      id: 1,
      name: "Conan the Barbarian",
      logins: "1982",
      lastLogin: "2 days ago"
    },
    {
      id: 2,
      name: "Conan the Barbarian 2",
      logins: "1984",
      lastLogin: "24 days ago"
    },
    {
      id: 3,
      name: "Conan the Barbarian 3",
      logins: "1985",
      lastLogin: "2 days ago"
    }
  ],
  columns: [
    { id: 1, name: "Name", selector: "name" },
    { id: 2, name: "Logins", selector: "logins" },
    { id: 3, name: "Last login", selector: "lastLogin" },
    {
      id: 4,
      name: "",
      selector: "actions",
      // eslint-disable-next-line react/prop-types
      cell: ({ id }) => <UserDataCell id={id} />
    }
  ]
};

export const StratosphereManageUsersDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const containerRef = useRef(null);

  return (
    <Container>
      <Typography fontFamily="openSans">
        <GridWithCollapsibleMenu menuOpen={menuOpen}>
          <Cell as={NavigatonContainer}>
            <Navigation onMenuToggle={setMenuOpen} menuInitialState={menuOpen}>
              <Menu items={menuItems} menuOpen={menuOpen} />
            </Navigation>
          </Cell>
          <Cell as={Content}>
            <Grid as={HeaderRow}>
              <Cell>
                <Logo />
              </Cell>
              <Cell as={UserPictureContainer}>
                <Dropdown
                  label="Customer name"
                  items={dropdownItems}
                  isOpen={dropdownOpen}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Typography color="black" size="large">
              <Icon name="arrow-left-circle" />
              Manage Users
            </Typography>
            <form
              onSubmit={() => {
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid>
                <Cell>
                  <SearchInput type="search" />
                </Cell>
                <Cell>
                  <Dropdown
                    label="Customer name"
                    items={dropdownItems}
                    isOpen={searchDropdownOpen}
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                  />
                </Cell>
                <Cell>
                  <Button type="submit" as={SearchButton}>
                    <Icon name="search" />
                    Search
                  </Button>
                </Cell>
              </Grid>
            </form>

            <DataTable
              columns={manageUsersData.columns}
              data={manageUsersData.data}
            />
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

export default {
  title: "Stratosphere Demo",
  component: StratosphereDemo,
  decorators: [withKnobs]
};
