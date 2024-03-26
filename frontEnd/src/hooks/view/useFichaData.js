import { useState, useEffect } from 'react'
import { getFichaDataById } from '../../service/ficha'


export const useFichaData = ({ id }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFichaDataById(id)
      console.log('response', response)
      setData(response)
    }
    fetchData()
  }, [id])

  return { data }
}
