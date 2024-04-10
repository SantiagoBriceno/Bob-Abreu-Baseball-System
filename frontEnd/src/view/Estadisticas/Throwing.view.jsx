import { Heading, Stack } from '@chakra-ui/react'
import MyTable from '../../components/MyTable.jsx'
import FormModal from '../../components/modals/FormModal.jsx'
import MyForm from '../../components/MyForm'
import { throwingValidation } from '../../constants/dataValidation.js'
import { validationInputThrowing } from '../../constants/validationInputs.js'
import { useMyFormHook } from '../../hooks/form/useMyFormHook.js'
import { createThrowing, updateThrowing, deleteThrowing } from '../../service/throwing.js'
import { throwing } from '../../../../global.constants.js'
import { useEffect, useState } from 'react'
import { throwingFields, throwingEditFields } from '../../constants/form/fields.js'
import { throwingColumns as columns } from '../../constants/table/columns.js'
import { useThrowing } from '../../hooks/table/useThrowing.js'

const HittingView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [editOpenModal, setEditOpenModal] = useState(false)
  const [deleteData, setDeleteData] = useState()
  const [editData, setEditData] = useState()
  const { data } = useThrowing(throwingFields)
  const { formData, actions, errorState } = useMyFormHook(throwing, throwingValidation, validationInputThrowing, createThrowing)
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
      deleteThrowing(deleteData)
    }
  }
  , [deleteData])
  const user = JSON.parse(window.localStorage.getItem('auth')).user

  const rol = user ? user.rol : ''
  // const viewLink = '/private/fichas/ficha/'
  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          ESTADÍSTICAS DE LANZAMIENTO
        </Heading>
        <MyTable isDisabled={!(rol === 'gerente' || rol === 'deportivo')} setDeleteData={setDeleteData} datatype='Agregar nueva estadística de lanzamiento' columns={columns} data={data} openModal={openModal} idRow='id' setEditData={setEditData} isOpen={isOpen} setIsOpen={setEditOpenModal} title='Visualización de las estadísticas de bateo' action={(rol === 'gerente' || rol === 'deportivo')} />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={throwingFields} formData={formData} actions={actions} title='REGISTRO DE ESTADÍSITCAS DE THROWING' errorMessage={errorState} />
      </FormModal>
      <FormModal w='60%' isOpen={editOpenModal} onClose={closeEditModal}>
        <EditForm data={editData} />
      </FormModal>
    </Stack>
  )
}

const EditForm = ({ data }) => {
  console.log('desde editForm', data)
  const { formData, actions, errorState } = useMyFormHook({}, throwingValidation, validationInputThrowing, updateThrowing, false, data.id)
  return (
    <MyForm fields={throwingEditFields(data)} formData={formData} actions={actions} title='EDICIÓN DE ESTADÍSTICAS DE BATEO' errorMessage={errorState} />
  )
}

export default HittingView
