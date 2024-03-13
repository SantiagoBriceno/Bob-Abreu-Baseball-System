import { useState, useEffect } from 'react'
import { getAtleta, getAtletaImg } from '../../service/atletas.js'
export const useAtletaData = ({ id }) => {
  const [atleta, setAtleta] = useState({})
  const [img, setImg] = useState()

  useEffect(() => {
    const fetchAtleta = async () => {
      try {
        const response = await getAtleta(id)
        setAtleta(response)
        const { datosGeneral } = response
        const { foto } = datosGeneral[0]
        const img = await getAtletaImg(foto)
        setImg(img.url)
      } catch (error) {
        console.error(error)
      }
    }

    fetchAtleta()
  }, [id])

  return { atleta, img }
}
