import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const options = {
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May'],
    },
  };

  const series = [
    {
      name: 'Monthly Sales',
      data: [30, 25, 40, 10, 50],
    },
  ];

  return (
    <div>
      <h2>Line Chart</h2>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LineChart;