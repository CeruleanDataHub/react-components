import React, { useRef, useState } from "react";

import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Popover } from "../Popover/Popover";
import { TreeView } from "./TreeView";

export default {
  title: "TreeView",
  component: TreeView
};

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

export const TreeViewStory = () => {
  const [data, setData] = useState(treeData);

  return (
    <div style={{ height: 500 }}>
      <TreeView treeData={data} onChange={tree => setData(tree)} />
    </div>
  );
};

export const TreeViewDraggableStory = () => {
  const [data, setData] = useState(treeData);

  return (
    <div style={{ height: 500 }}>
      <TreeView treeData={data} onChange={tree => setData(tree)} canDrag />
    </div>
  );
};

const AdditionalNodeProp = path => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const moreRef = useRef(null);

  return (
    <>
      <Button
        key={path}
        onClick={() => setPopoverOpen(!popoverOpen)}
        ref={moreRef}
      >
        <Icon name="more" />
      </Button>
      <Popover isOpen={popoverOpen} containerRef={moreRef}>
        <p>
          Path:&nbsp;
          {path.path}
        </p>
      </Popover>
    </>
  );
};

export const TreeViewAdditionalNodePropsStory = () => {
  const [data, setData] = useState(treeData);

  const handleGenerateNodeProps = ({ path }) => ({
    buttons: [<AdditionalNodeProp path={path} />]
  });

  return (
    <div style={{ height: 500 }}>
      <TreeView
        treeData={data}
        onChange={tree => setData(tree)}
        generateNodeProps={handleGenerateNodeProps}
      />
    </div>
  );
};
