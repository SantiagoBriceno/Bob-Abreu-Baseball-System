import { HStack, Stack, Box, Text, Heading, Flex, useDisclosure, Collapse, IconButton } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import MyButton from './form/MyButton'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
export const MyAtletaDatos = ({ data = [''] }) => {
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
  console.log(data)
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack boxShadow='xl' p={2} bg='white' w='100%' h='100%' rounded='10px'>
      <Heading fontSize='xl' alignItems='center'>Estadisticas</Heading>
      <DropDown title='Running'>
        <Box pl={5} bg='white'>
          {data ? <LineChart stats={data.running} /> : <Text>No hay datos</Text>}
        </Box>
      </DropDown>
    </Stack>

  )
}

export const DropDown = ({ title, children }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack bg='gray' rounded='5px 5px 0 0'>
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

export const LineChart = ({ stats, param }) => {
  const velocidad_sesenta = stats.values.map((running) => {
    return running.velocidad_sesenta
  })
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  }

  console.log(velocidad_sesenta, 'desde la grafica')

  const labels = stats.x
  const data = {
    labels,
    datasets: [
      {
        label: 'Running Sixty Yards',
        data: velocidad_sesenta,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }
  return (
    <div>
      {stats ? <Line data={data} options={options} /> : <Text>No hay datos</Text>}
    </div>
  )
}
