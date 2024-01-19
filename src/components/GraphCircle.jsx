import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const COLORS = ['#6A5DFF', '#FF5DFF', '#50db00', '#FFC200'];

const getPercentage = (value, total) => Math.round((value / total) * 100);

const GraphCircle = ({ data }) => {
  return (
    <>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={(entry) =>
            `${entry.name} (${getPercentage(
              entry.value,
              data.reduce((acc, curr) => acc + curr.value, 0)
            )}%)`
          }
          outerRadius={80}
          innerRadius={40}
          fill='#8884d8'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index + entry.name}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </>
  );
};

export default GraphCircle;
