import { Box, Stack } from '@chakra-ui/react'
const MyFormTemplate = ({ children, bg = true }) => {
  return (
    <Box
      rouned='lg'
      bg='background.bg'
      boxShadow={bg ? 'lg' : 'none'}
      p={8}
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
