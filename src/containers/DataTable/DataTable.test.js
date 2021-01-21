import React from "react";
import { mount } from "enzyme";

import { DataTable } from "./DataTable";

describe("DataTable", () => {
  let component;
  let columnsStub;
  let dataStub;

  beforeEach(() => {
    dataStub = [
      { id: 1, title: "Conan the Barbarian", year: "1982" },
      { id: 2, title: "Conan the Barbarian 2", year: "1984" },
      { id: 3, title: "Conan the Barbarian 3", year: "1985" }
    ];

    columnsStub = [
      { id: 1, name: "Title", selector: "title" },
      { id: 2, name: "Year", selector: "year" }
    ];

    component = mount(<DataTable columns={columnsStub} data={dataStub} />);
  });

  it("renders", () => {
    expect(component).toMatchHtmlSnapshot();
  });

  it("given big amount of data, renders with pagination", () => {
    dataStub = [
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

    columnsStub = [
      { id: 1, name: "Title", selector: "title" },
      { id: 2, name: "Year", selector: "year" }
    ];

    component = mount(<DataTable columns={columnsStub} data={dataStub} />);

    expect(component).toMatchHtmlSnapshot();
  });
});
