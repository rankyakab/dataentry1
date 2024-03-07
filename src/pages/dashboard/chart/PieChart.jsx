import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const options = {
    chart: {
      id: 'pie-chart',
    },
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  };

  const series = [12, 19, 3, 5, 2];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default PieChart;
