import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { ModalProvider } from "styled-react-modal";

import { Confirm } from "./Confirm";

describe("Confirm", () => {
  it("should render", () => {
    const component = mount(
      <ModalProvider>
        <Confirm title="Confirm title" text="Confirm modal content" isOpen />
      </ModalProvider>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should call default props onConfirm function when no onConfirm property is passed", () => {
    const component = mount(
      <ModalProvider>
        <Confirm isOpen />
      </ModalProvider>
    );
    component.find("Confirm").prop("onConfirm")();
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should call default props onCancel function when no onCancel property is passed", () => {
    const component = mount(
      <ModalProvider>
        <Confirm isOpen />
      </ModalProvider>
    );
    component.find("Confirm").prop("onCancel")();
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should fire onCancel function", () => {
    const handleClick = jest.fn();
    const component = mount(
      <ModalProvider>
        <Confirm isOpen onCancel={handleClick} />
      </ModalProvider>
    );
    expect(handleClick).not.toHaveBeenCalled();
    component
      .find("button")
      .at(0)
      .simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("should fire onConfirm function", () => {
    const handleClick = jest.fn();
    const component = mount(
      <ModalProvider>
        <Confirm isOpen onConfirm={handleClick} />
      </ModalProvider>
    );
    expect(handleClick).not.toHaveBeenCalled();
    component
      .find("button")
      .at(1)
      .simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });
});
