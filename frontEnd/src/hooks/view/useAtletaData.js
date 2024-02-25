import { useState, useEffect } from 'react'
import { getAtleta } from '../../service/atletas.js'
export const useAtletaData = ({ id }) => {
  const [atleta, setAtleta] = useState({})

  useEffect(() => {
    const fetchAtleta = async () => {
      try {
        const response = await getAtleta(id)
        setAtleta(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchAtleta()
  }, [id])

  return { atleta }
}
