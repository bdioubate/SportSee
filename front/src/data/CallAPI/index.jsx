import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function CallAPI(id) {
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
    {data, dataPerformance, dataActivity, dataAverage}
  )
}

export default CallAPI
