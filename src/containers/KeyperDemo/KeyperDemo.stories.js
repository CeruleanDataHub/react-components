import React, { useState } from "react";
import styled from "styled-components";

import { DependencyWheel } from "../Chart/DependencyWheel/DependencyWheel";
import { Spline } from "../Chart/Spline/Spline";
import { TreeMap } from "../Chart/TreeMap/TreeMap";
import { Dropdown } from "../Dropdown/Dropdown";
import { Cell, Grid } from "../Grid/Grid";
import { KPICard } from "../KPICard/KPICard";

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

const dependencySeries = [
  {
    keys: ["from", "to", "weight"],
    data: [
      ["Brazil", "Portugal", 5],
      ["Brazil", "France", 1],
      ["Brazil", "Spain", 1],
      ["Brazil", "England", 1],
      ["Canada", "Portugal", 1],
      ["Canada", "France", 5],
      ["Canada", "England", 1],
      ["Mexico", "Portugal", 1],
      ["Mexico", "France", 1],
      ["Mexico", "Spain", 5],
      ["Mexico", "England", 1],
      ["USA", "Portugal", 1],
      ["USA", "France", 1],
      ["USA", "Spain", 1],
      ["USA", "England", 5],
      ["Portugal", "Angola", 2],
      ["Portugal", "Senegal", 1],
      ["Portugal", "Morocco", 1],
      ["Portugal", "South Africa", 3],
      ["France", "Angola", 1],
      ["France", "Senegal", 3],
      ["France", "Mali", 3],
      ["France", "Morocco", 3],
      ["France", "South Africa", 1],
      ["Spain", "Senegal", 1],
      ["Spain", "Morocco", 3],
      ["Spain", "South Africa", 1],
      ["England", "Angola", 1],
      ["England", "Senegal", 1],
      ["England", "Morocco", 2],
      ["England", "South Africa", 7],
      ["South Africa", "China", 5],
      ["South Africa", "India", 1],
      ["South Africa", "Japan", 3],
      ["Angola", "China", 5],
      ["Angola", "India", 1],
      ["Angola", "Japan", 3],
      ["Senegal", "China", 5],
      ["Senegal", "India", 1],
      ["Senegal", "Japan", 3],
      ["Mali", "China", 5],
      ["Mali", "India", 1],
      ["Mali", "Japan", 3],
      ["Morocco", "China", 5],
      ["Morocco", "India", 1],
      ["Morocco", "Japan", 3],
      ["Japan", "Brazil", 1]
    ],
    name: "Dependency wheel series",
    dataLabels: {
      color: "#333",
      textPath: {
        enabled: true,
        attributes: {
          dy: 5
        }
      },
      distance: 10
    },
    size: "95%"
  }
];

const treemapSeries = [
  {
    data: [
      {
        id: "A",
        name: "Apples",
        color: "#EC2500"
      },
      {
        id: "B",
        name: "Bananas",
        color: "#ECE100"
      },
      {
        id: "O",
        name: "Oranges",
        color: "#EC9800"
      },
      {
        name: "Anne",
        parent: "A",
        value: 5
      },
      {
        name: "Rick",
        parent: "A",
        value: 3
      },
      {
        name: "Peter",
        parent: "A",
        value: 4
      },
      {
        name: "Anne",
        parent: "B",
        value: 4
      },
      {
        name: "Rick",
        parent: "B",
        value: 10
      },
      {
        name: "Peter",
        parent: "B",
        value: 1
      },
      {
        name: "Anne",
        parent: "O",
        value: 1
      },
      {
        name: "Rick",
        parent: "O",
        value: 3
      },
      {
        name: "Peter",
        parent: "O",
        value: 3
      },
      {
        name: "Susanne",
        parent: "Kiwi",
        value: 2,
        color: "#9EDE00"
      }
    ]
  }
];

const dropdownItems = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" },
  { value: "3", label: "Item 3" },
  { value: "4", label: "Item 4" },
  { value: "5", label: "Item 5" }
];

const Img = styled.img`
  width: 170px;
  height: 100px;
`;

export const KeyperDemo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <Grid>
        <Cell>
          <Img
            src="https://images.unsplash.com/photo-1503792243040-7ce7f5f06085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2515&q=80"
            alt="Unsplash key as logo placeholder"
          />
        </Cell>
        <Cell>
          <Dropdown
            items={dropdownItems}
            isOpen={dropdownOpen}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
        </Cell>
        <Cell>Datepicker placeholder</Cell>
        <Cell>Paging placeholder</Cell>
      </Grid>
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
      <Grid>
        <Cell>
          <Spline xAxis={splineXAxis} series={splineSeries} />
          <TreeMap series={treemapSeries} />
        </Cell>
        <Cell>
          <DependencyWheel
            series={dependencySeries}
            containerProps={{ style: { height: "100%" } }}
          />
        </Cell>
      </Grid>
    </>
  );
};

export default {
  title: "Keyper Demo",
  component: KeyperDemo
};
