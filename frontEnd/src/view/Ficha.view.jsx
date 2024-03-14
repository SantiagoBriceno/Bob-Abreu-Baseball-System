import { Heading, Stack } from '@chakra-ui/react'
import MyForm from '../components/MyForm'
import { lesiones } from '../../../global.constants.js'
import { lesionValidation } from '../constants/dataValidation.js'
import { validationInputLesion } from '../constants/validationInputs.js'
import { useMyFormHook } from '../hooks/form/useMyFormHook.js'
import { createLesion } from '../service/lesiones.js'
import MyTable from '../components/MyTable.jsx'
import { useState } from 'react'
import FormModal from '../components/modals/FormModal.jsx'
import { fichaColumns as columns } from '../constants/table/columns.js'
import { useFicha } from '../hooks/table/useFicha.js'

const FichaView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useFicha()
  console.log('asdkljaklsjdklasjd', data)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          LESIONES
        </Heading>
        <MyTable datatype='Agregar nueva ficha antropométrica' columns={columns} data={data} idRow='id_ficha' openModal={openModal} isOpen={isOpen} setIsOpen={setIsOpen} title='visualización de las fichas antropometricas' action setVisualizable />
      </Stack>
    </Stack>
  )
}

export default FichaView
