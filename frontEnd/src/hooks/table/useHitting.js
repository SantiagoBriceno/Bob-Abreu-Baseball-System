import { useMemo, useState } from 'react'
import { getAllHitting } from '../../service/hitting'

export const useHitting = (fields) => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllHitting()
      console.log('response', response)
      setData(response.hittingStats)
      fields[0].campos[0][0].opt = response.atletas.map((atleta) => {
        return { value: atleta.cedula, label: atleta.nombre }
      })
    }
    fetchData()
  }, [])
  console.log('data', data)
  return { data }
}
