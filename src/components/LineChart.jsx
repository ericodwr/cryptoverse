import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js';

import { Col, Row, Typography } from 'antd';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const LineChart = ({ coinName, currentPrice, coinHistory }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp * 1000).toDateString(),
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: 'false',
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
          {coinName}
        </Typography.Title>
        <Typography.Title level={5} className="price-change">
          {coinHistory?.data?.change}%
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="current-change">
            Current {coinName} Price $ {currentPrice} %
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} />
    </>
  );
};

export default LineChart;
