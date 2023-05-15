import React, { useState } from 'react';
import { ArcElement } from "chart.js";

import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  });

 

  return (
    <div>
      <Pie data={chartData} />
      <button >Change Colors</button>
    </div>
  );
};

export default PieChart;
