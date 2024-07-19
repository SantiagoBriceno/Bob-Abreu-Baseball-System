import { useMemo, useState } from 'react'
import { getAllAtletas } from '../../service/atletas'

export const useAtleta = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllAtletas()
      console.log('response', response)
      setData(response)
    }
    fetchData()
  }, [])
  return { data }
}
