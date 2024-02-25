import React from 'react'
import { HStack, Stack, Box, Text, Heading, Flex } from '@chakra-ui/react'
import MyButton from './form/MyButton'
export const MyAtletaDatos = ({ data = [''] }) => {
  console.log(data)
  return (
    <>
      <Stack bg='black' w='30%' h='33%' rounded='full' alignItems='center' mb={8}>
        photo
      </Stack>
      <Stack p={4} w='100%' h='65%' align='center'>
        <Heading fontSize='xl'>DATOS PERSONALES</Heading>
        <HStack p={4} w='100%' h='fit-content' alignItems='start'>
          <Box flex={1}>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight='bold'>Nombre:</Text>
              <Text fontSize='md'>
                {data[0].nombre}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight='bold'>Fecha de nacimiento:</Text>
              <Text fontSize='md'>
                {data[0].fecha_nacimiento}
              </Text>
            </Flex>
          </Box>
          <Box flex={1}>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight='bold'>Cédula:</Text>
              <Text fontSize='md'>
                {data[0].cedula}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight='bold'>Lugar de nacimiento:</Text>
              <Text fontSize='md'>
                {data[0].lugar_nacimiento}
              </Text>
            </Flex>
            <Text fontSize='lg' fontWeight='bold'>
              {data.edad}
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              {data.email}
            </Text>
          </Box>
        </HStack>
        <Heading fontSize='xl'>DATOS DEPORTIVOS</Heading>
        <HStack p={4} w='100%' h='fit-content' alignItems='start'>
          <Box flex={1}>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight='bold'>Hitting arm:</Text>
              <Text fontSize='md'>
                {data[0].hitting}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight='bold'>Throwing arm:</Text>
              <Text fontSize='md'>
                {/* {data[0].throwing} */}
              </Text>
            </Flex>
          </Box>
          <Box flex={1}>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight='bold'>Clase:</Text>
              <Text fontSize='md'>
                {data[0].clase}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize='md' fontWeight='bold'>Posición</Text>
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
  return (
    <>
      <h1>asdhaskld</h1>
    </>
  )
}
