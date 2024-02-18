import { useState } from 'react'
import { Stack, Heading } from '@chakra-ui/react'
import MyForm from '../../components/MyForm'
import { atleta } from '../../../../global.constants.js'
import FormModal from '../../components/modals/FormModal.jsx'
import { useMyFormHook } from '../../hooks/form/useMyFormHook.js'
import { atletaFields } from '../../constants/form/fields.js'
import { representanteValidation } from '../../constants/dataValidation.js'
import { validationInputAtleta } from '../../constants/validationInputs.js'
import MyTable from '../../components/MyTable.jsx'

const columns = [
  { key: 'nombre', name: 'Nombre' },
  { key: 'cedula', name: 'Cédula' },
  { key: 'telefono', name: 'Telefono' },
  { key: 'lugar_de_nacimiento', name: 'Lugar de nacimiento' },
  { key: 'fecha_de_nacimiento', name: 'Fecha de nacimiento' },
  { key: 'posicion', name: 'Posición' },
  { key: 'status', name: 'Status' }

]

const InfieldersView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { formData, actions, errorState } = useMyFormHook(atleta, representanteValidation, validationInputAtleta)

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
          INFIELDERS DE LA ACADEMIA
        </Heading>
        <MyTable columns={columns} title='Visualización de atletas' openModal={openModal} isOpen={isOpen} setIsOpen={setIsOpen} />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={atletaFields} formData={formData} actions={actions} title='INGRESO DE ATLETA' errorMessage={errorState} />
      </FormModal>
    </Stack>
  )
}

export default InfieldersView
