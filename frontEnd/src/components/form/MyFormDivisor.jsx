import { Heading, Stack, StackDivider, useColorModeValue } from '@chakra-ui/react'
const MyFormDivisor = ({ title, children }) => {
  return (
    <Stack divider={<StackDivider borderColor={useColorModeValue('black.100', 'black.700')} />} spacing={4}>
      <Heading size='lg' fontWeight='bold' fontStyle='italic'>
        {title}
      </Heading>
      {children}
    </Stack>
  )
}

export default MyFormDivisor
