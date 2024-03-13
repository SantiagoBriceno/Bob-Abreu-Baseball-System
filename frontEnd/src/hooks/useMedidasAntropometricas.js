import { useEffect, useMemo, useState } from 'react'

export const useAntropometria = ({ data }) => {
  const [ficha, setFicha] = useState()
  const [datosGenerales, setDatosGenerales] = useState()
  const [perimetros, setPerimetros] = useState()
  const [icc, setIcc] = useState()
  const [imc, setImc] = useState()

  useEffect(() => {
    if (data) {
      const { fichas, datos_generales, perimetros_corporales, indice_cintura_cadera, indice_masa_corporal } = data
      const ultimaFicha = data.fichas[data.fichas.length - 1]
      const idFicha = ultimaFicha.id_ficha
      setFicha(ultimaFicha)

      const uDatosGenerales = datos_generales.find(d => d.id_ficha === idFicha)
      setDatosGenerales(uDatosGenerales)

      const uPerimetros = perimetros_corporales.find(p => p.id_ficha === idFicha)
      setPerimetros(uPerimetros)

      const uIcc = indice_cintura_cadera.find(i => i.id_ficha === idFicha)
      setIcc(uIcc)

      const uImc = indice_masa_corporal.find(i => i.id_ficha === idFicha)
      setImc(uImc)
    }
  }, [data])
  return { ficha, datosGenerales, perimetros, icc, imc }
}
