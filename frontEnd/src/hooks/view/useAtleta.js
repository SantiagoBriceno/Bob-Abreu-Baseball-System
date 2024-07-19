export const useAtleta = ({ data }) => {
  const { datosGeneral, antropometria, estadisticas } = data
  return { datosGeneral, antropometria, estadisticas }
}
