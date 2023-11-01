import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {
  return (
    <div
      style={{
        height: "50%",
        width: "80%",
      }}
    >
      <h2 style={{ textAlign: "center" }}></h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
