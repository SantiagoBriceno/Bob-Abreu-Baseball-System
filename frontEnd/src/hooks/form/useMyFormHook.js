import { useState } from 'react'
import { MyToast } from './toast'
import { useToast } from '@chakra-ui/react'

export const useMyFormHook = (formDataStructure, formDataValidation, validationMethod, onSubmit, encType = false, idEdit = null) => {
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
    if (encType) {
      e.preventDefault()
      const newFormData = new FormData()
      Object.keys(formData).forEach((key) => {
        newFormData.append(key, formData[key])
      })
      onSubmit(newFormData).then((response) => {
        const { status } = response
        response.json().then((data) => {
          MyToast({ toast, title: data.message, description: '', status })
        })
      })
    } else {
      e.preventDefault()
      console.log(formData)
      if (idEdit) {
        onSubmit(idEdit, formData).then((response) => {
          const { status } = response
          response.json().then((data) => {
            MyToast({ toast, title: data.message, description: '', status })
          })
        })
      } else {
        onSubmit(formData).then((response) => {
          console.log(response)
          const { status } = response
          console.log(status)
          response.json().then((data) => {
            MyToast({ toast, title: data.message, description: '', status })
          })
        })
      }
    }
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

  return { formData, actions, errorState, setFormData, formDataStructure }
}
