"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const sample = [
  { date: "Jan", revenue: 2000 },
  { date: "Feb", revenue: 3200 },
  { date: "Mar", revenue: 1800 },
  { date: "Apr", revenue: 4000 },
];

export default function OrdersChart() {
  return (
    <LineChart width={600} height={300} data={sample}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
}
