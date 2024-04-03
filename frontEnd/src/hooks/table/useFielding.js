import { useMemo, useState } from 'react'
import { getAllFielding } from '../../service/fielding'

export const useFielding = (fields) => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllFielding()
      console.log('response', response)
      setData(response.fieldingStats)
      fields[0].campos[0][0].opt = response.atletas.map((atleta) => {
        return { value: atleta.cedula, label: atleta.nombre }
      })
    }
    fetchData()
  }, [])
  console.log('data', data)
  return { data }
}
