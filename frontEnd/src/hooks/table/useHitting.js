import { useMemo, useState } from 'react'
import { getAllHitting } from '../../service/hitting'

export const useHitting = (fields) => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllHitting()
      console.log('response', response)
      setData(response.hittingStats)
    }
    fetchData()
  }, [])
  console.log('data', data)
  return { data }
}
