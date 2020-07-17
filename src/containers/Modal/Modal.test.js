import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { ModalProvider } from "styled-react-modal";

import { Modal } from "./Modal";

describe("Modal", () => {
  it("should render open Modal with children", () => {
    const component = mount(
      <ModalProvider>
        <Modal isOpen>
          <p>Modal content</p>
        </Modal>
      </ModalProvider>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render closed Modal with children", () => {
    const component = mount(
      <ModalProvider>
        <Modal>
          <p>Modal content</p>
        </Modal>
      </ModalProvider>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should call default props onBackgroundClick function when no onBackgroundClick property is passed", () => {
    const component = mount(
      <ModalProvider>
        <Modal isOpen>
          <p>Modal content</p>
        </Modal>
      </ModalProvider>
    );
    component.find("Modal").prop("onBackgroundClick")();
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should fire onBackgroundClick function", () => {
    const handleClick = jest.fn();
    const component = mount(
      <ModalProvider>
        <Modal isOpen onBackgroundClick={handleClick}>
          <p>Modal content</p>
        </Modal>
      </ModalProvider>
    );
    expect(handleClick).not.toHaveBeenCalled();
    component
      .find("div")
      .at(0)
      .simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });
});
