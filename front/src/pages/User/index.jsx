import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

//Components
import Header from '../../components/Header'
import NutritionReport from '../../components/NutritionReport'
import BarChartContainer from '../../components/BarChartContainer'
import LineChartContainer from '../../components/LineChartContainer'
import RadarChartContainer from '../../components/RadarChartContainer' 
import RadialBarChartContainer from '../../components/RadialBarChartContainer'

//Test
//image
import calorieImageNutritionReport from '../../assets/icons/calorie.png'
import proteinImageNutritionReport from '../../assets/icons/protein.png'
import carbohydrateImageNutritionReport from '../../assets/icons/carbohydrate.png'
import lipidImageNutritionReport from '../../assets/icons/lipid.png'


const User = () => {

    const { id } = useParams() 

    const navigate = useNavigate()

    const [data, setData] = useState()
    const [dataPerformance, setDataPerformance] = useState()
    const [dataActivity, setDataActivity] = useState()
    const [dataAverage, setDataAverage] = useState()
    const [error, setError] = useState()
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const apiUrl = `http://localhost:3000/user/${id}`
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

      const fetchDataPerformance = async () => {
        try {
          const apiUrl = `http://localhost:3000/user/${id}/performance`
          const response = await fetch(apiUrl);
  
          if (!response.ok) {
            throw new Error('La requête a échoué')
          }
  
          const jsonData = await response.json()
          setDataPerformance(jsonData)
        } catch (error) {
          setError(error)
        }
      }

      const fetchDataActivity = async () => {
        try {
          const apiUrl = `http://localhost:3000/user/${id}/activity`
          const response = await fetch(apiUrl);
  
          if (!response.ok) {
            throw new Error('La requête a échoué')
          }
  
          const jsonData = await response.json()
          setDataActivity(jsonData)
        } catch (error) {
          setError(error)
        }
      }

      const fetchDataAverage = async () => {
        try {
          const apiUrl = `http://localhost:3000/user/${id}/average-sessions`
          const response = await fetch(apiUrl);
  
          if (!response.ok) {
            throw new Error('La requête a échoué')
          }
  
          const jsonData = await response.json()
          setDataAverage(jsonData)
        } catch (error) {
          setError(error)
        }
      }

      fetchDataAverage()
      fetchDataActivity()
      fetchDataPerformance()
      fetchData()
    }, [id, navigate])

    if (error) {
      return navigate(`/404`, { replace: true })
    }

  return (
    data && dataPerformance && dataActivity && dataAverage && (
    <div id='dashboard__container__data'>
      {console.log(dataPerformance.data)}
        <Header
            prenom={data.data.userInfos.firstName}
        />
        <div id='dashboard__container__data__analytics'>
          <div id='dashboard__container__data__analytics__activity'>
            <BarChartContainer 
              data={dataActivity.data.sessions}
            />
          </div>
          <div id='dashboard__container__data__analytics__graphs'> 
            <LineChartContainer
              data={dataAverage.data.sessions}
            />
            <RadarChartContainer
              data={dataPerformance.data} 
            />
            <RadialBarChartContainer
            score={Object.values(data.data)[2]}
            />
          </div>
          <div id='dashboard__container__data__analytics__nutrition'>
            {/*Object.entries(data.data.keyData).forEach((x, index) => {
              <NutritionReport 
              key={`${index}`}
              icon={calorieImageNutritionReport}
              count={x[1]}
              name={x[0].split('Count')[0]}
              />
            })*/} 
            <NutritionReport  
            icon={calorieImageNutritionReport}
            count={Object.values(data.data.keyData)[0]}
            name={Object.keys(data.data.keyData)[0].split('Count')[0]}
            />
            <NutritionReport  
            icon={proteinImageNutritionReport}
            count={Object.values(data.data.keyData)[1]}
            name={Object.keys(data.data.keyData)[1].split('Count')[0]}
            />
            <NutritionReport  
            icon={carbohydrateImageNutritionReport}
            count={Object.values(data.data.keyData)[2]}
            name={Object.keys(data.data.keyData)[2].split('Count')[0]}
            />
            <NutritionReport  
            icon={lipidImageNutritionReport}
            count={Object.values(data.data.keyData)[3]}
            name={Object.keys(data.data.keyData)[3].split('Count')[0]}
            />
          </div>
        </div>
    </div>
  )
  )
}

export default User