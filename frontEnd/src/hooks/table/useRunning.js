import { useMemo, useState } from 'react'
import { getAllRunning } from '../../service/running'

export const useRunning = (fields) => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllRunning()
      console.log('response', response)
      setData(response.runningStats)
      fields[0].campos[0][0].opt = response.atletas.map((atleta) => {
        return { value: atleta.cedula, label: atleta.nombre }
      })
    }
    fetchData()
  }, [])
  console.log('data', data)
  return { data }
}
