import { useState, useMemo } from 'react'
import { getDashboard } from '../service/dashboard'

export const useDashboard = () => {
  const [data, setData] = useState([])
  const [percents, setPercents] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getDashboard()
      const array = Object.entries(response.data).map(([key, value]) => ({ [key]: value }))
      setData(array)
      setPercents(response.data)
      console.log('data dashboard', data)
    }
    fetchData()
  }, [])
  return { data, percents }
}
