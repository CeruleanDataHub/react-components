import React, { useRef } from "react";
import { mount, shallow } from "enzyme";
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
        popoverRef={popoverRef}
      >
        <div>Popover test content</div>
      </Popover>
    </>
  );
};

describe("Popover", () => {
  it("renders", () => {
    const component = mount(<Wrapper />);

    expect(component).toMatchHtmlSnapshot();
  });

  it("given popover is open, renders", () => {
    const component = shallow(<Wrapper isOpen />);

    expect(component).toMatchHtmlSnapshot();
  });
});
