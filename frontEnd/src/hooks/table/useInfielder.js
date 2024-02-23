import { useMemo, useState } from 'react'
import { getAllInfielders } from '../../service/infielders'

export const useInfielder = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllInfielders()
      console.log('response', response)
      setData(response)
    }
    fetchData()
  }, [])
  return { data }
}
