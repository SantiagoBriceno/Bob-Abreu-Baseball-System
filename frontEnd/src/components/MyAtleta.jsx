import React from 'react'
import { HStack, Stack, Box, Text, Heading, Grid } from '@chakra-ui/react'
export const MyAtletaDatos = ({ data = [''] }) => {
  console.log(data)
  return (
    <>
      <Stack bg='green' w='30%' h='30%' rounded='full' alignItems='center' mb={8}>
        photo
      </Stack>
      <Heading>Datos personales</Heading>
      <HStack bg='red' p={8} w='100%' h='65%' alignItems='center' align='center'>
        <Box flex={1}>
          <Grid>
            <Text fontSize='2xl' fontWeight='bold'>Nombre: </Text>
            <Text fontSize='lg' fontWeight='bold'>
              {data[0].nombre}
            </Text>
          </Grid>
          <Grid>
            <Text fontSize='2xl' fontWeight='bold'>Cédula: </Text>
            <Text fontSize='lg' fontWeight='bold'>
              {data[0].cedula}
            </Text>
          </Grid>
          <Grid>
            <Text fontSize='2xl' fontWeight='bold'>
              Fecha de nacimiento:
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
              {data[0].fecha_nacimiento}
            </Text>
          </Grid>

        </Box>
        <Box flex={1}>
          <Text fontSize='2xl' fontWeight='bold'>
            {data.nombre}
          </Text>
          <Text fontSize='lg' fontWeight='bold'>
            {data.apellido}
          </Text>
          <Text fontSize='lg' fontWeight='bold'>
            {data.edad}
          </Text>
          <Text fontSize='lg' fontWeight='bold'>
            {data.email}
          </Text>
        </Box>
      </HStack>
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
