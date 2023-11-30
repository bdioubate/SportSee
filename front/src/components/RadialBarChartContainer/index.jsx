import { RadialBarChart, RadialBar } from 'recharts';

const RadialBarChartContainer = ({data, dataNames}) => { 
  const dataRadial = [
    {
      uv: 1,
      fill: "#FF0000" 
    }
  ]

  const pourcentageScore = data * 100
  const angleScore = data * 360

  return (
    <div id="radialBarChartContainer" > 
    <h4>{dataNames[0]}</h4>
    <p><span>{`${pourcentageScore}`}%</span>de votre objectif</p>
    <RadialBarChart
      width={254}
      height={258}
      data={dataRadial}
      style={{ backgroundColor: "#FBFBFB", borderRadius: "5px" }}
      innerRadius={88}
      barSize={10} 
      startAngle={angleScore} 
      endAngle={0}
    >
      <RadialBar dataKey="uv" />
    </RadialBarChart>
      </div>
  )
}

export default RadialBarChartContainer