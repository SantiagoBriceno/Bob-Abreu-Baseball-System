import { Heading, Stack } from '@chakra-ui/react'
import MyForm from '../components/MyForm'
import { registroEspecial } from '../../../global.constants.js'
import { registrosEspecialesValidation } from '../constants/dataValidation.js'
import { validationInputRegistroEspecial } from '../constants/validationInputs.js'
import { useMyFormHook } from '../hooks/form/useMyFormHook.js'
import { registroEspecialFields } from '../constants/form/fields.js'
import { createRegistroEspecial } from '../service/registroEspecial.js'
import MyTable from '../components/MyTable.jsx'
import { useState } from 'react'
import FormModal from '../components/modals/FormModal.jsx'
import { registroEspecialColumns as columns } from '../constants/table/columns.js'
import { useRegistroEspecial } from '../hooks/table/useRegistroEspecial.js'

const RegistrosEspecialesView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useRegistroEspecial(registroEspecialFields)
  const { formData, actions, errorState } = useMyFormHook(registroEspecial, registrosEspecialesValidation, validationInputRegistroEspecial, createRegistroEspecial)

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
          REGISTROS ESPECIALES
        </Heading>
        <MyTable datatype='Agregar registro especial' columns={columns} data={data} idRow='cedula' openModal={openModal} isOpen={isOpen} setIsOpen={setIsOpen} title='Visualización de registros especiales' />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={registroEspecialFields} formData={formData} actions={actions} title='REGISTROS ESPECIALES' errorMessage={errorState} />
      </FormModal>
    </Stack>
  )
}

export default RegistrosEspecialesView
