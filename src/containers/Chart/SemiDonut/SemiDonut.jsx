import React from "react";

import { Chart } from "../Chart";

export const SemiDonut = ({ title, xAxis, series }) => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: title,
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
    },
    series: series.map(value => ({ ...value, type: "pie" }))
  };

  return (
    <Chart title={title} xAxis={xAxis} series={series} options={options} />
  );
};

SemiDonut.propTypes = {
  ...Chart.propTypes,
  /** Title of the chart */
  title: Chart.propTypes.title,
  /** Values for X axis */
  xAxis: Chart.propTypes.xAxis,
  /** Data to be graphed */
  series: Chart.propTypes.series
};

SemiDonut.defaultProps = {
  title: Chart.defaultProps.title,
  xAxis: Chart.defaultProps.xAxis,
  series: Chart.defaultProps.series
};
