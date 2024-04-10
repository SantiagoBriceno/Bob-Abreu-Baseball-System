import { Heading, Stack } from '@chakra-ui/react'
import MyForm from '../components/MyForm'
import { registroEspecial } from '../../../global.constants.js'
import { registrosEspecialesValidation } from '../constants/dataValidation.js'
import { validationInputRegistroEspecial } from '../constants/validationInputs.js'
import { useMyFormHook } from '../hooks/form/useMyFormHook.js'
import { registroEspecialEditFields, registroEspecialFields } from '../constants/form/fields.js'
import { createRegistroEspecial, updateRegistroEspecial, deleteRegistroEspecial } from '../service/registroEspecial.js'
import MyTable from '../components/MyTable.jsx'
import { useEffect, useState } from 'react'
import FormModal from '../components/modals/FormModal.jsx'
import { registroEspecialColumns as columns } from '../constants/table/columns.js'
import { useRegistroEspecial } from '../hooks/table/useRegistroEspecial.js'

const RegistrosEspecialesView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [editOpenModal, setEditOpenModal] = useState(false)
  const [deleteData, setDeleteData] = useState()
  const [editData, setEditData] = useState()
  const { data, atletas } = useRegistroEspecial(registroEspecialFields)
  const { formData, actions, errorState } = useMyFormHook(registroEspecial, registrosEspecialesValidation, validationInputRegistroEspecial, createRegistroEspecial)

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
      deleteRegistroEspecial(deleteData)
    }
  }
  , [deleteData])

  const user = JSON.parse(window.localStorage.getItem('auth')).user

  const rol = user ? user.rol : ''

  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          REGISTROS ESPECIALES
        </Heading>
        <MyTable isDisabled={!(rol === 'administrativo' || rol === 'gerente')} action={(rol === 'administrativo' || rol === 'gerente')} setDeleteData={setDeleteData} datatype='Agregar registro especial' columns={columns} data={data} idRow='id' setEditData={setEditData} openModal={openModal} isOpen={isOpen} setIsOpen={setEditOpenModal} title='Visualización de registros especiales' />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={registroEspecialFields} formData={formData} actions={actions} title='REGISTROS ESPECIALES' errorMessage={errorState} />
      </FormModal>
      <FormModal w='60%' isOpen={editOpenModal} onClose={closeEditModal}>
        <EditForm data={editData} atletas={atletas} />
      </FormModal>
    </Stack>
  )
}

const EditForm = ({ data, atletas }) => {
  const { actions, errorState, formData } = useMyFormHook({}, registrosEspecialesValidation, validationInputRegistroEspecial, updateRegistroEspecial, false, data.id)
  return (
    <MyForm title='EDICIÓN DE REGISTROS ESPECIALES' fields={registroEspecialEditFields(data, atletas)} formData={formData} actions={actions} errorMessage={errorState} />
  )
}

export default RegistrosEspecialesView
