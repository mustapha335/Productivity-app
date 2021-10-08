import "./Chart.css";
import React from "react";
import { LineChart, Line, XAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Page A",

    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",

    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",

    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",

    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",

    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",

    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",

    pv: 4300,
    amt: 2100,
  },
];

export default function chart() {
  return (
    <LineChart
      width={600}
      height={250}
      data={data}
      margin={{
        top: 15,
        right: 35,
        left: 25,
        bottom: 5,
      }}
      className="chart"
    >
      <XAxis dataKey="name" className="x_axis" stroke="#000000" />
      {/* <YAxis className="y_axis" /> */}
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 6 }}
        dot={{ r: 5 }}
      />
    </LineChart>
  );
}
