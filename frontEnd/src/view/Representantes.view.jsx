import { HStack, Heading, Stack } from '@chakra-ui/react'
import MyForm from '../components/MyForm'
import { representante } from '../../../global.constants.js'
import { representanteValidation } from '../constants/dataValidation.js'
import { validationInputRepresentante } from '../constants/validationInputs.js'
import { useMyFormHook } from '../hooks/form/useMyFormHook.js'
import { representanteFields } from '../constants/form/fields.js'
import { createRepresentante } from '../service/representante.js'
import MyTable from '../components/MyTable.jsx'

const columns = [
  { key: 'nombre', name: 'Nombre' },
  { key: 'cedula', name: 'Cédula' },
  { key: 'telefono', name: 'Telefono' },
  { key: 'correo', name: 'Correo' }

]

const RepresentanteView = () => {
  const { formData, actions, errorState } = useMyFormHook(representante, representanteValidation, validationInputRepresentante, createRepresentante)

  return (
    <HStack spacing={8} align='center'>
      <MyForm fields={representanteFields} formData={formData} actions={actions} title='REPRESENTANTE' errorMessage={errorState} />
      {/* <MyForm fields={representanteFields} formData={formData} actions={actions} title='REPRESENTANTE' errorMessage={errorState} /> */}
      <Stack spacing={8} align='center' minH='80vh' w='80%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          TABLA DE REPRESENTANTES
        </Heading>
        <MyTable columns={columns} title='Visualización de representantes' />
      </Stack>
    </HStack>
  )
}

export default RepresentanteView
