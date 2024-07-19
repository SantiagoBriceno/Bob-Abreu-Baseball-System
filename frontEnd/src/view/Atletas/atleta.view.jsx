// Recuperar el query param id y mostrar los datos del atleta\
import { useParams } from 'react-router-dom'
import { useAtletaData } from '../../hooks/view/useAtletaData'
import { Stack, VStack, Text } from '@chakra-ui/react'
import { MyAtletaDatos, MyAtletaEstadisticas, MyAtletaMedidasAntropometricas } from '../../components/MyAtleta'
const AtletaView = () => {
  const { cedula } = useParams()
  const { atleta, img } = useAtletaData({ id: cedula })
  console.log(atleta)
  return (
    <>
      <Stack direction='row' w='100%' h='100%' gap='1%'>
        <Stack boxShadow='xl' bg='white' rounded='15px' p={10} align='center' w='35%' h='100%'>
          <MyAtletaDatos data={atleta.datosGeneral} img={img} registrosEspeciales={atleta.registros_especiales} />
        </Stack>
        <VStack rounded='10px' w='100%' h='100%' gap={4}>
          <Stack boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px'>
            {atleta.estadisticas ? <MyAtletaEstadisticas nombre={{ nombre: atleta.datosGeneral[0].nombre, cedula }} data={atleta.estadisticas} /> : <Text>No hay estadisticas</Text>}
          </Stack>
          <Stack boxShadow='xl' bg='white' w='100%' h='40%' rounded='10px'>
            {atleta.antropometria ? <MyAtletaMedidasAntropometricas data={atleta.antropometria} /> : <Text>No hay medidas antropometricas</Text>}
          </Stack>
        </VStack>
      </Stack>
    </>
  )
}

export default AtletaView
