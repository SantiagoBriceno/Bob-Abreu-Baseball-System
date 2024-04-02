import { useMemo, useState } from 'react'
import { getAllMakeup } from '../../service/makeup'

export const useMakeup = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllMakeup()
      console.log('response', response)
      setData(response)
    }
    fetchData()
  }, [])
  console.log('data', data)
  return { data }
}
