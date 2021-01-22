import React from "react";
import { mount } from "enzyme";
import { Popover } from "./Popover";

describe("Popover", () => {
  let containerRefStub;
  let popoverRefStub;

  beforeEach(() => {
    containerRefStub = { current: null };
    popoverRefStub = { current: null };
  });

  it("given popover is open, renders", () => {
    const component = mount(
      <Popover
        popoverRef={popoverRefStub}
        containerRef={containerRefStub}
        isOpen
      >
        Some children
      </Popover>
    );

    expect(component).toMatchHtmlSnapshot();
  });

  it("given popover is not open, returns null html", () => {
    const component = mount(
      <Popover
        containerRef={containerRefStub}
        popoverRef={popoverRefStub}
        isOpen={false}
      />
    );

    expect(component.html()).toBeNull();
  });
});
