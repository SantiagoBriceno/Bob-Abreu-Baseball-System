import { HStack, Stack, Box, Text, Heading, Flex, useDisclosure, Collapse, IconButton, Image, Divider, SimpleGrid, List, ListItem, ListIcon } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import MyInput from '../components/form/MyInput'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useLineChart } from '../hooks/charts/useLineChart'
export const MyAtletaDatos = ({ data = [''], img }) => {
  return (
    <>

      <Image border='solid 1px black' src={img} alt='Imagen del atleta' borderRadius='full' w='60%' />

      <Stack p={4} w='100%' h='65%' alignItems='center'>
        <Text fontWeight='800' as='bold' fontSize='3xl'>{data[0].nombre}</Text>
        <Text as='i' fontSize='lg'>{data[0].posicion}</Text>
        <Divider />
        <Heading fontSize='lg' fontWeight='400'>Datos Generales</Heading>
        <Box mb={2} bg='gray.100' p={2} rounded='xl' w='100%' h='fit-content'>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <List textAlign='right' spacing={2}>
              <ListItem>Cédula</ListItem>
              <ListItem>Fecha de nacimiento</ListItem>
              <ListItem>Clase</ListItem>
              <ListItem>Lugar de nacimiento</ListItem>
            </List>
            <List spacing={2}>
              <ListItem>{data[0].cedula}</ListItem>
              <ListItem>{data[0].fecha_nacimiento}</ListItem>
              <ListItem>{data[0].clase}</ListItem>
              <ListItem>{data[0].lugar_nacimiento}</ListItem>
            </List>
          </SimpleGrid>
        </Box>
        <Divider />
        <Heading fontSize='md' fontWeight='400'>Datos Deportivos</Heading>

        <Box mb={2} bg='gray.100' p={2} rounded='xl' w='100%' h='fit-content'>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <List textAlign='right' spacing={2}>
              <ListItem>Posición</ListItem>
              <ListItem>Estado</ListItem>
              <ListItem>Perfil</ListItem>
              <ListItem>Throwing</ListItem>
            </List>
            <List spacing={2}>
              <ListItem>{data[0].posicion}</ListItem>
              <ListItem>{data[0].estado}</ListItem>
              <ListItem>{data[0].hitting}</ListItem>
              <ListItem>{data[0].throwing}</ListItem>
            </List>
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  )
}

export const MyAtletaEstadisticas = ({ data }) => {
  console.log(data)
  return (
    <Stack boxShadow='xl' p={2} bg='white' w='100%' h='100%' rounded='10px'>
      <Heading fontSize='xl' alignItems='center'>Estadisticas</Heading>
      <DropDown title='Running'>
        <Box pl={5} bg='white'>
          {data
            ? <LineChart stats={data.running} param='velocidad_sesenta' title='Progreso del tiempo de 60 yardas' index='Tiempo en segundos' />
            : <Text>No hay datos</Text>}
        </Box>
      </DropDown>
      <DropDown title='Hitting'>
        <Box pl={5} bg='white'>
          {data
            ? <LineChart stats={data.hitting} param='bat_speed' title='Progreso de la velocidad del bate en Millas Por Hora' index='MPH' />
            : <Text>No hay datos</Text>}
        </Box>
      </DropDown>
    </Stack>

  )
}

export const DropDown = ({ title, children }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack bg='#dcdcdc' rounded='5px 5px 0 0'>
      <HStack>
        <Text ml={5} w='95%'>{title}</Text>
        <IconButton
          w='5%'
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

export const LineChart = ({ stats, param, title, index }) => {
  const { data, options } = useLineChart(stats, param, title, index)
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
  return (
    <Stack>
      {data ? <Line data={data} options={options} /> : <Text>No hay datos</Text>}
    </Stack>
  )
}
