import { withKnobs } from "@storybook/addon-knobs";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { Button } from "../../containers/Button/Button";
import { Card } from "../../containers/Card/Card";
import { Line } from "../../containers/Chart/Line/Line";
import { Checkbox } from "../../containers/Checkbox/Checkbox";
import { Confirm } from "../../containers/Confirm/Confirm";
import { DataTable } from "../../containers/DataTable/DataTable";
import { Dropdown } from "../../containers/Dropdown/Dropdown";
import { Fullscreen } from "../../containers/Fullscreen/Fullscreen";
import { Cell, Grid } from "../../containers/Grid/Grid";
import { Icon } from "../../containers/Icon/Icon";
import { Input } from "../../containers/Input/Input";
import { KPICard } from "../../containers/KPICard/KPICard";
import { Menu } from "../../containers/Menu/Menu";
import { Modal } from "../../containers/Modal/Modal";
import { Navigation } from "../../containers/Navigation/Navigation";
import { Popover } from "../../containers/Popover/Popover";
import { Tab } from "../../containers/Tab/Tab";
import { TreeView } from "../../containers/TreeView/TreeView";
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
  height: 100%;
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

const ListWrapper = styled.div`
  width: 100%;
  text-align: start;
`;

const PopoverContentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PopoverContentListItem = styled.li`
  padding: 0.5em 3em 0.5em 1.25em;
  display: block;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    background: papayawhip;
  }
`;

const ListItemIcon = styled.span`
  font-size: 0.75em;
  margin-right: 0.5rem;
`;

const ListDivider = styled.div`
  margin: 0.25em 0;
  border: 1px solid #ddd;
`;

const CardGrid = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
`;

const ButtonWithIcon = styled.button`
  padding: 0.6rem;
  span {
    margin-right: 0.4rem;
  }
`;

const SearchButton = styled(ButtonWithIcon)`
  width: 100%;
`;

const GridContentRight = styled.div`
  grid-column-end: none;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

const TextAlignRight = styled.div`
  text-align: right;
`;

const IconMarginRight = styled.div`
  margin-right: 0.5rem;
`;

