import React from "react";
import renderer from "react-test-renderer";

import { Typography } from "./Typography";

const colors = ["red", "green", "blue", "white", "black", "gray"];
const sizes = ["normal", "large"];
const fontFamilies = ["exo", "openSans"];

describe("Typography", () => {
  it("should render", () => {
    const component = renderer.create(<Typography>Test</Typography>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  fontFamilies.forEach(fontFamily => {
    describe(fontFamily, () => {
      it("should render font", () => {
        const component = renderer.create(
          <Typography fontFamily={fontFamily}>Test</Typography>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

      describe("Colors", () => {
        colors.forEach(color => {
          it(`should render ${color} exo font`, () => {
            const component = renderer.create(
              <Typography color={color} fontFamily="exo">
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
          it(`should render ${size} open sans font`, () => {
            const component = renderer.create(
              <Typography size={size} fontFamily="openSans">
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
                <Typography color={color} size={size} fontFamily="exo">
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
