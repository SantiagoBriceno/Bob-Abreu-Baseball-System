/* eslint-disable camelcase */
import { Stack, VStack, HStack, Heading, List, ListItem, Text, SimpleGrid, Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useFichaData } from '../../hooks/view/useFichaData.js'
import { datosGeneralesColumns, datosFichaColumns, perimetrosCorporalesColumns, indiceCinturaCaderaColumns, indiceMasaCorporalColumns } from '../../constants/table/columns.js'

const FichaView = () => {
  const { id_ficha } = useParams()
  const { data } = useFichaData({ id: id_ficha })

  console.log('data', data)
  return (
    <>
      {data &&
        <HStack w='100%' h='100%' gap={10} templateColumns='repeat(2, 1fr)'>
          <VStack w='fit-content' h='fit-content' gap={10} templateRows='repeat(2, 1fr)'>
            <Box boxShadow='xl' bg='white' w='100%' h='fit-content' rounded='10px' p={4}>
              <Stack>
                <Heading pb={2}>Ficha antropométrica</Heading>
                <MyFichaReport data={data.datosFicha} columns={datosFichaColumns} />
              </Stack>
            </Box>
            <Box boxShadow='xl' bg='white' w='100%' h='fit-content' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>Perfiles fotográticos</Heading>
                <MyFichaReport data={data.datosGenerales} columns={datosGeneralesColumns} />
              </Stack>
            </Box>
          </VStack>
          <VStack w='fit-content' h='fit-content' gap={10}>
            <Box boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>Datos General</Heading>
                <MyFichaReport data={data.datosGenerales} columns={datosGeneralesColumns} />
              </Stack>
            </Box>
            <Box boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>Perimetros Corporales</Heading>
                <MyFichaReport data={data.perimetros} columns={perimetrosCorporalesColumns} />
              </Stack>
            </Box>
            <Box boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>Indice de masa corporal</Heading>
                <MyFichaReport data={data.imc} columns={indiceMasaCorporalColumns} />
              </Stack>
            </Box>
            <Box boxShadow='xl' bg='white' w='100%' h='100%' rounded='10px' p={4}>
              <Stack>
                <Heading pb={4}>Indice de cintura cadera</Heading>
                <MyFichaReport data={data.icc} columns={indiceCinturaCaderaColumns} />
              </Stack>
            </Box>
          </VStack>
        </HStack>}

    </>
  )
}

const MyFichaReport = ({ data, columns }) => {
  return (
    (
      data &&
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          <List textAlign='left' spacing={2}>
            {
          columns.map((element, index) => (
            <ListItem key={index} display='flex' justifyContent='space-between'>
              <Text>{element.name}</Text>
              <Text>{data[element.key]}</Text>
            </ListItem>
          ))
        }
          </List>
        </SimpleGrid>
    )

  )
}

export default FichaView
