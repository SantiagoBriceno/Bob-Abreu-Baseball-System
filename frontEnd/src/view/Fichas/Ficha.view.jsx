/* eslint-disable camelcase */
import { Stack, VStack, HStack, Heading, List, ListItem, Text, SimpleGrid, Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useFichaData } from '../../hooks/view/useFichaData.js'
// import MyTableFicha from '../../components/MyTableFicha.jsx'
import { datosGeneralesColumns, datosFichaColumns, perimetrosCorporalesColumns, indiceCinturaCaderaColumns, indiceMasaCorporalColumns } from '../../constants/table/columns.js'

const FichaView = () => {
  const { id_ficha } = useParams()
  const { data } = useFichaData({ id: id_ficha })

  console.log(data)

  return (
    <>
      {data &&
        <HStack w='100%' h='100%' gap={10}>
          <VStack h='fit-content' w='40%' gap={10} templateRows='repeat(2, 1fr)'>
            <Box boxShadow='xl' bg='white' h='100%' w='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={2}>FICHA ANTROPOMÉTRICA</Heading>
                {data.datosFicha &&
                  <MyFichaDisplayInfo columns={datosFichaColumns} data={data.datosFicha} />}
              </Stack>
            </Box>
            <Box boxShadow='xl' bg='white' w='100%' h='fit-content' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>PERFILES FOTOGRÁFICOS</Heading>
                {data.datosGenerales &&
                  <MyFichaDisplayInfo columns={datosGeneralesColumns} data={data.datosGenerales} />}
              </Stack>
            </Box>
          </VStack>
          <VStack h='fit-content' w='60%' gap={10}>
            <Box boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>DATOS GENERALES</Heading>
                {data.datosGenerales &&
                  <MyFichaDisplayInfo columns={datosGeneralesColumns} data={data.datosGenerales} />}
              </Stack>
            </Box>
            <Box boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>PERÍMETROS CORPORALES</Heading>
                {data.perimetros &&
                  <MyFichaDisplayInfo columns={perimetrosCorporalesColumns} data={data.perimetros} />}
              </Stack>
            </Box>
            <Box boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>ÍNDICE DE MASA CORPORAL</Heading>
                {data.imc &&
                  <MyFichaDisplayInfo columns={indiceCinturaCaderaColumns} data={data.imc} />}
              </Stack>
            </Box>
            <Box boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>ÍNDICE DE CINTURA CADERA</Heading>
                {data.icc &&
                  <MyFichaDisplayInfo columns={indiceCinturaCaderaColumns} data={data.icc} />}
              </Stack>
            </Box>
          </VStack>
        </HStack>}

    </>
  )
}

const MyFichaDisplayInfo = ({ data, columns }) => {
  const halfLength = Math.ceil(columns.length / 2)
  const fullLength = columns.length
  console.log(halfLength)

  return (
    (halfLength >= 4)
      ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {
            Array.from({ length: halfLength }).map((_, i) => (
              <List key={i} p={2} spacing={2}>
                {
                  columns.slice(i, halfLength).map((element, index) => (
                    <ListItem key={index} display='flex' w='80%' justifyContent='space-between' bg={index % 2 === 0 ? '#D3E8F5' : '#B0DDF5'} borderRadius='5px' p={2}>
                      <Text as='b' fontSize='md'>{element.name}</Text>
                      <Text as='b' fontSize='sm'>{data[element.key]}</Text>
                    </ListItem>
                  ))
                }
              </List>
            ))
          }
          {
            Array.from({ length: halfLength }).map((_, i) => (
              <List key={i}>
                {
                  columns.slice(i + halfLength, fullLength).map((element, index) => (
                    <ListItem key={index} display='flex' w='80%' justifyContent='space-between' bg={index % 2 === 0 ? '#D3E8F5' : '#B0DDF5'} borderRadius='5px' p={2}>
                      <Text>{element.name}</Text>
                      <Text>{data[element.key]}</Text>
                    </ListItem>
                  ))
                }
              </List>
            ))
          }
        </SimpleGrid>
        )
      : (
        <Box alignContent='center'>
          <List p={2} textAlign='right' spacing={2}>
            {
              columns.map((element, index) => (
                <ListItem key={index} display='flex' w='100%' justifyContent='space-between' bg={index % 2 === 0 ? '#D3E8F5' : '#B0DDF5'} borderRadius='5px' p={2}>
                  <Text as='b' fontSize='md'>{element.name}</Text>
                  <Text as='b' fontSize='sm'>{data[element.key]}</Text>
                </ListItem>
              ))
            }
          </List>
        </Box>
        )

  )
}

export default FichaView
