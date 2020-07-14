import React from "react";

import { DataTable } from "./DataTable";

export default {
  title: "DataTable",
  component: DataTable
};

const data = [
  { id: 1, title: "Conan the Barbarian", year: "1982" },
  { id: 2, title: "Conan the Barbarian 2", year: "1984" },
  { id: 3, title: "Conan the Barbarian 3", year: "1985" }
];

const columns = [
  { id: 1, name: "Title", selector: "title" },
  { id: 2, name: "Year", selector: "year" }
];

export const DataTableStory = () => <DataTable columns={columns} data={data} />;

export const DataTableCustomCellStory = () => {
  const columns2 = [
    {
      name: "Custom Title",
      cell: row => <div>{row.title}</div>
    },
    {
      name: "Fancy title",
      cell: row => (
        <div style={{ color: "red", fontSize: "1.2rem" }}>{row.title}</div>
      )
    },
    {
      name: "Link",
      cell: row => (
        <a href={row.id} target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          This is a link to {row.title}
        </a>
      )
    }
  ];
  return <DataTable columns={columns2} data={data} />;
};
