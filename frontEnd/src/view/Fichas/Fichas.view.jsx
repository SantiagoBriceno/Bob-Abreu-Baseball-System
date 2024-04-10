import { Heading, Stack } from '@chakra-ui/react'
import MyTable from '../../components/MyTable.jsx'
import { fichaColumns as columns } from '../../constants/table/columns.js'
import { useFicha } from '../../hooks/table/useFicha.js'

const FichasView = () => {
  const { data } = useFicha()
  const openNewView = () => {
    window.location.href = '/private/fichas/add'
  }

  console.log('asdkljaklsjdklasjd', data)
  const user = JSON.parse(window.localStorage.getItem('auth')).user

  const rol = user ? user.rol : ''
  const viewLink = '/private/fichas/ficha/'
  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          FICHAS ANTROPOMÉTRICAS
        </Heading>
        <MyTable openModal={openNewView} datatype='Agregar nueva ficha antropométrica' columns={columns} data={data} idRow='id_ficha' title='visualización de las fichas antropometricas' setVisualizable viewLink={viewLink} />
      </Stack>
    </Stack>
  )
}

export default FichasView
