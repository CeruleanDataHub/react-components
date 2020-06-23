import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Cell, Grid } from "../Grid/Grid";
import { Icon } from "../Icon/Icon";

const Container = styled.div`
  padding: 1.2em;
  font-family: Helvetica;
  font-size: 0.9rem;
`;

const colors = { red: "red", green: "green", blue: "#1ea7fd" };

const Color = styled.span`
  color: ${({ textColor }) => textColor};
`;

const Value = styled.span`
  font-size: 2.2rem;
`;

const Bottom = styled.span`
  justify-content: flex-end;
  display: inline-flex;
  flex-direction: column;
`;

const FlexRow = styled.span`
  flex-direction: row;
`;

const TriangleIcon = styled.div`
  font-size: 1rem;
  margin-right: 0.3rem;
`;

const getGrowthColor = growth => {
  if (growth === 0) {
    return colors.blue;
  }

  return growth > 0 ? colors.green : colors.red;
};

export const StatisticsBox = ({
  title,
  value,
  growth,
  redValue = false,
  greenValue = false
}) => (
  <Container>
    {title}
    <Grid>
      <Cell middle>
        <Color
          textColor={
            (redValue && colors.red) || (greenValue && colors.green) || null
          }
          as={Value}
        >
          {new Intl.NumberFormat().format(value)}
        </Color>
      </Cell>
      <Cell center as={Bottom}>
        <FlexRow>
          <Color textColor={getGrowthColor(growth)}>
            <Icon name="pyramids" as={TriangleIcon} />
          </Color>
          {new Intl.NumberFormat("en-EN", {
            style: "percent",
            maximumFractionDigits: 2
          }).format(growth)}
        </FlexRow>
      </Cell>
    </Grid>
  </Container>
);

StatisticsBox.propTypes = {
  /** Title for the box */
  title: PropTypes.string,
  /** Numeric value */
  value: PropTypes.number,
  /** Growth is converted from a fraction to percent, for example value 0.15 indicates 15% */
  growth: PropTypes.number,
  /** Defines whether the value should be red */
  redValue: PropTypes.bool,
  /** Defines whether the value should be green */
  greenValue: PropTypes.bool
};

StatisticsBox.defaultProps = {
  title: "",
  value: 0,
  growth: 0,
  redValue: false,
  greenValue: false
};