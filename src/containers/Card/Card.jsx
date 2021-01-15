import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography/Typography";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.25em;
  border: 1px solid #000000;
  background-color: #ffffff;
  height: 20em;
  text-align: center;
  box-sizing: border-box;
`;

const CardHeader = styled.h3`
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

const CardBody = styled.div`
  text-align: center;
`;

const LargeIcon = styled.span`
  font-size: 3rem;
`;

export const Card = ({ title, icon, children }) => (
  <CardContainer>
    {icon && <Icon name={icon} as={LargeIcon} data-icon-test />}

    {title && (
      <CardHeader data-title-test>
        <Typography fontFamily="exo">{title}</Typography>
      </CardHeader>
    )}

    <CardBody data-card-body-test>{children}</CardBody>
  </CardContainer>
);

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node
};

Card.defaultProps = {
  title: null,
  icon: null,
  children: ""
};
