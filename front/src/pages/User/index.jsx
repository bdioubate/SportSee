import { useParams } from 'react-router-dom'

//Components
import Header from '../../components/Header'
import NutritionReport from '../../components/NutritionReport'
import BarChartContainer from '../../components/BarChartContainer'
import LineChartContainer from '../../components/LineChartContainer'
import RadarChartContainer from '../../components/RadarChartContainer' 
import RadialBarChartContainer from '../../components/RadialBarChartContainer'

//Data Transformation for Components
import DataBarChartContainer from '../../components/BarChartContainer/dataBarChartContainer'
import DataLineChartContainer from '../../components/LineChartContainer/dataLineChartContainer'
import DataRadarChartContainer from '../../components/RadarChartContainer/dataRadarChartContainer'
import DataRadialBarChartContainer from '../../components/RadialBarChartContainer/dataRadialBarChartContainer'

//API call
import CallAPI from '../../data/CallAPI'

//image
import calorieImageNutritionReport from '../../assets/icons/calorie.png'
import proteinImageNutritionReport from '../../assets/icons/protein.png'
import carbohydrateImageNutritionReport from '../../assets/icons/carbohydrate.png'
import lipidImageNutritionReport from '../../assets/icons/lipid.png'


const User = () => {

  const { id } = useParams() 

  
  const {data, dataPerformance, dataActivity, dataAverage} = CallAPI(id)

  //Data for Components
  let dataSessions = []
  let dataSessionsNames = []
  //const {dataTest} = DataBarChartContainer(dataActivity.data.sessions)
  //console.log(dataTest)


  return (
    data && dataPerformance && dataActivity && dataAverage && dataSessions && dataSessionsNames && (
    <div id='dashboard__container__data'>
      {console.log(dataPerformance.data)}
        <Header
            prenom={data.data.userInfos.firstName}
        />
        <div id='dashboard__container__data__analytics'>
          <div id='dashboard__container__data__analytics__activity'>
            {
              ({dataSessions, dataSessionsNames} = DataBarChartContainer(dataActivity.data.sessions),
              <BarChartContainer 
                data={dataSessions}
                dataNames={dataSessionsNames}
              />)
            }
          </div>
          <div id='dashboard__container__data__analytics__graphs'> 
            {(
              {dataSessionsNames} = DataLineChartContainer(dataActivity.data.sessions),
              <LineChartContainer
                data={dataAverage.data.sessions}
                dataNames={dataSessionsNames}
              />
            )}
            {(
              {dataSessions} = DataRadarChartContainer(dataPerformance.data),
              <RadarChartContainer
                data={dataSessions} 
              /> 
            )}
            {(
              {dataSessions, dataSessionsNames} = DataRadialBarChartContainer(data),
              <RadialBarChartContainer
              data={dataSessions}
              dataNames={dataSessionsNames}
              />
            )}
          </div>
          <div id='dashboard__container__data__analytics__nutrition'>
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