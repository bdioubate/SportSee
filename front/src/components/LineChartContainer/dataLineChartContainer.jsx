function DataLineChartContainer(data) {
  const dataSessions = [...data]
  //Names
  const dataSessionsNames = ["Durée moyenne des sessions"]

  return (
    {dataSessions, dataSessionsNames}
  )
  }
  
  export default DataLineChartContainer
  