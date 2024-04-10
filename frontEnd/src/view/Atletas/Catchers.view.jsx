import { useState } from 'react'
import { Stack, Heading } from '@chakra-ui/react'
import MyForm from '../../components/MyForm'
import { atleta } from '../../../../global.constants.js'
import FormModal from '../../components/modals/FormModal.jsx'
import { useMyFormHook } from '../../hooks/form/useMyFormHook.js'
import { atletaFields } from '../../constants/form/fields.js'
import { representanteValidation } from '../../constants/dataValidation.js'
import { validationInputAtleta } from '../../constants/validationInputs.js'
import MyTable from '../../components/MyTable.jsx'
import { useCatcher } from '../../hooks/table/useCatcher.js'
import { createAtleta } from '../../service/atletas.js'
import { atletaColumns as columns } from '../../constants/table/columns.js'

const CatchersView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useCatcher()
  console.log('data from veiew', data)
  const viewLink = '/private/atletas/atleta/'
  const { formData, actions, errorState } = useMyFormHook(atleta, representanteValidation, validationInputAtleta, createAtleta)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const user = JSON.parse(window.localStorage.getItem('auth')).user

  const rol = user ? user.rol : ''

  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          CATCHERS DE LA ACADEMIA
        </Heading>
        <MyTable data={data} isDisabled={!(rol === 'administrativo' || rol === 'gerente')} action={(rol === 'administrativo' || rol === 'gerente')} viewLink={viewLink} setVisualizable datatype='Agregar atleta' idRow='cedula' columns={columns} title='Visualización de atletas' openModal={openModal} isOpen={isOpen} setIsOpen={setIsOpen} />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={atletaFields} formData={formData} actions={actions} errorMessage={errorState} />
      </FormModal>
    </Stack>
  )
}

export default CatchersView
