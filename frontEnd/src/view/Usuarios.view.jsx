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
import { representanteColumns as columns } from '../constants/table/columns.js'
import { useRepresentante } from '../hooks/table/useRepresentante.js'

const UsuariosView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { formData, actions, errorState } = useMyFormHook(representante, representanteValidation, validationInputRepresentante, createRepresentante)
  const { data } = useRepresentante()
  console.log('data', data)

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
          USUARIOS
        </Heading>
        <MyTable datatype='Agregar representante' columns={columns} data={data} idRow='cedula' openModal={openModal} isOpen={isOpen} setIsOpen={setIsOpen} title='Visualización de representantes' />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={representanteFields} formData={formData} actions={actions} title='Registrar representante' errorMessage={errorState} />
      </FormModal>
    </Stack>
  )
}

export default UsuariosView
