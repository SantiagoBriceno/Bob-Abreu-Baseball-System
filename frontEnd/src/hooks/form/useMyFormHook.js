import { useState } from 'react'
import { MyToast } from './toast'
import { useToast } from '@chakra-ui/react'

export const useMyFormHook = (formDataStructure, formDataValidation, validationMethod, onSubmit) => {
  const toast = useToast()
  const [formData, setFormData] = useState(formDataStructure)
  const [errorState, setErrorState] = useState(formDataValidation)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    onSubmit(formData).then((response) => {
      const { status } = response
      console.log(status)
      response.json().then((data) => {
        MyToast({ toast, title: data.message, description: '', status })
      })
    })
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
