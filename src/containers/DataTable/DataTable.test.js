import React from "react";
import renderer from "react-test-renderer";

import { DataTable } from "./DataTable";

describe("DataTable", () => {
  it("should render", () => {
    const data = [
      { id: 1, title: "Conan the Barbarian", year: "1982" },
      { id: 2, title: "Conan the Barbarian 2", year: "1984" },
      { id: 3, title: "Conan the Barbarian 3", year: "1985" }
    ];

    const columns = [
      { id: 1, name: "Title", selector: "title" },
      { id: 2, name: "Year", selector: "year" }
    ];

    const component = renderer.create(
      <DataTable columns={columns} data={data} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render pagination", () => {
    const data = [
      { id: 1, title: "Conan the Barbarian", year: "1982" },
      { id: 2, title: "Conan the Barbarian 2", year: "1984" },
      { id: 3, title: "Conan the Barbarian 3", year: "1985" },
      { id: 4, title: "Conan the Barbarian", year: "1982" },
      { id: 5, title: "Conan the Barbarian 2", year: "1984" },
      { id: 6, title: "Conan the Barbarian 3", year: "1985" },
      { id: 7, title: "Conan the Barbarian", year: "1982" },
      { id: 8, title: "Conan the Barbarian 2", year: "1984" },
      { id: 9, title: "Conan the Barbarian 3", year: "1985" },
      { id: 10, title: "Conan the Barbarian", year: "1982" },
      { id: 11, title: "Conan the Barbarian 2", year: "1984" }
    ];

    const columns = [
      { id: 1, name: "Title", selector: "title" },
      { id: 2, name: "Year", selector: "year" }
    ];

    const component = renderer.create(
      <DataTable columns={columns} data={data} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
