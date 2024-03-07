import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const options = {
    chart: {
      id: 'bar-chart',
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
      <h2>Bar Chart</h2>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
