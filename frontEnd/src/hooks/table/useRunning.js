import { useMemo, useState } from 'react'
import { getAllRunning } from '../../service/running'

export const useRunning = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllRunning()
      console.log('response', response)
      setData(response.runningStats)
    }
    fetchData()
  }, [])
  console.log('data', data)
  return { data }
}
