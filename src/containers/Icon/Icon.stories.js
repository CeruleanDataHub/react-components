import React from "react";
import styled from "styled-components";

import humidity from "../../assets/images/humidity.svg";
import { Icon, names } from "./Icon";

export default {
  title: "Icon",
  component: Icon
};

export const IconStory = () =>
  names.map(name => (
    <span style={{ display: "inline-block", margin: 20 }} key={name}>
      <Icon name={name} />
    </span>
  ));

const CustomIcon = styled.span`
  font-size: 1.5em;
  margin-right: 1.75rem;
  background-color: red;
`;

export const IconStyled = () => <Icon name="home" as={CustomIcon} />;

export const CustomIconStory = () => <Icon customIcon={humidity} />;
