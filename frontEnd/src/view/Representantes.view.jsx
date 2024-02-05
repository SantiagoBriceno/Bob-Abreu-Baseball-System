import { Stack } from '@chakra-ui/react'
import MyForm from '../components/MyForm'
import { representante } from '../../../global.constants.js'
import { representanteValidation } from '../constants/dataValidation.js'
import { validationInputRepresentante } from '../constants/validationInputs.js'
import { useMyFormHook } from '../hooks/form/useMyFormHook.js'
import { representanteFields } from '../constants/form/fields.js'

const RepresentanteView = () => {
  const { formData, actions, errorState } = useMyFormHook(representante, representanteValidation, validationInputRepresentante)

  return (
    <Stack spacing={8} align='center'>
      <MyForm fields={representanteFields} formData={formData} actions={actions} title='Atletas' errorMessage={errorState} />
    </Stack>
  )
}

export default RepresentanteView
