/* eslint-disable camelcase */
import { Stack, VStack, HStack, Heading, List, ListItem, Text, SimpleGrid, Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useFichaData } from '../../hooks/view/useFichaData.js'
// import MyTableFicha from '../../components/MyTableFicha.jsx'
import { datosGeneralesColumns, datosFichaColumns, perimetrosCorporalesColumns, indiceCinturaCaderaColumns, indiceMasaCorporalColumns } from '../../constants/table/columns.js'

const useFichaDataDivisor = (columns, data) => {
  const half = Math.ceil(columns.length / 2)
  const firstHalf = columns.slice(0, half)
  const secondHalf = columns.slice(half, columns.length)

  return { firstHalf, secondHalf }
}

const FichaView = () => {
  const { id_ficha } = useParams()
  const { data } = useFichaData({ id: id_ficha })

  console.log(data)

  return (
    <>
      {data &&
        <HStack ml={20} w='90%' h='fit-content' gap={10}>
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
                {/* {data.datosGenerales &&
                  <MyFichaDisplayHalf columns={datosGeneralesColumns} data={data.datosGenerales} />} */}
              </Stack>
            </Box>
          </VStack>
          <VStack h='fit-content' w='60%' gap={10}>
            <Box boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>DATOS GENERALES</Heading>
                {data.datosGenerales &&
                  <MyFichaDisplayHalf columns={datosGeneralesColumns} data={data.datosGenerales} />}
              </Stack>
            </Box>
            <Box boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>PERÍMETROS CORPORALES</Heading>
                {data.perimetros &&
                  <MyFichaDisplayHalf columns={perimetrosCorporalesColumns} data={data.perimetros} />}
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

const MyFichaDisplayHalf = ({ data, columns }) => {
  const { firstHalf, secondHalf } = useFichaDataDivisor(columns, data)

  return (
    <SimpleGrid columns={2} spacing={2}>
      <Box>
        <List p={2} textAlign='right' spacing={2}>
          {firstHalf.map((element, index) => (
            <ListItem key={index} display='flex' w='100%' justifyContent='space-between' bg={index % 2 === 0 ? '#D3E8F5' : '#B0DDF5'} borderRadius='5px' p={2}>
              <Text as='b' fontSize='md'>{element.name}</Text>
              <Text fontSize='md'>{data[element.key]}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <List p={2} textAlign='right' spacing={2}>
          {secondHalf.map((element, index) => (
            <ListItem key={index} display='flex' w='100%' justifyContent='space-between' bg={index % 2 === 0 ? '#D3E8F5' : '#B0DDF5'} borderRadius='5px' p={2}>
              <Text as='b' fontSize='md'>{element.name}</Text>
              <Text fontSize='md'>{data[element.key]}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </SimpleGrid>
  )
}

const MyFichaDisplayInfo = ({ data, columns }) => {
  return (
    <Box alignContent='center'>
      <List p={2} textAlign='right' spacing={2}>
        {
              columns.map((element, index) => (
                <ListItem key={index} display='flex' w='100%' justifyContent='space-between' bg={index % 2 === 0 ? '#D3E8F5' : '#B0DDF5'} borderRadius='5px' p={2}>
                  <Text as='b' fontSize='md'>{element.name}</Text>
                  <Text fontSize='md'>{data[element.key]}</Text>
                </ListItem>
              ))
            }
      </List>
    </Box>
  )
}

export default FichaView
