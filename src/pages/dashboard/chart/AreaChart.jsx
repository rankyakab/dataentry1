import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = () => {
  const options = {
    chart: {
      id: 'area-chart',
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
      <h2>Area Chart</h2>
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default AreaChart;
