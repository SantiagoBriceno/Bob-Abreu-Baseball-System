import { useState, useMemo } from 'react'
import { getFichaData } from '../../service/ficha'
export const useFicha = () => {
  const [data, setData] = useState([])

  useMemo(() => {
    const fetchData = async () => {
      const result = await getFichaData()
      result.data.map((row) => {
        row.fecha = new Date(row.fecha).toLocaleDateString().split('T')[0]
        return null
      })
      setData(result.data)
    }
    fetchData()
  }, [])

  return {
    data
  }
}
