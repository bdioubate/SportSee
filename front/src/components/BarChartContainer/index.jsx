//Recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div id="customTooltip">
          <p>{`${payload[0].value}`}kg</p>
          <p>
            {`${payload[1].value}`}Kcal
          </p>
        </div>
      );
    }
    return null;
  };

const BarChartContainer = ({ data, dataNames }) => {

    return (
      <div id="barChartContainer">
        <h4>Activité quotidienne</h4>
        <ResponsiveContainer width="100%" height="96%">
        <BarChart
          width={835}
          height={320}
          data={data}
          margin={{
            top: 23,
            right: 43,
            left: 43,
            bottom: 0,
          }}
          barSize={7}
          barGap={8}
          tickMargin={16}
          className="barChart__content"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} tick={{ fill: "#9B9EAC" }} tickMargin={2}/>
          <YAxis
            yAxisId="data2"
            tickLine={false}
            orientation="right"
            axisLine={false}
            tick={{ fill: "#9B9EAC" }}
            tickMargin={44}
            minTickGap={40}
            dataKey="data2"
            domain={["dataMin - 1", "dataMax + 1"]}
          />
          <YAxis
            yAxisId="data1"
            dataKey="data1"
            domain={[0, "dataMax + 50"]}
            orientation="left"
            hide
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: " rgba(196, 196, 196, 0.5)" }}
          />
          <Legend
            marginBottom={10}
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={10}
            height={95}
          />
          <Bar
            yAxisId="data2"
            dataKey="data2"
            name={dataNames[1]}
            fill="rgba(40, 45, 48, 1)"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            yAxisId="data1"
            dataKey="data1"
            name={dataNames[0]}
            fill="rgba(230, 0, 0, 1)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
            </ResponsiveContainer>
            </div>
    )
}

export default BarChartContainer