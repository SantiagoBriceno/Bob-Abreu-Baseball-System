import { useMemo, useState } from 'react'
import { useSesionContext } from '../../context/SesionContext'
import { getAllRepresentantes } from '../../service/representante'

export const useRepresentante = () => {
  const [data, setData] = useState([])
  const { isAuthenticated } = useSesionContext()
  console.log('isAuthenticated', isAuthenticated)
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllRepresentantes()
      setData(response.data)
    }
    fetchData()
  }, [])
  return { data }
}
