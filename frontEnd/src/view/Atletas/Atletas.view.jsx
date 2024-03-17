import { useEffect, useState } from 'react'
import { Stack, Heading } from '@chakra-ui/react'
import MyForm from '../../components/MyForm'
import { atleta } from '../../../../global.constants.js'
import FormModal from '../../components/modals/FormModal.jsx'
import { useMyFormHook } from '../../hooks/form/useMyFormHook.js'
import { atletaFields } from '../../constants/form/fields.js'
import { representanteValidation } from '../../constants/dataValidation.js'
import { validationInputAtleta } from '../../constants/validationInputs.js'
import MyTable from '../../components/MyTable.jsx'
import { atletaColumns as columns } from '../../constants/table/columns.js'
import { useAtleta } from '../../hooks/table/useAtleta.js'
import { createAtleta, updateAtleta, deleteAtleta } from '../../service/atletas.js'

const AtletasView = () => {
  const [registerOpenModal, setRegisterOpenModal] = useState(false)
  const [editOpenModal, setEditOpenModal] = useState(false)
  const [editData, setEditData] = useState()
  const [deleteData, setDeleteData] = useState()
  const [isEdit, setIsEdit] = useState(false)
  const { data } = useAtleta()
  const viewLink = '/private/atletas/atleta/'
  console.log('data', data)
  const { formData, actions, errorState, setFormData, formDataStructure } = useMyFormHook(atleta, representanteValidation, validationInputAtleta, createAtleta, true, isEdit, updateAtleta)

  const closeModal = () => {
    setRegisterOpenModal(false)
    setEditData({})
    setFormData(formDataStructure)
  }

  const openModal = () => {
    setRegisterOpenModal(true)
  }

  useEffect(() => {
    if (editData) {
      setIsEdit(true)
      setFormData(editData)
    }
  }, [editData])

  useEffect(() => {
    if (deleteData) {
      console.log('se hace el efecto')
      deleteAtleta(deleteData)
    }
  }, [deleteData])

  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          ATLETAS DE LA ACADEMIA
        </Heading>
        <MyTable setVisualizable datatype='Agregar atleta' setDeleteData={setDeleteData} setEditData={setEditData} data={data} idRow='cedula' columns={columns} title='Visualización de atletas' openModal={openModal} setIsOpen={setEditOpenModal} viewLink={viewLink} />
      </Stack>
      <FormModal w='60%' isOpen={registerOpenModal} onClose={closeModal}>
        <MyForm encType fields={atletaFields} formData={formData} actions={actions} errorMessage={errorState} />
      </FormModal>
    </Stack>
  )
}

export default AtletasView
