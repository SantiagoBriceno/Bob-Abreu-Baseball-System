import { Heading, Stack } from '@chakra-ui/react'
import MyTable from '../../components/MyTable.jsx'
import { useState } from 'react'
import { hittingColumns as columns } from '../../constants/table/columns.js'
import { useHitting } from '../../hooks/table/useHitting.js'

const HittingView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useHitting()
  console.log('data', data)
  // const viewLink = '/private/fichas/ficha/'
  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          ESTADÍSTICAS DE BATEO
        </Heading>
        <MyTable datatype='Agregar nueva estadística de bateo' columns={columns} data={data} idRow='id' isOpen={isOpen} setIsOpen={setIsOpen} title='visualización de las estadísticas de bateo' action setVisualizable />
      </Stack>
    </Stack>
  )
}

export default HittingView
