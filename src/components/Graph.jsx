import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
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
          <YAxis interval={1} minTickGap={0} domain={[0, 5]} />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='response' stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
