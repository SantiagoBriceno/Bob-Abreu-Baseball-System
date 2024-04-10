import { Heading, Stack } from '@chakra-ui/react'
import MyTable from '../../components/MyTable.jsx'
import FormModal from '../../components/modals/FormModal.jsx'
import MyForm from '../../components/MyForm'
import { runningValidation } from '../../constants/dataValidation.js'
import { validationInputRunning } from '../../constants/validationInputs.js'
import { useMyFormHook } from '../../hooks/form/useMyFormHook.js'
import { createRunning, updateRunning, deleteRunning } from '../../service/running.js'
import { running } from '../../../../global.constants.js'
import { useEffect, useState } from 'react'
import { runningFields, runningEditFields } from '../../constants/form/fields.js'
import { runningColumns as columns } from '../../constants/table/columns.js'
import { useRunning } from '../../hooks/table/useRunning.js'

const HittingView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [editOpenModal, setEditOpenModal] = useState(false)
  const [deleteData, setDeleteData] = useState()
  const [editData, setEditData] = useState()
  const { data } = useRunning(runningFields)
  const { formData, actions, errorState } = useMyFormHook(running, runningValidation, validationInputRunning, createRunning)
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
      deleteRunning(deleteData)
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
          ESTADÍSTICAS DE VELOCIDAD
        </Heading>
        <MyTable isDisabled={!(rol === 'gerente' || rol === 'deportivo')} setDeleteData={setDeleteData} datatype='Agregar nueva estadística de velocidad' columns={columns} data={data} openModal={openModal} idRow='id' setEditData={setEditData} isOpen={isOpen} setIsOpen={setEditOpenModal} title='Visualización de las estadísticas de velocidad' action={(rol === 'gerente' || rol === 'deportivo')} />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={runningFields} formData={formData} actions={actions} title='REGISTRO DE ESTADÍSITCAS DE RUNNING' errorMessage={errorState} />
      </FormModal>
      <FormModal w='60%' isOpen={editOpenModal} onClose={closeEditModal}>
        <EditForm data={editData} />
      </FormModal>
    </Stack>
  )
}

const EditForm = ({ data }) => {
  console.log('desde editForm', data)
  const { formData, actions, errorState } = useMyFormHook({}, runningValidation, validationInputRunning, updateRunning, false, data.id)
  return (
    <MyForm fields={runningEditFields(data)} formData={formData} actions={actions} title='EDICIÓN DE ESTADÍSTICAS DE BATEO' errorMessage={errorState} />
  )
}

export default HittingView
