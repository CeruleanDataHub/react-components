import React from "react";
import renderer from "react-test-renderer";

import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  let component;

  beforeEach(() => {
     component = renderer.create(<Dropdown>Some content</Dropdown>);
  });

  it("renders", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has default onClick', () => {
    const actual = component.root.findByType('button').props.onClick;
    expect(actual).toBeTruthy()
  });

  describe('given open dropdown with children', () => {
    let isOpenStub;
    let childrenStub

    beforeEach(() => {
      isOpenStub = true;
      childrenStub = <li>Some content</li>

      component = renderer.create(<Dropdown isOpen={isOpenStub}>{childrenStub}</Dropdown>);
    });

    it("should show itemList", () => {
      expect(component.root.findByProps({"data-item-list-test": true})).toBeTruthy()
    });

    it("should have correct children", () => {
      const {children} = component.root.findByProps({"data-item-list-test": true}).props;
      expect(children).toEqual(childrenStub)
    });
  });

  describe('given onClick', () => {
    let onClickMock;

    beforeEach(() => {
      onClickMock = jest.fn()
      component = renderer.create(
        <Dropdown onClick={onClickMock}>Some content</Dropdown>
      );
    });

    it("has onClick", () => {
      const actual = component.root.findByType('button').props.onClick;
      expect(actual).toEqual(onClickMock)
    });

    it("does not call onClick yet", () => {
      expect(onClickMock).not.toHaveBeenCalled();
    });

    it("when called, calls callback function", () => {
      component.root.findByType("button").props.onClick()

      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
