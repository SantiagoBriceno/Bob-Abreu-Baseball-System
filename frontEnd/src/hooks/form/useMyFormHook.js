import { useState } from 'react'
import { MyToast } from './toast'
import { useToast } from '@chakra-ui/react'

export const useMyFormHook = (formDataStructure, formDataValidation, validationMethod, onSubmit) => {
  const toast = useToast()
  const [formData, setFormData] = useState(formDataStructure)
  const [errorState, setErrorState] = useState(formDataValidation)

  const handleChange = (e) => {
    // obtengo el id, el valor y el tipo del input
    const { id, value, type } = e.target
    // si el tipo es file, obtengo el archivo
    if (type === 'file') {
      const file = e.target.files[0]
      setFormData({ ...formData, [id]: file })
    } else {
      setFormData({ ...formData, [id]: value })
    }
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
