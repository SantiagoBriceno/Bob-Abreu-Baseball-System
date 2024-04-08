import { useState, useEffect } from 'react'
import { getFichaDataById, getFichaImg } from '../../service/ficha'

export const useFichaData = ({ id }) => {
  const [data, setData] = useState({})
  const [frontal, setFrontal] = useState()
  const [perfil, setPerfil] = useState()
  const [espalda, setEspalda] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFichaDataById(id)
        console.log('response', response)
        setData(response)
        const { perfiles } = response
        const { frente, perfil, espalda } = perfiles
        const imgFrontal = await getFichaImg(frente)
        const imgLateral = await getFichaImg(perfil)
        const imgPosterior = await getFichaImg(espalda)
        setFrontal(imgFrontal.url)
        setPerfil(imgLateral.url)
        setEspalda(imgPosterior.url)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  return { data, frontal, perfil, espalda }
}
