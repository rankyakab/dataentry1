import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadarChart = () => {
  const options = {
    chart: {
      id: 'radar-chart',
    },
    xaxis: {
      categories: ['Sales', 'Marketing', 'Development', 'Support', 'Administration', 'IT'],
    },
  };

  const series = [
    {
      name: 'Department Scores',
      data: [80, 60, 75, 45, 60, 70],
    },
  ];

  return (
    <div>
      <h2>Radar Chart</h2>
      <ReactApexChart options={options} series={series} type="radar" height={350} />
    </div>
  );
};

export default RadarChart;
