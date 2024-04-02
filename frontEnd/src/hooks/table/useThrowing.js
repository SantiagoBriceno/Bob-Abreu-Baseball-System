import { useMemo, useState } from 'react'
import { getAllThrowing } from '../../service/throwing'

export const useThrowing = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllThrowing()
      console.log('response', response)
      setData(response)
    }
    fetchData()
  }, [])
  console.log('data', data)
  return { data }
}
