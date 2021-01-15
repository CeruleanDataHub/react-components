import { mount } from "enzyme";
import React from "react";
import { ModalProvider } from "styled-react-modal";

import { Confirm } from "./Confirm";

describe("Confirm", () => {
  let component;
  let handleOnCancelMock;
  let handleOnConfirmMock;

  beforeEach(() => {
    handleOnCancelMock = jest.fn();
    handleOnConfirmMock = jest.fn();

    component = mount(
      <ModalProvider>
        <Confirm
          title="Some title"
          content="Some modal content"
          isOpen
          onCancel={handleOnCancelMock}
          onConfirm={handleOnConfirmMock}
        />
      </ModalProvider>
    );
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });

  it("does not call onCancel yet", () => {
    expect(handleOnCancelMock).not.toHaveBeenCalled();
  });

  it("when cancel button is clicked, calls onCancel", () => {
    component
      .find("ForwardRef[data-cancel-button-test]")
      .props()
      .onClick();

    expect(handleOnCancelMock).toHaveBeenCalled();
  });

  it("does not call onConfirm yet", () => {
    expect(handleOnConfirmMock).not.toHaveBeenCalled();
  });

  it("when confirm button is called, calls onConfirm", () => {
    component
      .find("ForwardRef[data-confirm-button-test]")
      .props()
      .onClick();

    expect(handleOnConfirmMock).toHaveBeenCalled();
  });

  it("given isOpen is false, should not be open", () => {
    component = mount(
      <ModalProvider>
        <Confirm isOpen={false} onConfirm={() => {}} onCancel={() => {}} />
      </ModalProvider>
    );

    expect(component.find("div[data-styled-modal-test]")).not.toExist();
  });
});
