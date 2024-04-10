import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
type Props = {};

export default function EnrollmentChart({}: Props) {
  const rangeData = [
    { day: "Mon", temperature: 30 },
    { day: "Tue", temperature: 40 },
    { day: "Wed", temperature: 50 },
    { day: "Thu", temperature: 60 },
    { day: "Fri", temperature: 70 },
    { day: "Sat", temperature: 80 },
    { day: "Sun", temperature: 90 },
  ];
  return (
    <BarChart
      width={730}
      height={250}
      data={rangeData}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="temperature" fill="#8884d8" />
    </BarChart>
  );
}
