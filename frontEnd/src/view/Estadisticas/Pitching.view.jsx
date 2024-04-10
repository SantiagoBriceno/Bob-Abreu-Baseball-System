import { Heading, Stack } from '@chakra-ui/react'
import MyTable from '../../components/MyTable.jsx'
import { useState } from 'react'
import { fichaColumns as columns } from '../../constants/table/columns.js'
import { useFicha } from '../../hooks/table/useFicha.js'

const PitchingView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const user = JSON.parse(window.localStorage.getItem('auth')).user

  const rol = user ? user.rol : ''
  const { data } = useFicha()
  console.log('asdkljaklsjdklasjd', data)
  const viewLink = '/private/fichas/ficha/'
  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          FICHAS ANTROPOMÉTRICAS
        </Heading>
        <MyTable isDisabled={!(rol === 'gerente' || rol === 'deportivo')} ac datatype='Agregar nueva ficha antropométrica' columns={columns} data={data} idRow='id_ficha' isOpen={isOpen} setIsOpen={setIsOpen} title='visualización de las fichas antropometricas' action={(rol === 'gerente' || rol === 'deportivo')} viewLink={viewLink} />
      </Stack>
    </Stack>
  )
}

export default PitchingView