const TreeViewContainer = styled.div`
  height: 500px;
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <PopoverContentList>
                    <ListWrapper>
                      <PopoverContentListItem>Profile</PopoverContentListItem>
                      <PopoverContentListItem>Settings</PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>
                        <Icon name="rocket" as={ListItemIcon} />
                        Manage devices
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="user" as={ListItemIcon} />
                        Manage users
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="users" as={ListItemIcon} />
                        Manage roles
                      </PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>Help</PopoverContentListItem>
                      <PopoverContentListItem>Log out</PopoverContentListItem>
                    </ListWrapper>
                  </PopoverContentList>
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <PopoverContentList>
                    <ListWrapper>
                      <PopoverContentListItem>Profile</PopoverContentListItem>
                      <PopoverContentListItem>Settings</PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>
                        <Icon name="rocket" as={ListItemIcon} />
                        Manage devices
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="user" as={ListItemIcon} />
                        Manage users
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="users" as={ListItemIcon} />
                        Manage roles
                      </PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>Help</PopoverContentListItem>
                      <PopoverContentListItem>Log out</PopoverContentListItem>
                    </ListWrapper>
                  </PopoverContentList>
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
      <Button onClick={() => setPopoverOpen(!popoverOpen)} ref={moreRef}>
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <PopoverContentList>
                    <ListWrapper>
                      <PopoverContentListItem>Profile</PopoverContentListItem>
                      <PopoverContentListItem>Settings</PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>
                        <Icon name="rocket" as={ListItemIcon} />
                        Manage devices
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="user" as={ListItemIcon} />
                        Manage users
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="users" as={ListItemIcon} />
                        Manage roles
                      </PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>Help</PopoverContentListItem>
                      <PopoverContentListItem>Log out</PopoverContentListItem>
                    </ListWrapper>
                  </PopoverContentList>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Users
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Invite User
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>
                <Cell>
                  <Dropdown
                    label="Customer name"
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                    isOpen={searchDropdownOpen}
                  >
                    <ul>
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                    </ul>
                  </Dropdown>
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

const ModalDataTableToolCell = () => (
  <Button>
    <Icon name="trash" />
  </Button>
);

const manageUsersModalData = {
  data: [
    { id: 1, name: "Student" },
    { id: 2, name: "Reports Manager" },
    { id: 3, name: "Cerulean admin" }
  ],
  columns: [
    { id: 1, name: "Name", selector: "name" },
    {
      id: 2,
      name: "",
      selector: "actions",
      // eslint-disable-next-line react/prop-types
      cell: ({ id }) => <ModalDataTableToolCell id={id} />
    }
  ]
};

export const StratosphereManageUsersWithModalDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalDropdownOpen, setModalDropdownOpen] = useState(false);
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Users
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Invite User
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>
                <Cell>
                  <Dropdown
                    label="Customer name"
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                    isOpen={searchDropdownOpen}
                  >
                    <ul>
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                    </ul>
                  </Dropdown>
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

            <Modal
              isOpen
              onBackgroundClick={() => {
                // eslint-disable-next-line no-console
                console.log("click on background");
              }}
            >
              <Typography fontFamily="openSans">
                <Grid>
                  <Cell>
                    <Typography color="black" size="large">
                      User
                    </Typography>
                  </Cell>
                  <Cell as={GridContentRight}>
                    <Button
                      color="transparent"
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("close modal");
                      }}
                    >
                      <Typography color="black">
                        <Icon name="close" />
                      </Typography>
                    </Button>
                  </Cell>
                </Grid>

                <Grid columns="min-content 1fr">
                  <Cell>
                    <UserPicture
                      onClick={() => setPopoverOpen(!popoverOpen)}
                      ref={containerRef}
                    />
                  </Cell>
                  <Cell>
                    <p>Name: User Name</p>
                    <p>Email: User@example.com</p>
                  </Cell>
                </Grid>

                <TabsContainer>
                  <Tab text="Roles" active />
                  <Tab text="Groups" />
                  <Tab text="Hierarchies" />
                </TabsContainer>

                <Grid columns="6fr 1fr">
                  <Cell>
                    <Dropdown
                      label="Roles"
                      onClick={() => setModalDropdownOpen(!modalDropdownOpen)}
                      isOpen={modalDropdownOpen}
                    >
                      <ul>
                        <li>first</li>
                        <li>second</li>
                        <li>third</li>
                        <li>fourth</li>
                      </ul>
                    </Dropdown>
                  </Cell>
                  <Cell>
                    <Button>Add role</Button>
                  </Cell>
                </Grid>

                <DataTable
                  columns={manageUsersModalData.columns}
                  data={manageUsersModalData.data}
                />

                <TextAlignRight>
                  <a href="/manage">Manage Roles</a>
                </TextAlignRight>
              </Typography>
            </Modal>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

const manageGroupsModalData = {
  data: [
    { id: 1, name: "Hacklab" },
    { id: 2, name: "Team Cerulean" },
    { id: 3, name: "Houston Inc" }
  ],
  columns: [
    { id: 1, name: "Name", selector: "name" },
    {
      id: 2,
      name: "",
      selector: "actions",
      // eslint-disable-next-line react/prop-types
      cell: ({ id }) => <ModalDataTableToolCell id={id} />
    }
  ]
};

export const StratosphereManageGroupsWithModalDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalDropdownOpen, setModalDropdownOpen] = useState(false);
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Users
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Invite User
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>
                <Cell>
                  <Dropdown
                    label="Customer name"
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                    isOpen={searchDropdownOpen}
                  >
                    <ul>
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                    </ul>
                  </Dropdown>
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

            <Modal
              isOpen
              onBackgroundClick={() => {
                // eslint-disable-next-line no-console
                console.log("click on background");
              }}
            >
              <Typography fontFamily="openSans">
                <Grid>
                  <Cell>
                    <Typography color="black" size="large">
                      User
                    </Typography>
                  </Cell>
                  <Cell as={GridContentRight}>
                    <Button
                      color="transparent"
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("close modal");
                      }}
                    >
                      <Typography color="black">
                        <Icon name="close" />
                      </Typography>
                    </Button>
                  </Cell>
                </Grid>

                <Grid columns="min-content 1fr">
                  <Cell>
                    <UserPicture
                      onClick={() => setPopoverOpen(!popoverOpen)}
                      ref={containerRef}
                    />
                  </Cell>
                  <Cell>
                    <p>Name: User Name</p>
                    <p>Email: User@example.com</p>
                  </Cell>
                </Grid>

                <TabsContainer>
                  <Tab text="Roles" />
                  <Tab text="Groups" active />
                  <Tab text="Hierarchies" />
                </TabsContainer>

                <Grid columns="6fr 1fr">
                  <Cell>
                    <Dropdown
                      label="Groups"
                      onClick={() => setModalDropdownOpen(!modalDropdownOpen)}
                      isOpen={modalDropdownOpen}
                    >
                      <ul>
                        <li>first</li>
                        <li>second</li>
                        <li>third</li>
                        <li>fourth</li>
                      </ul>
                    </Dropdown>
                  </Cell>
                  <Cell>
                    <Button>Add to Group</Button>
                  </Cell>
                </Grid>

                <DataTable
                  columns={manageGroupsModalData.columns}
                  data={manageGroupsModalData.data}
                />

                <TextAlignRight>
                  <a href="/manage">Manage Groups</a>
                </TextAlignRight>
              </Typography>
            </Modal>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

const manageHierarchiesModalData = {
  data: [
    { id: 1, name: "Houston Inc" },
    {
      id: 2,
      name:
        "Haaga-Helia / Faculty of Business Administration / IoT Course Spring 2021"
    },
    { id: 3, name: "University of Delft" }
  ],
  columns: [
    { id: 1, name: "Name", selector: "name" },
    {
      id: 2,
      name: "",
      selector: "actions",
      // eslint-disable-next-line react/prop-types
      cell: ({ id }) => <ModalDataTableToolCell id={id} />
    }
  ]
};

export const StratosphereManageHierarchiesWithModalDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalDropdownOpen, setModalDropdownOpen] = useState(false);
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Users
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Invite User
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>
                <Cell>
                  <Dropdown
                    label="Customer name"
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                    isOpen={searchDropdownOpen}
                  >
                    <ul>
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                    </ul>
                  </Dropdown>
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

            <Modal
              isOpen
              onBackgroundClick={() => {
                // eslint-disable-next-line no-console
                console.log("click on background");
              }}
            >
              <Typography fontFamily="openSans">
                <Grid>
                  <Cell>
                    <Typography color="black" size="large">
                      User
                    </Typography>
                  </Cell>
                  <Cell as={GridContentRight}>
                    <Button
                      color="transparent"
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("close modal");
                      }}
                    >
                      <Typography color="black">
                        <Icon name="close" />
                      </Typography>
                    </Button>
                  </Cell>
                </Grid>

                <Grid columns="min-content 1fr">
                  <Cell>
                    <UserPicture
                      onClick={() => setPopoverOpen(!popoverOpen)}
                      ref={containerRef}
                    />
                  </Cell>
                  <Cell>
                    <p>Name: User Name</p>
                    <p>Email: User@example.com</p>
                  </Cell>
                </Grid>

                <TabsContainer>
                  <Tab text="Roles" />
                  <Tab text="Groups" />
                  <Tab text="Hierarchies" active />
                </TabsContainer>

                <Grid columns="6fr 1fr">
                  <Cell>
                    <Dropdown
                      label="Hierarchies"
                      onClick={() => setModalDropdownOpen(!modalDropdownOpen)}
                      isOpen={modalDropdownOpen}
                    >
                      <ul>
                        <li>first</li>
                        <li>second</li>
                        <li>third</li>
                        <li>fourth</li>
                      </ul>
                    </Dropdown>
                  </Cell>
                  <Cell>
                    <Button>Add to Group</Button>
                  </Cell>
                </Grid>

                <DataTable
                  columns={manageHierarchiesModalData.columns}
                  data={manageHierarchiesModalData.data}
                />

                <TextAlignRight>
                  <a href="/manage">Manage Hierarchies</a>
                </TextAlignRight>
              </Typography>
            </Modal>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

export const StratosphereManageUsersWithConfirmDemo = () => {
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Users
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Invite User
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>
                <Cell>
                  <Dropdown
                    label="Customer name"
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                    isOpen={searchDropdownOpen}
                  >
                    <ul>
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                    </ul>
                  </Dropdown>
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

            <Confirm
              title="Block User Name"
              content="Are you sure you want to block this user?"
              isOpen
              onConfirm={() => {
                // eslint-disable-next-line no-console
                console.log("click on confirm");
              }}
              onCancel={() => {
                // eslint-disable-next-line no-console
                console.log("click on cancel");
              }}
            />
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

export const StratosphereManageUsersWithDeleteDemo = () => {
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Users
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Invite User
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>
                <Cell>
                  <Dropdown
                    label="Customer name"
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                    isOpen={searchDropdownOpen}
                  >
                    <ul>
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                    </ul>
                  </Dropdown>
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

            <Confirm
              title="Delete User Name"
              content="Are you sure you want to delete this user?"
              isOpen
              onConfirm={() => {
                // eslint-disable-next-line no-console
                console.log("click on confirm");
              }}
              onCancel={() => {
                // eslint-disable-next-line no-console
                console.log("click on cancel");
              }}
            />
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

const manageRolesData = {
  data: [{ id: 1, name: "Student", users: 5, permissions: 6 }],
  columns: [
    { id: 1, name: "Name", selector: "name" },
    { id: 2, name: "Users", selector: "users" },
    { id: 3, name: "Permissions", selector: "permissions" },
    {
      id: 4,
      name: "",
      selector: "actions",
      // eslint-disable-next-line react/prop-types
      cell: ({ id }) => <UserDataCell id={id} />
    }
  ]
};

export const StratosphereManageRolesDemo = () => {
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <PopoverContentList>
                    <ListWrapper>
                      <PopoverContentListItem>Profile</PopoverContentListItem>
                      <PopoverContentListItem>Settings</PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>
                        <Icon name="rocket" as={ListItemIcon} />
                        Manage devices
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="user" as={ListItemIcon} />
                        Manage users
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="users" as={ListItemIcon} />
                        Manage roles
                      </PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>Help</PopoverContentListItem>
                      <PopoverContentListItem>Log out</PopoverContentListItem>
                    </ListWrapper>
                  </PopoverContentList>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Roles
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Create Role
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>
                <Cell>
                  <Dropdown
                    label="Customer name"
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                    isOpen={searchDropdownOpen}
                  >
                    <ul>
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                    </ul>
                  </Dropdown>
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
              columns={manageRolesData.columns}
              data={manageRolesData.data}
            />
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

const manageRolesModalData = {
  data: [
    { id: 1, permission: "reports:red", checked: true },
    {
      id: 2,
      permission: "reports:write",
      checked: true
    },
    { id: 3, permission: "reports:execute", checked: false }
  ],
  columns: [
    {
      id: 1,
      name: "Permission",
      selector: "permission",
      // eslint-disable-next-line react/prop-types
      cell: ({ checked, permission }) => (
        <Checkbox checked={checked} label={permission} />
      )
    }
  ]
};

export const StratosphereManageRolesWithModalDemo = () => {
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Roles
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Create Role
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>
                <Cell>
                  <Dropdown
                    label="Customer name"
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                    isOpen={searchDropdownOpen}
                  >
                    <ul>
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                    </ul>
                  </Dropdown>
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
              columns={manageRolesData.columns}
              data={manageRolesData.data}
            />

            <Modal
              isOpen
              onBackgroundClick={() => {
                // eslint-disable-next-line no-console
                console.log("click on background");
              }}
            >
              <Typography fontFamily="openSans">
                <Grid>
                  <Cell>
                    <Typography color="black" size="large">
                      Role
                    </Typography>
                  </Cell>
                  <Cell as={GridContentRight}>
                    <Button
                      color="transparent"
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("close modal");
                      }}
                    >
                      <Typography color="black">
                        <Icon name="close" />
                      </Typography>
                    </Button>
                  </Cell>
                </Grid>

                <Grid columns="min-content 1fr">
                  <Cell>
                    <UserPicture
                      onClick={() => setPopoverOpen(!popoverOpen)}
                      ref={containerRef}
                    />
                  </Cell>
                  <Cell>
                    <p>Name: User Name</p>
                    <p>Tenant: University of Delft</p>
                  </Cell>
                </Grid>

                <TabsContainer>
                  <Tab text="Permissions" active />
                  <Tab text="Settings" />
                </TabsContainer>

                <Input placeholder="Repo" />

                <DataTable
                  columns={manageRolesModalData.columns}
                  data={manageRolesModalData.data}
                />
              </Typography>
            </Modal>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

export const StratosphereSwitchTabsModalDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalDropdownOpen, setModalDropdownOpen] = useState(false);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Roles");

  const containerRef = useRef(null);

  const renderManageRoles = () => (
    <>
      <Grid>
        <Cell>
          <Dropdown
            label="Roles"
            onClick={() => setModalDropdownOpen(!modalDropdownOpen)}
            isOpen={modalDropdownOpen}
          >
            <ul>
              <li>first</li>
              <li>second</li>
              <li>third</li>
              <li>fourth</li>
            </ul>
          </Dropdown>
        </Cell>
        <Cell>
          <Button>Add role</Button>
        </Cell>
      </Grid>

      <DataTable
        columns={manageUsersModalData.columns}
        data={manageUsersModalData.data}
      />

      <TextAlignRight>
        <a href="/manage">Manage Roles</a>
      </TextAlignRight>
    </>
  );

  const renderManageGroups = () => (
    <>
      <Grid>
        <Cell>
          <Dropdown
            label="Groups"
            onClick={() => setModalDropdownOpen(!modalDropdownOpen)}
            isOpen={modalDropdownOpen}
          >
            <ul>
              <li>first</li>
              <li>second</li>
              <li>third</li>
              <li>fourth</li>
            </ul>
          </Dropdown>
        </Cell>
        <Cell>
          <Button>Add to Group</Button>
        </Cell>
      </Grid>

      <DataTable
        columns={manageGroupsModalData.columns}
        data={manageGroupsModalData.data}
      />

      <TextAlignRight>
        <a href="/manage">Manage Groups</a>
      </TextAlignRight>
    </>
  );

  const renderManageHierarchies = () => (
    <>
      <Grid>
        <Cell>
          <Dropdown
            label="Hierarchies"
            onClick={() => setModalDropdownOpen(!modalDropdownOpen)}
            isOpen={modalDropdownOpen}
          >
            <ul>
              <li>first</li>
              <li>second</li>
              <li>third</li>
              <li>fourth</li>
            </ul>
          </Dropdown>
        </Cell>
        <Cell>
          <Button>Add to Group</Button>
        </Cell>
      </Grid>

      <DataTable
        columns={manageHierarchiesModalData.columns}
        data={manageHierarchiesModalData.data}
      />

      <TextAlignRight>
        <a href="/manage">Manage Hierarchies</a>
      </TextAlignRight>
    </>
  );

  const renderModalContent = () => {
    if (selectedTab === "Roles") {
      return renderManageRoles();
    }
    if (selectedTab === "Groups") {
      return renderManageGroups();
    }
    return renderManageHierarchies();
  };

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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Users
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Invite User
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>
                <Cell>
                  <Dropdown
                    label="Customer name"
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                    isOpen={searchDropdownOpen}
                  >
                    <ul>
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                    </ul>
                  </Dropdown>
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

            <Modal
              isOpen
              onBackgroundClick={() => {
                // eslint-disable-next-line no-console
                console.log("click on background");
              }}
            >
              <Typography fontFamily="openSans">
                <Grid>
                  <Cell>
                    <Typography color="black" size="large">
                      User
                    </Typography>
                  </Cell>
                  <Cell as={GridContentRight}>
                    <Button
                      color="transparent"
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("close modal");
                      }}
                    >
                      <Typography color="black">
                        <Icon name="close" />
                      </Typography>
                    </Button>
                  </Cell>
                </Grid>

                <Grid columns="min-content 1fr">
                  <Cell>
                    <UserPicture
                      onClick={() => setPopoverOpen(!popoverOpen)}
                      ref={containerRef}
                    />
                  </Cell>
                  <Cell>
                    <p>Name: User Name</p>
                    <p>Email: User@example.com</p>
                  </Cell>
                </Grid>

                <TabsContainer>
                  <Tab
                    text="Roles"
                    active={selectedTab === "Roles"}
                    onClick={() => setSelectedTab("Roles")}
                  />
                  <Tab
                    text="Groups"
                    active={selectedTab === "Groups"}
                    onClick={() => setSelectedTab("Groups")}
                  />
                  <Tab
                    text="Hierarchies"
                    active={selectedTab === "Hierarchies"}
                    onClick={() => setSelectedTab("Hierarchies")}
                  />
                </TabsContainer>

                {renderModalContent()}
              </Typography>
            </Modal>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

const manageGroupsData = {
  data: [
    { id: 1, name: "Class of '20", users: 5, permissions: 6, hierarchies: 2 }
  ],
  columns: [
    { id: 1, name: "Name", selector: "name" },
    { id: 2, name: "Users", selector: "users" },
    { id: 3, name: "Permissions", selector: "permissions" },
    { id: 4, name: "Hierarchies", selector: "hierarchies" },
    {
      id: 5,
      name: "",
      selector: "actions",
      // eslint-disable-next-line react/prop-types
      cell: ({ id }) => <UserDataCell id={id} />
    }
  ]
};

export const StratosphereManageGroupsDemo = () => {
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <PopoverContentList>
                    <ListWrapper>
                      <PopoverContentListItem>Profile</PopoverContentListItem>
                      <PopoverContentListItem>Settings</PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>
                        <Icon name="rocket" as={ListItemIcon} />
                        Manage devices
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="user" as={ListItemIcon} />
                        Manage users
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="users" as={ListItemIcon} />
                        Manage roles
                      </PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>Help</PopoverContentListItem>
                      <PopoverContentListItem>Log out</PopoverContentListItem>
                    </ListWrapper>
                  </PopoverContentList>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Groups
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Create Group
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
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
              columns={manageGroupsData.columns}
              data={manageGroupsData.data}
            />
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

const manageGroupsAssignUserModalData = {
  data: [
    {
      id: 1,
      name: "Firstname Lastname",
      email: "email@address.com",
      checked: true
    },
    {
      id: 2,
      name: "Firstname Lastname 2",
      email: "email2@address.com",
      checked: false
    },
    {
      id: 3,
      name: "Firstname Lastname 3",
      email: "email3@address.com",
      checked: true
    }
  ],
  columns: [
    {
      id: 1,
      name: "Name",
      selector: "name",
      // eslint-disable-next-line react/prop-types
      cell: ({ checked, name }) => <Checkbox checked={checked} label={name} />
    },
    { id: 2, name: "Email", selector: "email" }
  ]
};

export const StratosphereManageGroupsAssignUserModalDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [modalDropdownOpen, setModalDropdownOpen] = useState(false);

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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Groups
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Create Group
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
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
              columns={manageGroupsData.columns}
              data={manageGroupsData.data}
            />

            <Modal
              isOpen
              onBackgroundClick={() => {
                // eslint-disable-next-line no-console
                console.log("click on background");
              }}
            >
              <Typography fontFamily="openSans">
                <Grid>
                  <Cell>
                    <Typography color="black" size="large">
                      Group
                    </Typography>
                  </Cell>
                  <Cell as={GridContentRight}>
                    <Button
                      color="transparent"
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("close modal");
                      }}
                    >
                      <Typography color="black">
                        <Icon name="close" />
                      </Typography>
                    </Button>
                  </Cell>
                </Grid>

                <Grid columns="min-content 1fr">
                  <Cell>
                    <UserPicture
                      onClick={() => setPopoverOpen(!popoverOpen)}
                      ref={containerRef}
                    />
                  </Cell>
                  <Cell>
                    <p>Name: User Name</p>
                    <p>Tenant: University of Delft</p>
                    <p>Hierarchy: Faculty of Business Administration</p>
                  </Cell>
                </Grid>

                <TabsContainer>
                  <Tab text="Assign User" active />
                  <Tab text="Users" />
                  <Tab text="Hierarchy" />
                </TabsContainer>

                <Grid>
                  <Cell>
                    <Input placeholder="Username" />
                  </Cell>
                  <Cell>
                    <Dropdown
                      label="Field"
                      onClick={() => setModalDropdownOpen(!modalDropdownOpen)}
                      isOpen={modalDropdownOpen}
                    >
                      <ul>
                        <li>Username</li>
                        <li>Email</li>
                      </ul>
                    </Dropdown>
                  </Cell>
                  <Cell>
                    <Button
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("search clicked");
                      }}
                    >
                      Search
                    </Button>
                  </Cell>
                </Grid>

                <DataTable
                  columns={manageGroupsAssignUserModalData.columns}
                  data={manageGroupsAssignUserModalData.data}
                />
              </Typography>
            </Modal>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

const treeData = [
  {
    title: "Houston Inc.",
    expanded: true,
    children: [
      {
        title: "Meeting rooms",
        children: [
          { title: "Sirius" },
          { title: "Solar" },
          { title: "Pluto" },
          { title: "Space" },
          { title: "Hacklab" }
        ]
      }
    ]
  }
];

const AdditionalNodeProp = (node, path) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const moreRef = useRef(null);

  return (
    <>
      {node.node.title === "Houston Inc." ? (
        <Icon name="lock" />
      ) : (
        <>
          <Button
            key={path}
            onClick={() => setPopoverOpen(!popoverOpen)}
            ref={moreRef}
          >
            <Icon name="more" />
          </Button>
          <Popover isOpen={popoverOpen} containerRef={moreRef}>
            <ul>
              <li>Grant access</li>
              <li>Add devices</li>
              <li>Create hierarchy</li>
              <li>Edit</li>
            </ul>
          </Popover>
        </>
      )}
    </>
  );
};

export const StratosphereHierarchiesDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [hierarchyTreeData, setHierarchyTreeData] = useState(treeData);

  const containerRef = useRef(null);

  const handleGenerateNodeProps = ({ node, path }) => ({
    buttons: [<AdditionalNodeProp node={node} path={path} />]
  });

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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <PopoverContentList>
                    <ListWrapper>
                      <PopoverContentListItem>Profile</PopoverContentListItem>
                      <PopoverContentListItem>Settings</PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>
                        <Icon name="rocket" as={ListItemIcon} />
                        Manage devices
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="user" as={ListItemIcon} />
                        Manage users
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="users" as={ListItemIcon} />
                        Manage roles
                      </PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>Help</PopoverContentListItem>
                      <PopoverContentListItem>Log out</PopoverContentListItem>
                    </ListWrapper>
                  </PopoverContentList>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  Hierarchies
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Create hierarchy
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>
                <Cell>
                  <Button type="submit" as={SearchButton}>
                    <Icon name="search" />
                    Search
                  </Button>
                </Cell>
              </Grid>
            </form>
            <Typography color="black">
              <TreeViewContainer>
                <TreeView
                  treeData={hierarchyTreeData}
                  onChange={data => setHierarchyTreeData(data)}
                  generateNodeProps={handleGenerateNodeProps}
                />
              </TreeViewContainer>
            </Typography>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

const manageGroupsUsersModalData = {
  data: [
    {
      id: 1,
      name: "Firstname Lastname",
      email: "email@address.com"
    }
  ],
  columns: [
    { id: 1, name: "Name", selector: "name" },
    { id: 2, name: "Email", selector: "email" }
  ]
};

export const StratosphereManageGroupsUsersModalDemo = () => {
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Groups
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Create Group
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
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
              columns={manageGroupsData.columns}
              data={manageGroupsData.data}
            />

            <Modal
              isOpen
              onBackgroundClick={() => {
                // eslint-disable-next-line no-console
                console.log("click on background");
              }}
            >
              <Typography fontFamily="openSans">
                <Grid>
                  <Cell>
                    <Typography color="black" size="large">
                      Group
                    </Typography>
                  </Cell>
                  <Cell as={GridContentRight}>
                    <Button
                      color="transparent"
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("close modal");
                      }}
                    >
                      <Typography color="black">
                        <Icon name="close" />
                      </Typography>
                    </Button>
                  </Cell>
                </Grid>

                <Grid columns="min-content 1fr">
                  <Cell>
                    <UserPicture
                      onClick={() => setPopoverOpen(!popoverOpen)}
                      ref={containerRef}
                    />
                  </Cell>
                  <Cell>
                    <p>Name: User Name</p>
                    <p>Tenant: University of Delft</p>
                    <p>Hierarchy: Faculty of Business Administration</p>
                  </Cell>
                </Grid>

                <TabsContainer>
                  <Tab text="Assign User" />
                  <Tab text="Users" active />
                  <Tab text="Hierarchy" />
                </TabsContainer>

                <Input
                  placeholder="Search"
                  onChange={() => {
                    // eslint-disable-next-line no-console
                    console.log("search clicked");
                  }}
                />

                <DataTable
                  columns={manageGroupsUsersModalData.columns}
                  data={manageGroupsUsersModalData.data}
                />
              </Typography>
            </Modal>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

const manageGroupsHierarchiesModalData = {
  data: [
    { id: 1, name: "Houston Inc" },
    {
      id: 2,
      name:
        "Haaga-Helia / Faculty of Business Administration / IoT Course Spring 2021"
    },
    { id: 3, name: "University of Delft" }
  ],
  columns: [
    { id: 1, name: "Name", selector: "name" },
    {
      id: 2,
      name: "",
      selector: "actions",
      // eslint-disable-next-line react/prop-types
      cell: ({ id }) => <ModalDataTableToolCell id={id} />
    }
  ]
};

export const StratosphereManageGroupsHierarchiesModalDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [modalDropdownOpen, setModalDropdownOpen] = useState(false);

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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Groups
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Create Group
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
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
              columns={manageGroupsData.columns}
              data={manageGroupsData.data}
            />

            <Modal
              isOpen
              onBackgroundClick={() => {
                // eslint-disable-next-line no-console
                console.log("click on background");
              }}
            >
              <Typography fontFamily="openSans">
                <Grid>
                  <Cell>
                    <Typography color="black" size="large">
                      Group
                    </Typography>
                  </Cell>
                  <Cell as={GridContentRight}>
                    <Button
                      color="transparent"
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("close modal");
                      }}
                    >
                      <Typography color="black">
                        <Icon name="close" />
                      </Typography>
                    </Button>
                  </Cell>
                </Grid>

                <Grid columns="min-content 1fr">
                  <Cell>
                    <UserPicture
                      onClick={() => setPopoverOpen(!popoverOpen)}
                      ref={containerRef}
                    />
                  </Cell>
                  <Cell>
                    <p>Name: User Name</p>
                    <p>Tenant: University of Delft</p>
                    <p>Hierarchy: Faculty of Business Administration</p>
                  </Cell>
                </Grid>

                <TabsContainer>
                  <Tab text="Assign User" />
                  <Tab text="Users" />
                  <Tab text="Hierarchy" active />
                </TabsContainer>

                <Grid columns="6fr 1fr">
                  <Cell>
                    <Dropdown
                      label="Field"
                      onClick={() => setModalDropdownOpen(!modalDropdownOpen)}
                      isOpen={modalDropdownOpen}
                    >
                      <ul>
                        <li>Username</li>
                        <li>Email</li>
                      </ul>
                    </Dropdown>
                  </Cell>
                  <Cell>
                    <Button
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("Grant Access clicked");
                      }}
                    >
                      Grant Access
                    </Button>
                  </Cell>
                </Grid>
                <DataTable
                  columns={manageGroupsHierarchiesModalData.columns}
                  data={manageGroupsHierarchiesModalData.data}
                />
              </Typography>
            </Modal>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

export const StratosphereManageGroupsHierarchiesDeleteConfirmModalDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [modalDropdownOpen, setModalDropdownOpen] = useState(false);

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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <p>Popover content</p>
                </Popover>
              </Cell>
            </Grid>
            <Grid>
              <Cell>
                <Typography color="black" size="large">
                  <Icon name="arrow-left-circle" as={IconMarginRight} />
                  Manage Groups
                </Typography>
              </Cell>
              <Cell as={GridContentRight}>
                <Button as={ButtonWithIcon}>
                  <Icon name="plus" />
                  Create Group
                </Button>
              </Cell>
            </Grid>
            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
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
              columns={manageGroupsData.columns}
              data={manageGroupsData.data}
            />

            <Modal
              isOpen
              onBackgroundClick={() => {
                // eslint-disable-next-line no-console
                console.log("click on background");
              }}
            >
              <Typography fontFamily="openSans">
                <Grid>
                  <Cell>
                    <Typography color="black" size="large">
                      Group
                    </Typography>
                  </Cell>
                  <Cell as={GridContentRight}>
                    <Button
                      color="transparent"
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("close modal");
                      }}
                    >
                      <Typography color="black">
                        <Icon name="close" />
                      </Typography>
                    </Button>
                  </Cell>
                </Grid>

                <Grid columns="min-content 1fr">
                  <Cell>
                    <UserPicture
                      onClick={() => setPopoverOpen(!popoverOpen)}
                      ref={containerRef}
                    />
                  </Cell>
                  <Cell>
                    <p>Name: User Name</p>
                    <p>Tenant: University of Delft</p>
                    <p>Hierarchy: Faculty of Business Administration</p>
                  </Cell>
                </Grid>

                <TabsContainer>
                  <Tab text="Assign User" />
                  <Tab text="Users" />
                  <Tab text="Hierarchy" active />
                </TabsContainer>

                <Grid columns="6fr 1fr">
                  <Cell>
                    <Dropdown
                      label="Field"
                      onClick={() => setModalDropdownOpen(!modalDropdownOpen)}
                      isOpen={modalDropdownOpen}
                    >
                      <ul>
                        <li>Username</li>
                        <li>Email</li>
                      </ul>
                    </Dropdown>
                  </Cell>
                  <Cell>
                    <Button
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("Grant Access clicked");
                      }}
                    >
                      Grant Access
                    </Button>
                  </Cell>
                </Grid>
                <DataTable
                  columns={manageGroupsHierarchiesModalData.columns}
                  data={manageGroupsHierarchiesModalData.data}
                />
              </Typography>

              <Confirm
                title="Delete Class of '20"
                content="Are you sure you want to delete this group?"
                isOpen
                onConfirm={() => {
                  // eslint-disable-next-line no-console
                  console.log("click on confirm");
                }}
                onCancel={() => {
                  // eslint-disable-next-line no-console
                  console.log("click on cancel");
                }}
              />
            </Modal>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

export const StratosphereDevicesAndDeploymentsDemo = () => {
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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <PopoverContentList>
                    <ListWrapper>
                      <PopoverContentListItem>Profile</PopoverContentListItem>
                      <PopoverContentListItem>Settings</PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>
                        <Icon name="rocket" as={ListItemIcon} />
                        Manage devices
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="user" as={ListItemIcon} />
                        Manage users
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="users" as={ListItemIcon} />
                        Manage roles
                      </PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>Help</PopoverContentListItem>
                      <PopoverContentListItem>Log out</PopoverContentListItem>
                    </ListWrapper>
                  </PopoverContentList>
                </Popover>
              </Cell>
            </Grid>
            <Typography color="black" size="large">
              Devices &amp; Deployments
            </Typography>
            <Grid as={KPIGrid}>
              <Cell as={KPICell}>
                <KPICard
                  title="Largest Amount of telemetry in a Day"
                  value={789}
                  growth={0.05}
                  redValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active devices / <prev month>"
                  value={1485}
                  growth={0.23}
                  redValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active devices / <this month> so far"
                  value={2234}
                  growth={0.45}
                  greenValue
                />
              </Cell>
              <Cell as={KPICell}>
                <KPICard
                  title="Active devices / <this month>"
                  value={1834}
                  growth={0.23}
                  greenValue
                />
              </Cell>
            </Grid>
            <Grid as={CardGrid}>
              <Cell>
                <LinkComponent to="#manage-users">
                  <Card title="Manage Devices" icon="rocket" />
                </LinkComponent>
              </Cell>
              <Cell>
                <LinkComponent to="#manage-users">
                  <Card title="Manage Enrollments" icon="caravan" />
                </LinkComponent>
              </Cell>
              <Cell>
                <LinkComponent to="#manage-users">
                  <Card title="Manage Fleet" icon="plane" />
                </LinkComponent>
              </Cell>
            </Grid>
          </Cell>
        </GridWithCollapsibleMenu>
      </Typography>
    </Container>
  );
};

const manageDevicesData = {
  data: [
    {
      id: 1,
      name: "rintakylan-well",
      alerts: "45",
      lastEntry: "2 days ago"
    },
    {
      id: 2,
      name: "rintakylan-well-2",
      alerts: "3",
      lastEntry: "24 seconds ago"
    }
  ],
  columns: [
    { id: 1, name: "Name", selector: "name" },
    { id: 2, name: "Alerts", selector: "alerts" },
    { id: 3, name: "Last Entry", selector: "lastEntry" },
    {
      id: 4,
      name: "",
      selector: "actions",
      // eslint-disable-next-line react/prop-types
      cell: ({ id }) => <UserDataCell id={id} />
    }
  ]
};

export const StratosphereManageDevicesDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);

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
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  isOpen={dropdownOpen}
                >
                  <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                  </ul>
                </Dropdown>
                <UserPicture
                  onClick={() => setPopoverOpen(!popoverOpen)}
                  ref={containerRef}
                />
                <Popover isOpen={popoverOpen} containerRef={containerRef}>
                  <PopoverContentList>
                    <ListWrapper>
                      <PopoverContentListItem>Profile</PopoverContentListItem>
                      <PopoverContentListItem>Settings</PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>
                        <Icon name="rocket" as={ListItemIcon} />
                        Manage devices
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="user" as={ListItemIcon} />
                        Manage users
                      </PopoverContentListItem>
                      <PopoverContentListItem>
                        <Icon name="users" as={ListItemIcon} />
                        Manage roles
                      </PopoverContentListItem>
                      <ListDivider />
                      <PopoverContentListItem>Help</PopoverContentListItem>
                      <PopoverContentListItem>Log out</PopoverContentListItem>
                    </ListWrapper>
                  </PopoverContentList>
                </Popover>
              </Cell>
            </Grid>

            <Typography color="black" size="large">
              <Icon name="arrow-left-circle" as={IconMarginRight} />
              Manage Devices
            </Typography>

            <form
              onSubmit={event => {
                event.preventDefault();
                // eslint-disable-next-line no-console
                console.log("submit");
              }}
            >
              <Grid columns="3fr 1fr 1fr">
                <Cell>
                  <Input type="search" placeholder="Search" />
                </Cell>

                <Cell>
                  <Dropdown
                    label="Field"
                    onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
                    isOpen={searchDropdownOpen}
                  >
                    <ul>
                      <li>Name</li>
                      <li>ID</li>
                    </ul>
                  </Dropdown>
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
              columns={manageDevicesData.columns}
              data={manageDevicesData.data}
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
