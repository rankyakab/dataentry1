import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const options = {
    chart: {
      id: 'donut-chart',
    },
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  };

  const series = [12, 19, 3, 5, 2];

  return (
    <div>
      <h2>Donut Chart</h2>
      <ReactApexChart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default DonutChart;