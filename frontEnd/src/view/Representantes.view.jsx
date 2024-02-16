import { Heading, Stack } from '@chakra-ui/react'
import MyForm from '../components/MyForm'
import { representante } from '../../../global.constants.js'
import { representanteValidation } from '../constants/dataValidation.js'
import { validationInputRepresentante } from '../constants/validationInputs.js'
import { useMyFormHook } from '../hooks/form/useMyFormHook.js'
import { representanteFields } from '../constants/form/fields.js'
import { createRepresentante } from '../service/representante.js'
import MyTable from '../components/MyTable.jsx'
import { useState } from 'react'
import FormModal from '../components/modals/FormModal.jsx'

const columns = [
  { key: 'nombre', name: 'Nombre' },
  { key: 'cedula', name: 'Cédula' },
  { key: 'telefono', name: 'Telefono' },
  { key: 'correo', name: 'Correo' }

]

const RepresentanteView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { formData, actions, errorState } = useMyFormHook(representante, representanteValidation, validationInputRepresentante, createRepresentante)

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
          REPRESENTANTES
        </Heading>
        <MyTable columns={columns} title='Visualización de representantes' openModal={openModal} isOpen={isOpen} setIsOpen={setIsOpen} />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={representanteFields} formData={formData} actions={actions} title='REPRESENTANTE' errorMessage={errorState} />
      </FormModal>
    </Stack>
  )
}

export default RepresentanteView
