import { withKnobs } from "@storybook/addon-knobs";
import React, { useRef, useState } from "react";

import { Popover } from "./Popover";

export default {
  title: "Popover",
  component: Popover,
  decorators: [withKnobs]
};

export const PopoverStory = () => {
  const containerRef = useRef(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div style={{ height: 100 }}>
      <button
        type="button"
        ref={containerRef}
        onClick={() => setPopoverOpen(!popoverOpen)}
      >
        Toggle popover
      </button>
      <Popover isOpen={popoverOpen} containerRef={containerRef}>
        Popover
      </Popover>
    </div>
  );
};

export const PopoverOpenStory = () => {
  const containerRef = useRef(null);

  return (
    <div style={{ height: 100 }}>
      <button type="button" ref={containerRef}>
        Popover is open under the button
      </button>
      <Popover isOpen containerRef={containerRef}>
        Popover
      </Popover>
    </div>
  );
};
