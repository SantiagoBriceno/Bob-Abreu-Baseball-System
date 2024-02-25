// Recuperar el query param id y mostrar los datos del atleta\
import { useParams } from 'react-router-dom'
import { useAtletaData } from '../../hooks/view/useAtletaData'
import { Stack, VStack } from '@chakra-ui/react'
import { MyAtletaDatos, MyAtletaEstadisticas } from '../../components/MyAtleta'
const AtletaView = () => {
  const { id } = useParams()
  const { atleta } = useAtletaData({ id })
  console.log(atleta)
  return (
    <>
      <Stack direction='row' w='100%' h='100%' bg='black'>
        <Stack bg='yellow' p={10} align='center' w='50%' h='100%'>
          <MyAtletaDatos data={atleta.datosGeneral} />
        </Stack>
        <VStack bg='green' w='50%' h='100%'>
          <Stack bg='red' w='100%' h='100%'>
            <MyAtletaEstadisticas data={atleta.estadisticas} />
          </Stack>
          <Stack bg='blue' w='100%' h='100%'>
            Algunas medidas antropometricas
          </Stack>
        </VStack>
      </Stack>
    </>
  )
}

export default AtletaView
