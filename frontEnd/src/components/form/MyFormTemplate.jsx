import { Box, Stack } from '@chakra-ui/react'
const MyFormTemplate = ({ children, bg = true }) => {
  return (
    <Box
      rouned='lg'
      bg='white'
      color='black'
      p={4}
      mb={4}
      minW={600}
    >
      <Stack spacing={4}>
        {children}
      </Stack>
    </Box>
  )
}

export default MyFormTemplate
