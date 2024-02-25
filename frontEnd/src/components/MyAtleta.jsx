import React from 'react'
import { VStack, Stack, HStack } from '@chakra-ui/react'
export const MyAtletaDatos = ({ data }) => {
  console.log(data)
  return (
    <>
      <Stack bg='green' w='30%' h='30%' rounded='full' alignItems='center' mb={8}>
        photo
      </Stack>
      <Stack bg='red' p={8} w='100%' h='65%' alignItems='center'>
        <h1>Aqui van los datos en un formato lindo</h1>
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
