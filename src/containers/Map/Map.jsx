import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import PropTypes from "prop-types";
import React from "react";

highchartsMap(Highcharts);

export const Map = ({ title, minColor, maxColor, series }) => {
  const mapOptions = {
    title: {
      text: title
    },
    credits: {
      enabled: false
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },
    colorAxis: {
      min: 0,
      minColor,
      maxColor
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom"
      }
    },
    series
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="mapChart"
      options={mapOptions}
    />
  );
};

Map.propTypes = {
  /** Title of the map */
  title: PropTypes.string,
  /** Color code for min values */
  minColor: PropTypes.string,
  /** Color code for max values */
  maxColor: PropTypes.string,
  /** Data to be graphed */
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.array,
      mapData: PropTypes.object
    })
  )
};

Map.defaultProps = {
  title: "",
  minColor: "",
  maxColor: "",
  series: []
};