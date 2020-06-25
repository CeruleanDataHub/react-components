import React from "react";

import { Chart } from "../Chart";

export const SemiDonut = ({ title, series }) => {
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

  return <Chart title={title} series={series} options={options} type="pie" />;
};

SemiDonut.propTypes = {
  ...Chart.propTypes,
  /** Title of the chart */
  title: Chart.propTypes.title,
  /** Data to be graphed */
  series: Chart.propTypes.series
};

SemiDonut.defaultProps = {
  title: Chart.defaultProps.title,
  series: Chart.defaultProps.series
};
