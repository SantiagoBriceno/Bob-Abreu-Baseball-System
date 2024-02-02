import { VStack } from '@chakra-ui/react'
const MyFormTemplate = ({ children }) => {
  return (
    <VStack align='left'>
      {children}
    </VStack>
  )
}

export default MyFormTemplate
