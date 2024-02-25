// Recuperar el query param id y mostrar los datos del atleta\
import { useParams } from 'react-router-dom'
import { useAtletaData } from '../../hooks/view/useAtletaData'
import { HStack, Stack, VStack } from '@chakra-ui/react'
const AtletaView = () => {
  const { id } = useParams()
  const { atleta } = useAtletaData({ id })
  console.log(atleta)
  return (
    <>
      <Stack direction='row-reverse' w='100%' h='100%' bg='black'>
        Hola mundo
        <VStack bg='green' w='50%' h='100%'>
          <Stack bg='red' w='100%' h='100%'>
            Aqui van las vainas de estadisticas
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
