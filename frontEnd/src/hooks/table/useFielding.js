import { useMemo, useState } from 'react'
import { getAllFielding } from '../../service/fielding'

export const useFielding = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllFielding()
      console.log('response', response)
      setData(response)
    }
    fetchData()
  }, [])
  console.log('data', data)
  return { data }
}
