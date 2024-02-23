import { useMemo, useState } from 'react'
import { getAllPitchers } from '../../service/pitchers'

export const usePitcher = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllPitchers()
      console.log('response', response)
      setData(response)
    }
    fetchData()
  }, [])
  return { data }
}
