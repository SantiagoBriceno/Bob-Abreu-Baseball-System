import { Heading, Stack } from '@chakra-ui/react'
import MyTable from '../../components/MyTable.jsx'
import FormModal from '../../components/modals/FormModal.jsx'
import MyForm from '../../components/MyForm'
import { fieldingValidation } from '../../constants/dataValidation.js'
import { validationInputFielding } from '../../constants/validationInputs.js'
import { useMyFormHook } from '../../hooks/form/useMyFormHook.js'
import { createFielding, updateFielding } from '../../service/fielding.js'
import { fielding } from '../../../../global.constants.js'
import { useState } from 'react'
import { fieldingFields, fieldingEditFields } from '../../constants/form/fields.js'
import { fieldingColumns as columns } from '../../constants/table/columns.js'
import { useFielding } from '../../hooks/table/useFielding.js'

const HittingView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [editOpenModal, setEditOpenModal] = useState(false)
  const [editData, setEditData] = useState()
  const { data } = useFielding()
  const { formData, actions, errorState } = useMyFormHook(fielding, fieldingValidation, validationInputFielding, createFielding)
  console.log('data', data)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const openEditModal = () => {
    console.log('editData', editData)
    setEditOpenModal(true)
  }

  const closeEditModal = () => {
    setEditOpenModal(false)
  }
  // const viewLink = '/private/fichas/ficha/'
  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          ESTADÍSTICAS DE FIELDING
        </Heading>
        <MyTable datatype='Agregar nueva estadística de fielding' columns={columns} data={data} openModal={openModal} idRow='id' setEditData={setEditData} isOpen={isOpen} setIsOpen={setEditOpenModal} title='Visualización de las estadísticas de fielding' action setVisualizable />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={fieldingFields} formData={formData} actions={actions} title='REGISTRO DE ESTADÍSITCAS DE BATEO' errorMessage={errorState} />
      </FormModal>
      <FormModal w='60%' isOpen={editOpenModal} onClose={closeEditModal}>
        <EditForm data={editData} />
      </FormModal>
    </Stack>
  )
}

const EditForm = ({ data }) => {
  console.log('desde editForm', data)
  const { formData, actions, errorState } = useMyFormHook({}, fieldingValidation, validationInputFielding, updateFielding, false, data.id)
  return (
    <MyForm fields={fieldingEditFields(data)} formData={formData} actions={actions} title='EDICIÓN DE ESTADÍSTICAS DE BATEO' errorMessage={errorState} />
  )
}

export default HittingView
