import { useMemo, useState } from 'react'
import { getAllRepresentantes } from '../../service/representante'

export const useRepresentante = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllRepresentantes()
      setData(response.data)
    }
    fetchData()
  }, [])
  return { data }
}
