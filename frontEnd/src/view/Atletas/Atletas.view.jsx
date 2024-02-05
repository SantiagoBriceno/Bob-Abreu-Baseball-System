import { Stack } from '@chakra-ui/react'
import MyForm from '../../components/MyForm'
import { atleta } from '../../../../global.constants.js'

import { useMyFormHook } from '../../hooks/form/useMyFormHook.js'
import { atletaFields } from '../../constants/form/fields.js'
import { representanteValidation } from '../../constants/dataValidation.js'
import { validationInputAtleta } from '../../constants/validationInputs.js'

const AtletasView = () => {
  const { formData, actions, errorState } = useMyFormHook(atleta, representanteValidation, validationInputAtleta)

  return (
    <Stack spacing={8} align='center'>
      <MyForm fields={atletaFields} formData={formData} actions={actions} title='Atletas' errorMessage={errorState} />
    </Stack>
  )
}

export default AtletasView
