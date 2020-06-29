import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const sizes = { normal: "16px", large: "40px" };
const colors = {
  red: "#ff0066",
  green: "#90ee7e",
  blue: "#1ea7fd",
  white: "white",
  black: "black",
  gray: "#999999"
};

const fontFamilies = { exo: '"Exo 2"', openSans: '"Open Sans"' };

const fontFamilyStyle = fontFamily => {
  if (!fontFamily) {
    return "initial";
  }
  return `${fontFamilies[fontFamily]}, sans-serif`;
};

const Container = styled.div`
  font-family: ${({ fontFamily }) => fontFamilyStyle(fontFamily)};
  font-size: ${({ size }) => sizes[size] || sizes.normal};
  color: ${({ textColor }) => colors[textColor] || colors.black};
`;

export const Typography = ({
  size,
  color,
  exo = false,
  fontFamily,
  children
}) => (
  <Container textColor={color} size={size} exo={exo} fontFamily={fontFamily}>
    {children}
  </Container>
);

Typography.propTypes = {
  /** Text color, values predefined */
  color: PropTypes.oneOf(["red", "green", "blue", "white", "black", "gray"]),
  /** Text size, values predefined */
  size: PropTypes.oneOf(["normal", "large"]),
  /** Define whether to render text with Exo 2 font or Open Sans  */
  exo: PropTypes.bool,
  fontFamily: PropTypes.oneOf(["exo", "openSans"]),

  /** React node */
  children: PropTypes.node
};

Typography.defaultProps = {
  color: "black",
  size: "normal",
  exo: false,
  fontFamily: null,
  children: ""
};
