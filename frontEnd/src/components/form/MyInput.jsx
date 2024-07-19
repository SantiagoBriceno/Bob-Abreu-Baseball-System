import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
const MyInput = ({ icon, label, w = '100%', help = false, ...props }) => {
  return (
    <InputGroup w={w}>
      {icon !== undefined && <InputLeftAddon bg='background.border' color='text.87' rounded='md'>{icon}</InputLeftAddon>}
      <Input variant='filled' {...props} />
    </InputGroup>
  )
}

export default MyInput
