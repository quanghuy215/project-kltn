import React, { useContext, useState } from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import { GlobalState } from '../../GlobalState';
import { Chart as ChartJS } from 'chart.js/auto';
const Chart = () => {
  const state = useContext(GlobalState);
  const [productName, setProductName] = state.productsAPI.productName;
  const [productSold, setProductSold] = state.productsAPI.productSold;
  const productTitle = [];
  const productQuantitySold = [];

  for (let i = 0; i < productName.length; i++) {
    productTitle[i] = productName[i].title;
  }
  for (let i = 0; i < productSold.length; i++) {
    productQuantitySold[i] = productSold[i].sold;
  }
  const barChartData = {
    labels: productTitle,
    datasets: [
      {
        data: productQuantitySold,
        label: 'Quantity Sold',
        borderColor: '#3333ff',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        fill: true,
      },
    ],
  };

  const barChart = (
    <Bar
      type='bar'
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          text: 'Quantity sold',
          fontSize: 15,
        },
        legend: {
          display: true, //Is the legend shown?
          position: 'right', //Position of the legend.
        },
      }}
      data={barChartData}
    />
  );
  return barChart;
};

export default Chart;
