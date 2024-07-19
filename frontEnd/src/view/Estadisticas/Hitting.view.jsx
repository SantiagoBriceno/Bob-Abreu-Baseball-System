import { Heading, Stack } from '@chakra-ui/react'
import MyTable from '../../components/MyTable.jsx'
import FormModal from '../../components/modals/FormModal.jsx'
import MyForm from '../../components/MyForm'
import { hittingValidation } from '../../constants/dataValidation.js'
import { validationInputHitting } from '../../constants/validationInputs.js'
import { useMyFormHook } from '../../hooks/form/useMyFormHook.js'
import { createHitting, updateHitting, deleteHitting } from '../../service/hitting.js'
import { hitting } from '../../../../global.constants.js'
import { useState, useEffect } from 'react'
import { hittingFields, hittingEditFields } from '../../constants/form/fields.js'
import { hittingColumns as columns } from '../../constants/table/columns.js'
import { useHitting } from '../../hooks/table/useHitting.js'

const HittingView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [editOpenModal, setEditOpenModal] = useState(false)
  const [deleteData, setDeleteData] = useState()
  const [editData, setEditData] = useState()
  const { data } = useHitting(hittingFields)
  const { formData, actions, errorState } = useMyFormHook(hitting, hittingValidation, validationInputHitting, createHitting)
  console.log('data', data)
  const user = JSON.parse(window.localStorage.getItem('auth')).user

  const rol = user ? user.rol : ''

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
      console.log('deleteData', deleteData)
      deleteHitting(deleteData)
    }
  }
  , [deleteData])

  // const viewLink = '/private/fichas/ficha/'
  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          ESTADÍSTICAS DE BATEO
        </Heading>
        <MyTable isDisabled={!(rol === 'gerente' || rol === 'deportivo')} setDeleteData={setDeleteData} datatype='Agregar nueva estadística de bateo' columns={columns} data={data} openModal={openModal} idRow='id' setEditData={setEditData} isOpen={isOpen} setIsOpen={setEditOpenModal} title='Visualización de las estadísticas de bateo' action={(rol === 'gerente' || rol === 'deportivo')} />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={hittingFields} formData={formData} actions={actions} title='REGISTRO DE ESTADÍSITCAS DE BATEO' errorMessage={errorState} />
      </FormModal>
      <FormModal w='60%' isOpen={editOpenModal} onClose={closeEditModal}>
        <EditForm data={editData} />
      </FormModal>
    </Stack>
  )
}

const EditForm = ({ data }) => {
  console.log('desde editForm', data)
  const { formData, actions, errorState } = useMyFormHook({}, hittingValidation, validationInputHitting, updateHitting, false, data.id)
  return (
    <MyForm fields={hittingEditFields(data)} formData={formData} actions={actions} title='EDICIÓN DE ESTADÍSTICAS DE BATEO' errorMessage={errorState} />
  )
}

export default HittingView
