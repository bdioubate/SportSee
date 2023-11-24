function DataRadarChartContainer(data) {

  const dataSessions = []
  const dataValues = data.data
  const dataNames = data.kind
  console.log(dataValues)

  Object.values(dataValues).forEach((x, index) => {
    const radar = {
      subject: dataNames[index+1],
      A: x.value,
    }

    dataSessions.unshift(radar)
  }) 

    return (
      {dataSessions}
    )
  }
  
  export default DataRadarChartContainer
  