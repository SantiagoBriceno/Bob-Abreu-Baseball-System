import {
  FormControl,
  FormLabel,
  FormHelperText
} from '@chakra-ui/react'

const MyFormControl = ({ label, helperText = null, children, mb = 0 }) => {
  console.log(helperText)
  return (
    <FormControl p={4} mb={mb} h='50%'>
      <FormLabel fontWeight='semibold'>{label}</FormLabel>
      {children}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default MyFormControl
