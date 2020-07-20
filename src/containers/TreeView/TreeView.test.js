import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { TreeView } from "./TreeView";

const treeData = [
  {
    title: "Top level parent",
    expanded: true,
    subtitle: "Subtitle",
    children: [
      {
        title: "Parent A",
        children: [{ title: "Child 1" }, { title: "Child 2" }]
      },
      {
        title: "Parent B",
        children: [{ title: "Child 3" }, { title: "Child 4" }]
      },
      {
        title: "Parent C",
        children: [{ title: "Child 5" }, { title: "Child 6" }]
      }
    ]
  }
];

describe("TreeView", () => {
  it("should render", () => {
    const component = shallow(<TreeView treeData={treeData} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render with canDrag prop", () => {
    const component = shallow(<TreeView treeData={treeData} canDrag />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("calls onChange handler", () => {
    const handleChange = jest.fn();
    const component = shallow(
      <TreeView treeData={treeData} onChange={handleChange} />
    );
    expect(handleChange).not.toHaveBeenCalled();
    component
      .find("DragDropContext(SortableTreeWithoutDndContext)")
      .simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });

  it("calls default onChange handler if no prop is passed", () => {
    const component = shallow(<TreeView treeData={treeData} />);
    component
      .find("DragDropContext(SortableTreeWithoutDndContext)")
      .prop("onChange")();
    expect(toJson(component)).toMatchSnapshot();
  });

  it("calls default generateNodeProps handler if no prop is passed", () => {
    const component = shallow(<TreeView treeData={treeData} />);
    component
      .find("DragDropContext(SortableTreeWithoutDndContext)")
      .prop("generateNodeProps")();
    expect(toJson(component)).toMatchSnapshot();
  });
});
