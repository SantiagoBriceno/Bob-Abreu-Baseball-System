import { useState, useMemo } from 'react'
import { getDashboard } from '../service/dashboard'

export const useDashboard = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getDashboard()
      const array = Object.entries(response).map(([key, value]) => ({ [key]: value }))
      setData(array)
      console.log('data dashboard', data)
    }
    fetchData()
  }, [])
  return { data }
}
