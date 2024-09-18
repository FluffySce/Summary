import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PublicationsGraph = ({ data }) => {
  const chartData = {
    labels: data.publicationsDataGoogle.years,
    datasets: [
      {
        label: "Google Scholar Publications",
        data: data.publicationsDataGoogle.publications,
        borderColor: "rgba(53, 102, 255, 1)",
        backgroundColor: "rgba(53, 102, 255, 0.2)",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Scopus Publications",
        data: data.publicationsDataScopus.publications,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart resizes properly
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        // text: 'Publications Over Time',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PublicationsGraph;
