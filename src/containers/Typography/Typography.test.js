import React from "react";
import renderer from "react-test-renderer";

import { Typography } from "./Typography";

const colors = ["red", "green", "blue", "white", "black", "gray"];
const sizes = ["normal", "large"];

// true means exo font, false open sans
const fontFamilies = [false, true];

describe("Typography", () => {
  it("should render", () => {
    const component = renderer.create(<Typography>Test</Typography>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  fontFamilies.forEach(isExo => {
    describe(isExo ? "Exo" : "Open Sans", () => {
      it("should render font", () => {
        const component = renderer.create(
          <Typography exo={isExo}>Test</Typography>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

      describe("Colors", () => {
        colors.forEach(color => {
          it(`should render ${color} exo font`, () => {
            const component = renderer.create(
              <Typography color={color} exo={isExo}>
                Test
              </Typography>
            );
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
          });
        });
      });

      describe("Sizes", () => {
        sizes.forEach(size => {
          it(`should render ${size} exo font`, () => {
            const component = renderer.create(
              <Typography size={size} exo={isExo}>
                Test
              </Typography>
            );
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
          });
        });
      });

      describe("Sizes & Colors combinations", () => {
        colors.forEach(color => {
          sizes.forEach(size => {
            it(`should render ${color} ${size} exo font`, () => {
              const component = renderer.create(
                <Typography color={color} size={size} exo={isExo}>
                  Test
                </Typography>
              );
              const tree = component.toJSON();
              expect(tree).toMatchSnapshot();
            });
          });
        });
      });
    });
  });
});
