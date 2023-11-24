import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Rectangle } from "recharts"

const LineChartContainer = ({ data, dataNames }) => {
    const CustomizedTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div id="customizedTooltip">
            <p>{`${payload[0].value} min`}</p>
          </div>
        );
      }
      return null;
    };
  
    const CustomizedCursor = ({ points = 2500 }) => {
      return (
        <Rectangle
          fill="#000000"
          opacity={0.1}
          x={points[0].x}
          width={258}
          height={263}
        />
      );
    };

    return (
      <div id="lineChartContainer">
        <h3>{dataNames[0]}</h3>
        <LineChart
          width={258}
          height={263}
          data={data}
          margin={{ top: 32, right: 4, left: 4, bottom: 0 }}
        >
          <CartesianGrid horizontal={false} vertical={false}/>
          <XAxis
            dataKey="day"
            tick={{ fill: "#ffffff", fontWeight: 500, fontSize: 12 }}
            fillOpacity={0.5}
            tickLine={false}
            tickMargin={0}
            axisLine={false}
            
          />
  
          <YAxis
            hide={true}
            dataKey="sessionLength"
            domain={["dataMin - 20", "dataMax + 20"]}
          />
  
          <Tooltip
            content={<CustomizedTooltip />}
            cursor={<CustomizedCursor />}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth="2"
            dot={false}
            opacity={0.8}
          />
        </LineChart>
      </div>
    );
  };

  export default LineChartContainer