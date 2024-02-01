import { Stack } from '@chakra-ui/react'

// type 1 = single ; type 2 = double ; type 3 = triple
const MyFormControlTemplate = ({ children }) => {
  return (
    <Stack display='flex'>
      {children}
    </Stack>
  )
}

export default MyFormControlTemplate
