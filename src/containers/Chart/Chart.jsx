import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsWheel from "highcharts/modules/dependency-wheel";
import HighchartSankey from "highcharts/modules/sankey";
import TreeMap from "highcharts/modules/treemap";
import PropTypes from "prop-types";
import React from "react";

HighchartSankey(Highcharts);
HighchartsWheel(Highcharts);
TreeMap(Highcharts);

const chartDefaults = {
  credits: { enabled: false }
};

export const Chart = ({
  title,
  xAxis,
  series,
  type = "line",
  options = {}
}) => {
  const chartOptions = {
    ...chartDefaults,
    ...options,
    xAxis,
    series,
    title: { ...options.title, text: title },
    chart: { ...options.chart, type },
    plotOptions: {
      ...options.plotOptions,
      series: {
        animation: false
      }
    }
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
      data: PropTypes.array
    })
  ),
  /** Type of the chart */
  type: PropTypes.oneOf([
    "line",
    "bar",
    "area",
    "spline",
    "areaspline",
    "heatmap"
  ]),
  /** You can use highcharts options to extend the chart behavior */
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object
};

Chart.defaultProps = {
  title: "",
  xAxis: null,
  series: [],
  type: "line",
  options: {}
};
