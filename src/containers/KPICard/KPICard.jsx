import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Cell, Grid } from "../Grid/Grid";
import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography/Typography";

const Container = styled.div`
  padding: 1.2em;
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
  margin-left: 0.3rem;
`;

const getGrowthColor = growth => {
  if (growth === 0) {
    return "blue";
  }

  return growth > 0 ? "green" : "red";
};

const getIconName = growth => {
  if (growth === 0) {
    return "minus";
  }

  return growth > 0 ? "chevron-up" : "chevron-down";
};

export const KPICard = ({
  title,
  value,
  growth,
  showPercentage,
  dataFormat,
  currency,
  redValue,
  greenValue
}) => (
  <Container>
    <Typography color="gray" fontFamily="openSans">
      {title}
    </Typography>
    <Grid>
      <Cell middle>
        <Typography
          fontFamily="exo"
          size="large"
          color={(redValue && "red") || (greenValue && "green") || null}
        >
          {new Intl.NumberFormat("en-EN", {
            style: dataFormat,
            ...(currency ? { currency } : {})
          }).format(value)}
        </Typography>
      </Cell>
      {showPercentage && (
        <Cell center as={Bottom}>
          <FlexRow>
            <Typography fontFamily="exo" color={getGrowthColor(growth)}>
              {growth > 0 ? "+" : ""}
              {new Intl.NumberFormat("en-EN", {
                style: "percent",
                maximumFractionDigits: 2
              }).format(growth)}
              <Icon name={getIconName(growth)} as={TriangleIcon} />
            </Typography>
          </FlexRow>
        </Cell>
      )}
    </Grid>
  </Container>
);

KPICard.propTypes = {
  /** Title for the box */
  title: PropTypes.string,
  /** Numeric value */
  value: PropTypes.number,
  /** Growth is converted from a fraction to percent, for example value 0.15 indicates 15% */
  growth: PropTypes.number,
  /** Defines whether to show the growth percentage */
  showPercentage: PropTypes.bool,
  /** Defines whether the data should be displayed as a decimal or as currency */
  dataFormat: PropTypes.oneOf(["decimal", "currency"]),
  /** Defines in which currency the value would be printed */
  currency: PropTypes.oneOf([null, "EUR", "USD"]),
  /** Defines whether the value should be red */
  redValue: PropTypes.bool,
  /** Defines whether the value should be green */
  greenValue: PropTypes.bool
};

KPICard.defaultProps = {
  title: "",
  value: 0,
  growth: 0,
  showPercentage: true,
  dataFormat: "decimal",
  currency: null,
  redValue: false,
  greenValue: false
};
