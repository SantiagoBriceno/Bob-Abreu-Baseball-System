import { HStack, Stack, Box, Text, Heading, useDisclosure, Collapse, IconButton, Image, Divider, SimpleGrid, List, ListItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useLineChart } from '../hooks/charts/useLineChart'
import { useAntropometria } from '../hooks/useMedidasAntropometricas'
export const MyAtletaDatos = ({ data = [''], img }) => {
  return (
    <>
      <Heading fontSize='2xl' fontWeight='800'>Datos del Atleta</Heading>
      <Divider />
      <Image src={img} alt='Imagen del atleta' borderRadius='full' w='60%' />

      <Stack p={4} w='100%' h='65%' alignItems='center'>
        <Text fontWeight='800' fontSize='3xl'>{data[0].nombre}</Text>
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
  // console.log(data)
  return (
    <Stack boxShadow='xl' p={8} bg='white' w='100%' h='100%' rounded='10px'>
      <Heading fontSize='xl' fontWeight='800' alignItems='center'>Estadisticas</Heading>
      <Divider />
      <DropDown title='Progreso de tiempo en Sesenta Yardas'>
        <Box pl={5} bg='white'>
          {data
            ? <LineChart stats={data.running} param='velocidad_sesenta' title='Progreso del tiempo de 60 yardas' index='Tiempo en segundos' />
            : <Text>No hay datos</Text>}
        </Box>
      </DropDown>
      <DropDown title='Progreso de velocidad de bateos'>
        <Box pl={5} bg='white'>
          {data
            ? <LineChart stats={data.hitting} param='bat_speed' title='Progreso de la velocidad del bate en Millas Por Hora' index='MPH' />
            : <Text>No hay datos</Text>}
        </Box>
      </DropDown>
    </Stack>

  )
}

export const MyAtletaMedidasAntropometricas = ({ data }) => {
  const { datosGenerales, perimetros, icc, imc } = useAntropometria({ data })
  console.log('datos Generales: ', datosGenerales)
  console.log('perimetros: ', perimetros)
  console.log('icc: ', icc)
  console.log('imc: ', imc)

  return (
    <Stack boxShadow='xl' p={8} bg='white' w='100%' h='100%' rounded='10px'>
      <Heading fontSize='xl' alignItems='center' fontWeight='800'>Medidas Antropométricas</Heading>
      <Divider />
      {datosGenerales && perimetros && icc && imc
        ? (
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
            <List textAlign='left' spacing={2}>
              <ListItem><Heading fontSize='lg'>Datos Generales</Heading></ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Peso Actual:</Text>
                <Text>{datosGenerales.peso_corporal ? `${datosGenerales.peso_corporal} kg` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Estatura:</Text>
                <Text>{datosGenerales.estatura_maxima ? `${datosGenerales.estatura_maxima} cm` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Indice de masa corporal:</Text>
                <Text>{datosGenerales.imc ? datosGenerales.imc : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Tasa metabolica Basal:</Text>
                <Text>{datosGenerales.tasa_metabolica_basal ? `${datosGenerales.tasa_metabolica_basal}` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Ver más</Text>
                <Button variant='link' colorScheme='blue'>...</Button>
              </ListItem>
            </List>

            {/* Parametros de perimetros corporales: brazo_contraido, brazo_relajado, cabeza, espalda */}

            <List spacing={2}>
              <ListItem><Heading fontSize='lg'>Perimetros Corporales</Heading></ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Brazo contraido:</Text>
                <Text>{perimetros.brazo_contraido ? `${perimetros.brazo_contraido} cm` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Brazo relajado:</Text>
                <Text>{perimetros.brazo_relajado ? `${perimetros.brazo_relajado} cm` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Cabeza:</Text>
                <Text>{perimetros.cabeza ? `${perimetros.cabeza} cm` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Espalda:</Text>
                <Text>{perimetros.espalda ? `${perimetros.espalda} cm` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Ver más</Text>
                <Button variant='link' colorScheme='blue'>...</Button>
              </ListItem>
            </List>
            {/* Parametros de imc: cintura, cadera, relacion_cintura_cadera */}
            <List spacing={2}>
              <ListItem><Heading fontSize='lg'>Indice de Masa Corporal</Heading></ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Cintura:</Text>
                <Text>{icc.cintura ? `${icc.cintura} cm` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Cadera:</Text>
                <Text>{icc.cadera ? `${icc.cadera} cm` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Relación Cintura-Cadera:</Text>
                <Text>{icc.relacion_cintura_cadera ? `${icc.relacion_cintura_cadera}` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Ver más</Text>
                <Button variant='link' colorScheme='blue'>...</Button>
              </ListItem>
            </List>

            {/* PArametros de imc, masa_grasa_corporal, masa_grasa_ideal, masa_magra_corporal, masa_magra_ideal */}
            <List spacing={2}>
              <ListItem><Heading fontSize='lg'>Indice de Masa Corporal</Heading></ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Masa Grasa Corporal:</Text>
                <Text>{imc.masa_grasa_corporal ? `${imc.masa_grasa_corporal} %` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Masa Grasa Ideal:</Text>
                <Text>{imc.masa_grasa_ideal ? `${imc.masa_grasa_ideal} %` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Masa Magra Corporal:</Text>
                <Text>{imc.masa_magra_corporal ? `${imc.masa_magra_corporal} %` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Masa Magra Ideal:</Text>
                <Text>{imc.masa_magra_ideal ? `${imc.masa_magra_ideal} %` : 'no data found'}</Text>
              </ListItem>
              <ListItem display='flex' justifyContent='space-between'>
                <Text>Ver más</Text>
                <Button variant='link' colorScheme='blue'>...</Button>
              </ListItem>
            </List>
          </SimpleGrid>
          )
        : <Text>No hay datos</Text>}

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
