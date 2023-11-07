import React from "react" 
import { RadialBarChart, RadialBar } from 'recharts';

const RadialBarChartContainer = ({score}) => { 
  const dataRadial = [
    {
      uv: 1,
      fill: "#FF0000" 
    }
  ];

  const pourcentageScore = score * 100
  const angleScore = score * 360

  return (
    <div id="radialBarChartContainer" > 
    <h4>Score</h4>
    <p><span>{`${pourcentageScore}`}%</span>de votre objectif</p> {/*span valeur a modifier*/}
    <RadialBarChart
      width={254}
      height={258}
      data={dataRadial}
      style={{ backgroundColor: "#FBFBFB", borderRadius: "5px" }}
      innerRadius={88}
      barSize={10}
      startAngle={angleScore} //Valeur a modifier
      endAngle={0}
    >
      <RadialBar dataKey="uv" />
    </RadialBarChart>
      </div>
  )
}

export default RadialBarChartContainer