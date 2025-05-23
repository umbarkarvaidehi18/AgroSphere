import { useEffect, useRef } from "react";
import React from "react";
import Chart from "chart.js/auto";

const YieldChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart
      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Actual Yield",
              data: [
                null,
                null,
                null,
                null,
                3.1,
                3.4,
                3.6,
                3.9,
                4.0,
                null,
                null,
                null,
              ],
              borderColor: "rgb(75, 192, 192)",
              tension: 0.3,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
              pointBackgroundColor: "rgb(75, 192, 192)",
              pointRadius: 4,
              pointHoverRadius: 6,
            },
            {
              label: "Predicted Yield",
              data: [
                null,
                null,
                null,
                null,
                3.0,
                3.2,
                3.5,
                3.8,
                4.0,
                4.1,
                4.2,
                4.2,
              ],
              borderColor: "rgb(255, 159, 64)",
              borderDash: [5, 5],
              tension: 0.3,
              pointBackgroundColor: "rgb(255, 159, 64)",
              pointRadius: 4,
              pointHoverRadius: 6,
            },
            {
              label: "Last Year",
              data: [
                3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.0,
              ],
              borderColor: "rgba(153, 102, 255, 0.5)",
              tension: 0.3,
              pointRadius: 0,
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.parsed.y !== null) {
                    label += context.parsed.y + " t/ha";
                  }
                  return label;
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: false,
              min: 2.5,
              title: {
                display: true,
                text: "Yield (t/ha)",
              },
            },
            x: {
              title: {
                display: true,
                text: "Month",
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default YieldChart;
