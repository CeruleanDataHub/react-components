import React from "react";

import { Chart } from "../Chart";

const treeMapSeriesOptions = {
  type: "treemap",
  layoutAlgorithm: "squarified",
  alternateStartingDirection: true,
  levels: [
    {
      level: 1,
      layoutAlgorithm: "strip",
      dataLabels: {
        enabled: true,
        align: "left",
        verticalAlign: "top",
        style: {
          fontSize: "15px",
          fontWeight: "bold"
        }
      }
    }
  ]
};

export const TreeMap = ({ title, series }) => {
  const options = {
    title: {
      text: title
    },
    series: series.map(value => ({
      ...value,
      ...treeMapSeriesOptions
    }))
  };

  return <Chart title={title} series={series} options={options} />;
};

TreeMap.propTypes = {
  ...Chart.propTypes,
  /** Title of the chart */
  title: Chart.propTypes.title,
  /** Data to be graphed */
  series: Chart.propTypes.series
};

TreeMap.defaultProps = {
  title: Chart.defaultProps.title,
  series: Chart.defaultProps.series
};
