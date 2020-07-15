import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { ModalProvider } from "styled-react-modal";

import { Modal } from "./Modal";

describe("Modal", () => {
  it("should render open Modal with children", () => {
    const component = shallow(
      <ModalProvider>
        <Modal isOpen>
          <p>Modal content</p>
        </Modal>
      </ModalProvider>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should call default props onBackgroundClick function when no onBackgroundClick property is passed", () => {
    const component = shallow(
      <ModalProvider>
        <Modal isOpen>
          <p>Modal content</p>
        </Modal>
      </ModalProvider>
    );
    component.find("Modal").invoke("onBackgroundClick");
    expect(toJson(component)).toMatchSnapshot();
  });
});
