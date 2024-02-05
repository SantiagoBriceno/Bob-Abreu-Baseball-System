import { Heading, Stack } from '@chakra-ui/react'
import MyForm from '../../components/MyForm'
import { atleta } from '../../../constants.js'
import { useMyFormHook } from '../../hooks/form/useMyFormHook.js'

const AtletasView = () => {
  const { fields, formData, actions, title, errorMessage } = useMyFormHook(atleta)

  return (
    <Stack spacing={8} align='center'>
      <Heading size='lg'>{title}</Heading>
      <MyForm fields={fields} formData={formData} actions={actions} title={title} errorMessage={errorMessage} />
    </Stack>
  )
}

export default AtletasView
