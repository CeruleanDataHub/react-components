import React from "react";
import renderer from "react-test-renderer";

import { Icon, names } from "./Icon";

describe("Icon", () => {
  describe("should render icon", () => {
    names.map((name) =>
      it(name, () => {
        const component = renderer.create(<Icon name={name} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      })
    );
  });
});
