import { VStack } from '@chakra-ui/react'
const MyFormTemplate = ({ children }) => {
  return (
    <VStack rounded='15px' align='left'>
      {children}
    </VStack>
  )
}

export default MyFormTemplate
