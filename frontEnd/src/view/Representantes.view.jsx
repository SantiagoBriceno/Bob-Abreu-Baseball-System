import { Heading, Stack } from '@chakra-ui/react'
import MyForm from '../components/MyForm'
import { representante } from '../../../global.constants.js'
import { representanteValidation } from '../constants/dataValidation.js'
import { validationInputRepresentante } from '../constants/validationInputs.js'
import { useMyFormHook } from '../hooks/form/useMyFormHook.js'
import { representanteFields, representanteEditFields } from '../constants/form/fields.js'
import { createRepresentante, updateRepresentante, deleteRepresentante } from '../service/representante.js'
import MyTable from '../components/MyTable.jsx'
import { useEffect, useState } from 'react'
import FormModal from '../components/modals/FormModal.jsx'
import { representanteColumns as columns } from '../constants/table/columns.js'
import { useRepresentante } from '../hooks/table/useRepresentante.js'

const RepresentanteView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { formData, actions, errorState } = useMyFormHook(representante, representanteValidation, validationInputRepresentante, createRepresentante)
  const [editOpenModal, setEditOpenModal] = useState(false)
  const [deleteData, setDeleteData] = useState()
  const [editData, setEditData] = useState()
  const { data } = useRepresentante({ representantesFields: representanteFields })
  console.log('data', data)

  const closeModal = () => {
    setIsOpen(false)
  }

  const closeEditModal = () => {
    setEditOpenModal(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const user = JSON.parse(window.localStorage.getItem('auth')).user

  const rol = user ? user.rol : ''

  useEffect(() => {
    if (deleteData) {
      console.log('se hace el efecto')
      deleteRepresentante(deleteData)
    }
  }, [deleteData])

  console.log((rol === 'administrativo' || rol === 'gerente'))

  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          REPRESENTANTES
        </Heading>
        <MyTable isDisabled={!(rol === 'administrativo' || rol === 'gerente')} action={(rol === 'administrativo' || rol === 'gerente')} setDeleteData={setDeleteData} setEditData={setEditData} datatype='Agregar representante' columns={columns} data={data} idRow='cedula' openModal={openModal} isOpen={isOpen} setIsOpen={setEditOpenModal} title='Visualización de representantes' />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={representanteFields} formData={formData} actions={actions} title='REGISTRO DE REPRESENTANTE' errorMessage={errorState} />
      </FormModal>
      <FormModal w='60%' isOpen={editOpenModal} onClose={closeEditModal}>
        <EditForm data={editData} />
      </FormModal>
    </Stack>
  )
}

const EditForm = ({ data }) => {
  const { actions, errorState, formData } = useMyFormHook({}, representanteValidation, validationInputRepresentante, updateRepresentante, false, data.cedula)
  return (
    <MyForm fields={representanteEditFields(data)} formData={formData} actions={actions} title='EDICIÓN DE REPRESENTANTES' errorMessage={errorState} />
  )
}
export default RepresentanteView
