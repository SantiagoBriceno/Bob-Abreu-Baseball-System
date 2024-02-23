import { useMemo, useState } from 'react'
import { getAllCatchers } from '../../service/catchers'

export const useCatcher = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllCatchers()
      console.log('response', response)
      setData(response)
    }
    fetchData()
  }, [])
  return { data }
}
