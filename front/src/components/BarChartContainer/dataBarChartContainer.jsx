//import { useState } from "react"

function DataBarChartContainer(data) {
  const dataSessions = []

  Object.entries(data).forEach((x) => {
    const session = {
      day: Number(x[0])+1,
      data1: x[1].calories,
      data2: x[1].kilogram
    }
    dataSessions.push(session)
  })

  //Names
  const dataSessionsNames = ["Calories brûlées (kCal)", "Poids (kg)"]

    return (
      {dataSessions, dataSessionsNames}
    )
}

export default DataBarChartContainer
