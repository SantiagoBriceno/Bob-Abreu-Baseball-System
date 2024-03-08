// Recuperar el query param id y mostrar los datos del atleta\
import { useParams } from 'react-router-dom'
import { useAtletaData } from '../../hooks/view/useAtletaData'
import { Stack, VStack } from '@chakra-ui/react'
import { MyAtletaDatos, MyAtletaEstadisticas } from '../../components/MyAtleta'
const AtletaView = () => {
  const { cedula } = useParams()
  const { atleta } = useAtletaData({ id: cedula })
  console.log(atleta)
  return (
    <>
      <Stack direction='row' w='100%' h='100%' gap='1%'>
        <Stack bg='white' rounded='15px' p={10} align='center' w='45%' h='100%'>
          <MyAtletaDatos data={atleta.datosGeneral} />
        </Stack>
        <VStack rounded='10px' w='55%' h='100%' gap={4}>
          <Stack bg='white' w='100%' h='100%' rounded='10px'>
            <MyAtletaEstadisticas data={atleta.estadisticas} />
          </Stack>
          <Stack bg='white' w='100%' h='100%' rounded='10px'>
            Algunas medidas antropometricas
          </Stack>
        </VStack>
      </Stack>
    </>
  )
}

export default AtletaView
