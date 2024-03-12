import { useMemo, useState } from 'react'
import { getAllRegistrosEspeciales } from '../../service/registroEspecial'

export const useRegistroEspecial = (fields) => {
  console.log('fields', fields[0].campos[0][0].opt)
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllRegistrosEspeciales()
      setData(response.data)
      fields[0].campos[0][0].opt = response.atletas.map((atleta) => {
        return { value: atleta.cedula, label: atleta.nombre }
      })
    }
    fetchData()
  }, [])
  return { data }
}
