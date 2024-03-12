import { useMemo, useState } from 'react'
import { getAllLesiones } from '../../service/lesiones.js'

export const useLesiones = (fields) => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllLesiones()
      setData(response.data)
      console.log('response', response)
      fields[0].campos[0][0].opt = response.atletas.map((atleta) => {
        return { value: atleta.cedula, label: atleta.nombre }
      })
    }
    fetchData()
  }, [])
  return { data }
}
