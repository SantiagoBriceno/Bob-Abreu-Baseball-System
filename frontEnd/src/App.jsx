import React from 'react'
import MyForm from './components/MyForm'
import { useMyFormHook } from './hooks/form/useMyFormHook'
import { representante } from './constants/dataStructure'
import { representanteValidation } from './constants/dataValidation'
import { validationInputRepresentante } from './constants/validationInputs'
import { representanteFields } from './constants/form/fields'

function App () {
  const { formData, actions, errorState } = useMyFormHook(representante, representanteValidation, validationInputRepresentante)

  return (
    <>
      <MyForm title='Example' fields={representanteFields} formData={formData} actions={actions} errorMessage={errorState} />
    </>
  )
}

export default App
