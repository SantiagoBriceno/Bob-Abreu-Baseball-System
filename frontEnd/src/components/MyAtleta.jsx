import React from 'react'
import { HStack, Stack, Box, Text, Heading, Flex, useDisclosure, Button, Collapse, IconButton } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import MyButton from './form/MyButton'
export const MyAtletaDatos = ({ data = [''] }) => {
  console.log(data)
  return (
    <>
      <Stack bg='black' w='30%' h='33%' rounded='full' alignItems='center' mb={8}>
        photo
      </Stack>
      <Stack p={4} w='100%' h='65%' alignItems='center'>
        <Heading fontSize='xl'>DATOS PERSONALES</Heading>
        <HStack p={4} w='100%' h='fit-content'>
          <Box flex={1}>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight=''>Nombre:</Text>
              <Text fontSize='md'>
                {data[0].nombre}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight=''>Fecha de nacimiento:</Text>
              <Text fontSize='md'>
                {data[0].fecha_nacimiento}
              </Text>
            </Flex>
          </Box>
          <Box flex={1}>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight=''>Cédula:</Text>
              <Text fontSize='md'>
                {data[0].cedula}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight=''>Lugar de nacimiento:</Text>
              <Text fontSize='md'>
                {data[0].lugar_nacimiento}
              </Text>
            </Flex>
            <Text fontSize='lg' fontWeight=''>
              {data.edad}
            </Text>
            <Text fontSize='lg' fontWeight=''>
              {data.email}
            </Text>
          </Box>
        </HStack>
        <Heading fontSize='xl'>DATOS DEPORTIVOS</Heading>
        <HStack p={4} w='100%' h='fit-content' alignItems='start'>
          <Box flex={1}>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight=''>Hitting arm:</Text>
              <Text fontSize='md'>
                {data[0].hitting}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight=''>Throwing arm:</Text>
              <Text fontSize='md'>
                {/* {data[0].throwing} */}
              </Text>
            </Flex>
          </Box>
          <Box flex={1}>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight=''>Clase:</Text>
              <Text fontSize='md'>
                {data[0].clase}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight=''>Posición</Text>
              <Text fontSize='md'>
                {data[0].posicion}
              </Text>
            </Flex>
          </Box>
        </HStack>
        <Stack p={4} w='100%' h='fit-content' alignItems='start'>
          <MyButton label='Proyección' bg='principales.cuaternary' color='white' />
        </Stack>
      </Stack>
    </>
  )
}

export const MyAtletaEstadisticas = ({ data }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack boxShadow='xl' p={2} bg='white' w='100%' h='100%' rounded='10px'>
      <Heading fontSize='xl' alignItems='center'>Estadisticas</Heading>
      <DropDown title='Hitting'>
        asdkljaskldjl
      </DropDown>
    </Stack>

  )
}

export const DropDown = ({ title, children }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack pl={5} bg='gray' rounded='5px 5px 0 0'>
      <HStack>
        <Text w='90%'>{title}</Text>
        <IconButton
          w='10%'
          variant='ghost'
          _hover={{ bg: 'transparent' }}
          onClick={onToggle}
          aria-label='Open'
          icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        />
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        {children}
      </Collapse>
    </Stack>
  )
}
