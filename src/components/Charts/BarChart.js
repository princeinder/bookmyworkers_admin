import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ legend, label, data }) => {
  const barChartConfig = {
    data: (canvas) => {
      return {
        labels: label,
        datasets: [
          {
            label: legend,
            borderColor: "#fcc468",
            backgroundColor: "#fcc468",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: data,
          },
        ],
      };
    },
    options: {
      legend: {
        display: true,
      },

      tooltips: {
        enabled: true,
      },

      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: true,
              maxTicksLimit: 10,
              stepSize: 5,
              min: 0,
              max: 50,
            },

            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: "rgba(255,255,255,0.05)",
            },
          },
        ],

        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(255,255,255,0.1)",
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f",
            },
          },
        ],
      },
    },
  };
  return <Bar data={barChartConfig.data} options={barChartConfig.options} />;
};

export default BarChart;
