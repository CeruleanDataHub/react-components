import { configure } from "enzyme";
import React from "react";
import "jest-enzyme";
import Adapter from "enzyme-adapter-react-16";
import Highcharts from "highcharts";

configure({ adapter: new Adapter() });

const SetupHighchartsForTesting = () => {
  Highcharts.useSerialIds(true);
};

SetupHighchartsForTesting();

React.useLayoutEffect = React.useEffect;
