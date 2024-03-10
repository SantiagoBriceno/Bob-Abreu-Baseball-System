import { useMemo, useState } from 'react'
import { getAllRegistrosEspeciales } from '../../service/registroEspecial'

export const useRegistroEspecial = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllRegistrosEspeciales()
      setData(response.data)
    }
    fetchData()
  }, [])
  return { data }
}
