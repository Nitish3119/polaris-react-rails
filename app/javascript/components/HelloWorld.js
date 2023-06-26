import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BarChart, DonutChart, LineChart } from "@shopify/polaris-viz";

const HelloWorld = (props) => {
  const [bar, setBar] = useState([]);
  const [donut, setDonut] = useState([]);
  const [line, setLine] = useState([]);
  const [barData, setBarData] = useState([]);
  const [donutData, setDonutData] = useState([]);
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    fetch('/linechart')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setLine(res))
      .catch((error) => console.error(error));

    fetch('/barchart')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setBar(res))
      .catch((error) => console.error(error));

    fetch('/donutchart')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setDonut(res))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const transformData = () => {
      const barGroup = {};
      const donutGroup = {};
      const lineGroup = {};

      line.forEach((cd) => {
        if (!lineGroup[cd.name]) {
          lineGroup[cd.name] = [];
        }
        lineGroup[cd.name].push(cd);
      });

      const transformedLineData = [];
      for (const name in lineGroup) {
        const data = lineGroup[name].map((cd) => ({
          key: cd.key,
          value: cd.value,
        }));

        transformedLineData.push({ name, data });
      }

      setLineData(transformedLineData);

      bar.forEach((cd) => {
        if (!barGroup[cd.name]) {
          barGroup[cd.name] = [];
        }
        barGroup[cd.name].push(cd);
      });

      const transformedBarData = [];
      for (const name in barGroup) {
        const data = barGroup[name].map((cd) => ({
          key: cd.key,
          value: cd.value,
        }));

        transformedBarData.push({ name, data });
      }

      setBarData(transformedBarData);

      donut.forEach((cd) => {
        if (!donutGroup[cd.name]) {
          donutGroup[cd.name] = [];
        }
        donutGroup[cd.name].push(cd);
      });

      const transformedDonutData = [];
      for (const name in donutGroup) {
        const data = donutGroup[name].map((cd) => ({
          key: cd.key,
          value: cd.value,
        }));

        transformedDonutData.push({ name, data });
      }

      setDonutData(transformedDonutData);
    };

    transformData();
  }, [bar, donut]);
  const annotation = [
  {
    "startKey": "2020-04-02T12:00:00",
    "label": "Sales increase",
    "axis": "x"
  },
  {
    "startKey": "2020-04-06T12:00:00",
    "label": "Super Big Sale",
    "content": {
      "content": "We ran a massive sale on our products. We made a lot of money!"
    },
    "axis": "x"
  },
  {
    "startKey": "540",
    "label": "Sales target",
    "axis": "y"
  },
  {
    "startKey": "300",
    "label": "Break-even",
    "axis": "y",
    "content": {
      "content": "This is our break-even point. We can sell for $10 per unit."
    }
  }
  ]

  return (
    <>
      <div style={{marginBottom: "100px", width: "50%"}}>
        <LineChart data={lineData} annotations={annotation}/>
      </div>
      <div style={{display: "inlineFlex"}}>
        <div style={{ width: "50%"}}>
          <BarChart data={barData} />
        </div>
        <div style={{ width: "50%"}}>
          <DonutChart data={donutData} />
        </div>
      </div>
    </>
  );
};

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};

export default HelloWorld;
