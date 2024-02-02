import { useState } from 'react'

export const useMyFormHook = (formDataStructure, formDataValidation, validationMethod) => {
  const [formData, setFormData] = useState(formDataStructure)
  const [errorState, setErrorState] = useState(formDataValidation)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleBlur = (e) => {
    const { id } = e.target
    const result = validationMethod({ id, value: e.target.value })
    setErrorState({ ...errorState, [id]: result })
    console.log(errorState)
  }

  const actions = {
    handleChange,
    handleSubmit,
    handleBlur
  }

  return { formData, actions, errorState }
}
