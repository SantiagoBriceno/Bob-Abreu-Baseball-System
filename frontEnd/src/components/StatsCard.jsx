import {
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Box,
  Flex,
  Icon
} from '@chakra-ui/react'

const StatsCard = ({ name, description, icon }) => {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py='5'
      shadow='xl'
      border='1px solid'
      borderColor='black'
      bgColor='white'
      rounded='lg'
      w='100%'
      gap={4}
    >
      <Flex justifyContent='space-between'>
        <Box pl={{ base: 1, md: 2 }}>
          <StatLabel fontWeight='medium' isTruncated>
            <Text fontSize='sm'>{name}</Text>
          </StatLabel>
          <StatNumber fontSize='2xl' fontWeight='medium'>
            <Text as='b' fontSize='2xl'>{description}</Text>
          </StatNumber>
        </Box>
        <Box
          my='auto'
          color='white'
          alignContent='center'
        >
          <Icon as={icon} />
        </Box>
      </Flex>
    </Stat>
  )
}

export default StatsCard
