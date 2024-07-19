import { FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputLeftAddon } from '@chakra-ui/react'
const MyInput = ({ label, onChange, placeholder, id, type = 'text', valueControl, isReadOnly = false, onBlur, validationField = { isInvalid: false, message: '' }, icon = null, mb = 0, ...props }) => {
  return (
    <FormControl {...props} mb={mb} h='50%' isInvalid={validationField.isInvalid}>
      <FormLabel fontWeight='semibold'>{label}</FormLabel>
      {type === 'tel'
        ? (
          <InputGroup>
            <InputLeftAddon bg='background.border' color='text.87' rounded='md'>{icon}</InputLeftAddon>
            <Input placeholder={placeholder} variant='filled' onChange={onChange} value={valueControl} id={id} onBlur={onBlur} />
          </InputGroup>
          )
        : (
          <InputGroup>
            {icon && <InputLeftAddon bg='background.border' color='text.87' rounded='md'>{icon}</InputLeftAddon>}
            <Input placeholder={placeholder} variant='filled' onChange={onChange} value={valueControl} id={id} type={type} isReadOnly={isReadOnly} onBlur={onBlur} />
          </InputGroup>
          )}

      <FormErrorMessage>{validationField.message}</FormErrorMessage>
    </FormControl>
  )
}

export default MyInput
