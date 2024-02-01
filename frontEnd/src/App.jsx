import React from 'react'
import MyForm from './components/MyForm'
import { useMyFormHook } from './hooks/form/useMyFormHook'
import { representante } from './constants/dataStructure'
import { representanteValidation } from './constants/dataValidation'
import { validationInputRepresentante } from './constants/validationInputs'
import { representanteFields } from './constants/form/fields'
import HeaderSidebar from './components/partials/header-side'
import { ConfigProvider } from 'antd'

function App () {
  const { formData, actions, errorState } = useMyFormHook(representante, representanteValidation, validationInputRepresentante)

  return (
    <>
      <HeaderSidebar />
    </>
  )
}

export default App
