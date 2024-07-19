import {
  FormControl,
  FormLabel,
  FormHelperText
} from '@chakra-ui/react'

const MyFormControl = ({ label, helperText = null, children, mb = 0 }) => {
  return (
    <FormControl p={4} mb={mb} h='50%'>
      <FormLabel fontWeight='semibold'>{label}</FormLabel>
      {children}
      {helperText && helperText.isInvalid && <FormHelperText color='red.500'>{helperText.message}</FormHelperText>}
    </FormControl>
  )
}

export default MyFormControl
