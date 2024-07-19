import { useMemo, useState } from 'react'
import { getAllOutfielders } from '../../service/outfielders'

export const useOutfielder = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllOutfielders()
      console.log('response', response)
      setData(response)
    }
    fetchData()
  }, [])
  return { data }
}
