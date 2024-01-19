import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

const Graph = ({ data }) => {
  return (
    <div className='h-56'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 5,
            bottom: 10,
          }}
        >
          <CartesianGrid />
          <YAxis interval={1} minTickGap={0} />
          <Line type='monotone' dataKey='score' stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
