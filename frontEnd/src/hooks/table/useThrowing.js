import { useMemo, useState } from 'react'
import { getAllThrowing } from '../../service/throwing'

export const useThrowing = (fields) => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllThrowing()
      console.log('response', response)
      setData(response.throwingStats)
      fields[0].campos[0][0].opt = response.atletas.map((atleta) => {
        return { value: atleta.cedula, label: atleta.nombre }
      })
    }
    fetchData()
  }, [])
  console.log('data', data)
  return { data }
}
