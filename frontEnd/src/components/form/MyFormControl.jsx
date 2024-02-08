import {
  FormControl,
  FormLabel,
  FormHelperText
} from '@chakra-ui/react'

const MyFormControl = ({ label, helperText = null, children }) => {
  console.log(helperText)
  return (
    <FormControl p={0}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default MyFormControl
