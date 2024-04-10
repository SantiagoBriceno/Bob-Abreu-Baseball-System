import { Heading, Stack } from '@chakra-ui/react'
import MyForm from '../components/MyForm'
import { lesiones } from '../../../global.constants.js'
import { lesionValidation } from '../constants/dataValidation.js'
import { validationInputLesion } from '../constants/validationInputs.js'
import { useMyFormHook } from '../hooks/form/useMyFormHook.js'
import { lesionesFields, lesionesEditFields } from '../constants/form/fields.js'
import { createLesion, updateLesion, deleteLesion } from '../service/lesiones.js'
import MyTable from '../components/MyTable.jsx'
import { useEffect, useState } from 'react'
import FormModal from '../components/modals/FormModal.jsx'
import { lesionesColumns as columns } from '../constants/table/columns.js'
import { useLesiones } from '../hooks/table/useLesiones.js'

const LesionesView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [editOpenModal, setEditOpenModal] = useState(false)
  const [editData, setEditData] = useState()
  const [deleteData, setDeleteData] = useState()
  const { data, atletas } = useLesiones(lesionesFields)
  const { formData, actions, errorState } = useMyFormHook(lesiones, lesionValidation, validationInputLesion, createLesion)
  console.log('data', data)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeEditModal = () => {
    setEditOpenModal(false)
  }

  useEffect(() => {
    if (deleteData) {
      console.log('se hace el efecto')
      deleteLesion(deleteData)
    }
  }
  , [deleteData])

  const user = JSON.parse(window.localStorage.getItem('auth')).user

  const rol = user ? user.rol : ''

  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          LESIONES
        </Heading>
        <MyTable isDisabled={!(rol === 'fisioterapeuta' || rol === 'gerente')} setDeleteData={setDeleteData} datatype='Agregar lesión' columns={columns} data={data} idRow='cedula' openModal={openModal} setEditData={setEditData} isOpen={isOpen} action={(rol === 'fisioterapeuta' || rol === 'gerente')} setIsOpen={setEditOpenModal} title='Visualización de lesiones' />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={lesionesFields} formData={formData} actions={actions} title='REGISTRO DE LESIONES' errorMessage={errorState} />
      </FormModal>
      <FormModal w='60%' isOpen={editOpenModal} onClose={closeEditModal}>
        <EditForm data={editData} atletas={atletas} />
      </FormModal>
    </Stack>
  )
}

const EditForm = ({ data, atletas }) => {
  console.log('desde editForm', data)
  const { formData, actions, errorState } = useMyFormHook({}, lesionValidation, validationInputLesion, updateLesion, false, data.id)
  return (
    <MyForm fields={lesionesEditFields(data, atletas)} formData={formData} actions={actions} title='EDICIÓN DE LESIONES' errorMessage={errorState} />
  )
}

export default LesionesView
