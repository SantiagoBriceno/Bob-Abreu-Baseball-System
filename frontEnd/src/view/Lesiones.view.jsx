import { Heading, Stack } from '@chakra-ui/react'
import MyForm from '../components/MyForm'
import { lesiones } from '../../../global.constants.js'
import { lesionValidation } from '../constants/dataValidation.js'
import { validationInputLesion } from '../constants/validationInputs.js'
import { useMyFormHook } from '../hooks/form/useMyFormHook.js'
import { lesionesFields } from '../constants/form/fields.js'
import { createLesion } from '../service/lesiones.js'
import MyTable from '../components/MyTable.jsx'
import { useState } from 'react'
import FormModal from '../components/modals/FormModal.jsx'
import { lesionesColumns as columns } from '../constants/table/columns.js'
import { useLesiones } from '../hooks/table/useLesiones.js'

const LesionesView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useLesiones(lesionesFields)
  const { formData, actions, errorState } = useMyFormHook(lesiones, lesionValidation, validationInputLesion, createLesion)
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
          LESIONES
        </Heading>
        <MyTable datatype='Agregar lesión' columns={columns} data={data} idRow='cedula' openModal={openModal} isOpen={isOpen} setIsOpen={setIsOpen} title='Visualización de representantes' />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={lesionesFields} formData={formData} actions={actions} title='REGISTRO DE LESIONES' errorMessage={errorState} />
      </FormModal>
    </Stack>
  )
}

export default LesionesView
