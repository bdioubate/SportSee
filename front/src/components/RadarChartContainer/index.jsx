import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"

const RadarChartContainer = ({ data }) => {  

  return (
    <div id="radarChartContainer">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="72%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#ffffff", fontSize: 12 }} />
          <PolarRadiusAxis tick={false} axisLine={false}/>
          <Radar dataKey="A" fill="#ff0000" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChartContainer