import { useMemo, useState } from 'react'
import { getAllRegistrosEspeciales } from '../../service/registroEspecial'

export const useRegistroEspecial = (fields) => {
  const [data, setData] = useState([])
  const [atletas, setAtletas] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllRegistrosEspeciales()
      setData(response.data)
      setAtletas(response.atletas)
      fields[0].campos[0][0].opt = response.atletas.map((atleta) => {
        return { value: atleta.cedula, label: atleta.nombre }
      })
    }
    fetchData()
  }, [])
  return { data, atletas}
}
