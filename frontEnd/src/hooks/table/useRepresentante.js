import { useMemo, useState } from 'react'
import { getAllRepresentantes } from '../../service/representante'

export const useRepresentante = ({ representantesFields }) => {
  const [data, setData] = useState([])
  const [atletas, setAtletas] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllRepresentantes()
      setData(response.data.data)
      console.log('response', response)
      setAtletas(response.data.atletas)
      console.log('atletas', response.data.atletas)
      representantesFields[0].campos[0][2].opt = response.data.atletas.map((atleta) => {
        return { value: atleta.cedula, label: atleta.nombre }
      })
    }
    fetchData()
  }, [])
  return { data, atletas }
}
