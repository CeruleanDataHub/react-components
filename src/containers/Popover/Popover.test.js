import React, { useRef } from "react";
import renderer from "react-test-renderer";

import { Popover } from "./Popover";

// eslint-disable-next-line react/prop-types
const Wrapper = ({ isOpen }) => {
  const containerRef = useRef(null);
  const popoverRef = useRef(null);

  return (
    <>
      <button type="button" ref={containerRef}>
        Button
      </button>
      <Popover
        isOpen={isOpen}
        containerRef={containerRef}
        popperRef={popoverRef}
      >
        <div>Popover test content</div>
      </Popover>
    </>
  );
};

describe("Popover", () => {
  it("should render closed", () => {
    const component = renderer.create(<Wrapper />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render open", () => {
    const component = renderer.create(<Wrapper isOpen />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
