import React from "react";
import renderer from "react-test-renderer";

import { Modal } from "./Modal";

describe("Modal", () => {
  it("should render open Modal with children", () => {
    const component = renderer.create(
      <Modal isOpen>
        <p>Modal content</p>
      </Modal>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call default props onBackgroundClick function when no onBackgroundClick property is passed", () => {
    const component = renderer.create(
      <Modal isopen>
        <p>Modal content</p>
      </Modal>
    );
    component.root.props.onBackgroundClick();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
