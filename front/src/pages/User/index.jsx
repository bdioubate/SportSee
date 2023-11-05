import React, { useEffect, useState } from 'react'
//Components
import Header from '../../components/Header'
import NutritionReport from '../../components/NutritionReport'

//Test
//image
import imageNutritionReport from '../../assets/icons/calorie.png'

const User = () => {
  /*
    useEffect(() => {
      fetch(`http://localhost:3000/user/12/performance`)
          .then((response) => response.json()
          .then(({ data }) => console.log(data))
          .catch((error) => console.log(error))
      )
    }, [])*/

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const apiUrl = `http://localhost:3000/user/18`
          const response = await fetch(apiUrl);
  
          if (!response.ok) {
            throw new Error('La requête a échoué')
          }
  
          const jsonData = await response.json()
          setData(jsonData)
        } catch (error) {
          setError(error)
        }
      }
  
      fetchData()
    }, [])

    if (error) {
      return <div>Une erreur s'est produite : {error.message}</div>;
    }

  return (
    data && (
    <div id='dashboard__container__data'>
        <Header
            prenom={data.data.userInfos.firstName}
        />
        <div id='dashboard__container__data__analytics'>
          <div id='dashboard__container__data__analytics__activity'>
          <p>Barcharts, BarChartWithMinHeight</p>

          </div>
          <div id='dashboard__container__data__analytics__graphs'>
            <p>{JSON.stringify(data.data)}</p>
            <p>{Object.keys(data.data.keyData)}</p>
            <p>1 - lineCharts, SimpleLineChart</p>
            <p>2 - radarCharts, SimpleRadarChart</p>
            <p>3 - radialBarCharts, SimpleRadialBarChart</p>
          </div>
          <div id='dashboard__container__data__analytics__nutrition'>
            <NutritionReport  
            icon={imageNutritionReport}
            count={Object.values(data.data.keyData)[0]}
            name={Object.keys(data.data.keyData)[0]}
            />
            <NutritionReport  
            icon={imageNutritionReport}
            count={Object.values(data.data.keyData)[0]}
            name={Object.keys(data.data.keyData)[0]}
            />
            <NutritionReport  
            icon={imageNutritionReport}
            count={Object.values(data.data.keyData)[0]}
            name={Object.keys(data.data.keyData)[0]}
            />
            <NutritionReport  
            icon={imageNutritionReport}
            count={Object.values(data.data.keyData)[0]}
            name={Object.keys(data.data.keyData)[0]}
            />
          </div>
        </div>
    </div>
  )
  )
}

export default User