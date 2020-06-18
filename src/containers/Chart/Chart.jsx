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
  title: null,
  yAxis: {
    title: { enabled: false },
  },
  legend: { enabled: false },
  credits: { enabled: false },
};

export const Chart = ({ xAxis, series }) => {
  const chartOptions = {
    xAxis,
    series,
    ...chartDefaults,
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

Chart.propTypes = {
  xAxis: PropTypes.arrayOf(
    PropTypes.shape({ categories: PropTypes.arrayOf(PropTypes.string) })
  ),
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.number),
    })
  ),
};

Chart.defaultProps = {
  xAxis: [],
  series: [],
};
