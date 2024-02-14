import { HStack, VStack, Heading } from '@chakra-ui/react'
import MyForm from '../../components/MyForm'
import { atleta } from '../../../../global.constants.js'

import { useMyFormHook } from '../../hooks/form/useMyFormHook.js'
import { atletaFields } from '../../constants/form/fields.js'
import { representanteValidation } from '../../constants/dataValidation.js'
import { validationInputAtleta } from '../../constants/validationInputs.js'
import MyTable from '../../components/MyTable.jsx'

const columns = [
  { key: 'nombre', name: 'Nombre' },
  { key: 'cedula', name: 'Cédula' },
  { key: 'telefono', name: 'Telefono' },
  { key: 'lugar_de_nacimiento', name: 'Lugar de nacimiento' },
  { key: 'fecha_de_nacimiento', name: 'Fecha de nacimiento' },
  { key: 'posicion', name: 'Posición' },
  { key: 'status', name: 'Status' }

]

const AtletasView = () => {
  const { formData, actions, errorState } = useMyFormHook(atleta, representanteValidation, validationInputAtleta)
  return (
    <HStack spacing={8} align='center'>
      <MyForm fields={atletaFields} formData={formData} actions={actions} title='INGRESO DE ATLETAS' errorMessage={errorState} />
      <VStack spacing={8} align='center' w='80%' minH='100vh'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          ATLETAS DE LA ACADEMIA
        </Heading>
        <MyTable columns={columns} title='Visualización de atletas' modalMode />
      </VStack>
    </HStack>
  )
}

export default AtletasView
