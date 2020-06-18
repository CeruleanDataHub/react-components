import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";
import React from "react";

const chartDefaults = {
  chart: {
    width: 625,
    height: 299,
    backgroundColor: "#eeeeee",
  },
  credits: { enabled: false },
};

export const Chart = ({ title, xAxis, series, type = "line" }) => {
  const chartOptions = {
    xAxis,
    series,
    title: { text: title },
    ...chartDefaults,
    chart: { ...chartDefaults.chart, type },
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

Chart.propTypes = {
  /** Title of the chart */
  title: PropTypes.string,
  /** Values for X axis */
  xAxis: PropTypes.arrayOf(PropTypes.shape({ categories: PropTypes.array })),
  /** Data to be graphed */
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.array,
    })
  ),
  /** Type of the chart */
  type: PropTypes.oneOf(["line", "bar", "area", "areaspline"]),
};

Chart.defaultProps = {
  title: "",
  xAxis: [],
  series: [],
  type: "line",
};
