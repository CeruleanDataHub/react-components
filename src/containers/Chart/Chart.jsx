import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { isEqual } from 'lodash';

export class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverData: null,
    };
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.series[0].data, this.props.series[0].data);
  }

  setHoverData(e) {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category });
  }

  getChartOptions() {
    return new Object({
      chart: {
        width: 625,
        height: 299,
        backgroundColor: '#eeeeee',
      },
      title: null,
      xAxis: this.props.xAxis,
      yAxis: {
        title: { enabled: false },
      },
      series: this.props.series,
      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver: this.setHoverData.bind(this),
            },
          },
        },
      },
      legend: { enabled: false },
      credits: { enabled: false },
    });
  }

  render() {
    if (!this.props.xAxis || this.props.xAxis.length === 0 || !this.props.series || this.props.series.length === 0) {
      return <div> loading ... </div>;
    }
    const chartOptions = this.getChartOptions();
    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
  }
}
