import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Cell, Grid } from "../Grid/Grid";
import { Icon } from "../Icon/Icon";

const Container = styled.div`
  padding: 1.2em;
  background-color: ${({ theme }) => theme.background};
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

export const KPICard = ({
  title,
  value,
  growth,
  showPercentage,
  dataFormat,
  currency
}) => (
  <Container>
    {title}

    <Grid>
      <Cell middle data-cell-test>
        {getLocalizedCurrencyValue(value, dataFormat, currency)}
      </Cell>

      {showPercentage && (
        <Cell center as={Bottom}>
          <FlexRow data-flex-row-test>
            {indicateGrowth(growth)}

            {getLocalizedPercentualValue(growth, "percent", 2)}

            <Icon name={getIconName(growth)} as={TriangleIcon} />
          </FlexRow>
        </Cell>
      )}
    </Grid>
  </Container>
);

const getIconName = growth => {
  if (growth === 0) {
    return "minus";
  }

  return growth > 0 ? "chevron-up" : "chevron-down";
};

const indicateGrowth = growth => (growth > 0 ? "+" : "");

const getLocalizedCurrencyValue = (value, dataFormat, currency) =>
  new Intl.NumberFormat("en-EN", getOptions(dataFormat, currency)).format(
    value
  );

const getLocalizedPercentualValue = (value, percent, maximumFractionDigits) =>
  new Intl.NumberFormat(
    "en-EN",
    getOptions(percent, undefined, maximumFractionDigits)
  ).format(value);

const getOptions = (dataFormat, currency, maximumFractionDigits) => ({
  style: dataFormat,
  currency: currency || undefined,
  maximumFractionDigits: maximumFractionDigits || undefined
});

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
  currency: PropTypes.oneOf([null, "EUR", "USD"])
};

KPICard.defaultProps = {
  title: "",
  value: 0,
  growth: 0,
  showPercentage: true,
  dataFormat: "decimal",
  currency: null
};
