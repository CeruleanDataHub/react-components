import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useState } from "react";

export const Chart = ({ xAxis, series }) => {
  // hoverData is not used
  const [hoverData, setHoverData] = useState(null);

  const chartOptions = {
    xAxis,
    series,
    chart: {
      width: 625,
      height: 299,
      backgroundColor: "#eeeeee",
    },
    title: null,
    yAxis: {
      title: { enabled: false },
    },
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver: ({ target }) =>
              setHoverData({ hoverData: target.category }),
          },
        },
      },
    },
    legend: { enabled: false },
    credits: { enabled: false },
  };

  // is this something this component should handle?
  // I think loading message should be displayed by the component which loads the data and calls this component - juhq
  if (!xAxis || xAxis.length === 0 || !series || series.length === 0) {
    return <div> loading ... </div>;
  }

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
