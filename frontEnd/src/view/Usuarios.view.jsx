import { Heading, Stack } from '@chakra-ui/react'
import MyForm from '../components/MyForm'
import { usuarioRegister } from '../../../global.constants.js'
import { userValidation } from '../constants/dataValidation.js'
import { validationInputUser } from '../constants/validationInputs.js'
import { useMyFormHook } from '../hooks/form/useMyFormHook.js'
import { usuarioRegisterFields } from '../constants/form/fields.js'
import { createUser, deleteUser } from '../service/users.js'
import MyTable from '../components/MyTable.jsx'
import { useEffect, useState } from 'react'
import FormModal from '../components/modals/FormModal.jsx'
import { userColumns as columns } from '../constants/table/columns.js'
import { useUser } from '../hooks/table/useUser.js'

const UsuariosView = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { formData, actions, errorState } = useMyFormHook(usuarioRegister, userValidation, validationInputUser, createUser)
  const { data } = useUser()
  const [deleteData, setDeleteData] = useState()

  console.log('data', data)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    if (deleteData) {
      console.log('se hace el efecto')
      deleteUser(deleteData)
    }
  }, [deleteData])

  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          USUARIOS
        </Heading>
        <MyTable setDeleteData={setDeleteData} datatype='Agregar usuario' searchParam='name' columns={columns} data={data} idRow='cedula' openModal={openModal} isOpen={isOpen} setIsOpen={setIsOpen} title='Visualización de representantes' />
      </Stack>
      <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
        <MyForm fields={usuarioRegisterFields} formData={formData} actions={actions} title='REGISTRAR USUARIO' errorMessage={errorState} />
      </FormModal>
    </Stack>
  )
}

const EditForm = ({ data }) => {
  const { actions, errorState, formData } = useMyFormHook({}, registrosEspecialesValidation, validationInputRegistroEspecial, updateRegistroEspecial, false, data.id)
  return (
    <MyForm fields={registroEspecialEditFields(data)} formData={formData} actions={actions} errorMessage={errorState} />
  )
}

export default UsuariosView
