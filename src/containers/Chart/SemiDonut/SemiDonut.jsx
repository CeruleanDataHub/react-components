import PropTypes from "prop-types";
import React from "react";

import { Chart } from "../Chart";

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    align: "center",
    verticalAlign: "middle",
    y: 60
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  accessibility: {
    point: {
      valueSuffix: "%"
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: "bold",
          color: "white"
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ["50%", "75%"],
      size: "110%"
    }
  }
};

/**
 * Use this component to generate Semidonut charts. Component properties are inherited from the `Chart` component.
 */
export const SemiDonut = ({ title, series, containerProps }) => (
  <Chart
    title={title}
    series={series}
    options={options}
    type="pie"
    containerProps={containerProps}
  />
);

SemiDonut.propTypes = {
  /** Title of the chart, type is inherited from the `Chart` base component */
  title: Chart.propTypes.title,
  /** Data to be graphed, type is inherited from the `Chart` base component */
  series: Chart.propTypes.series,
  /** Props to be passed to highcharts, such as styles or classname */
  // eslint-disable-next-line react/forbid-prop-types
  containerProps: PropTypes.object
};

SemiDonut.defaultProps = {
  title: Chart.defaultProps.title,
  series: Chart.defaultProps.series,
  containerProps: null
};
