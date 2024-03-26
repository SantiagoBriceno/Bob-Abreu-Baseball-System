import { HStack, Stack, Box, Text, Heading, useDisclosure, Collapse, IconButton, Tooltip as CTooltip, Image, Divider, SimpleGrid, List, ListItem, Button } from '@chakra-ui/react'
import { AddIcon, ChevronDownIcon, ChevronUpIcon, DeleteIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useLineChart } from '../hooks/charts/useLineChart'
import { runningPrediction } from '../service/running.prediction'
import { hittingPrediction } from '../service/hitting.prediction'
import { useAntropometria } from '../hooks/useMedidasAntropometricas'
import { useEstadisticas } from '../hooks/useEstadisticas'
import { useState } from 'react'
import FormModal from './modals/FormModal'
import { Link } from 'react-router-dom'
export const MyAtletaDatos = ({ data = [''], img, registrosEspeciales }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

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
        <Divider />
        <Heading fontSize='md' fontWeight='400'>Perfiles fotograficos</Heading>
        <Box mb={2} bg='gray.100' p={2} rounded='xl' w='100%' h='fit-content'>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Button variant='link' colorScheme='blue'>Perfiles</Button>
            <Button variant='link' colorScheme='blue'>...</Button>
          </SimpleGrid>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

          {registrosEspeciales && registrosEspeciales.length > 0
            ? (
              <CTooltip hasArrow label='Registros especiales' aria-label='A tooltip'>
                <IconButton onClick={handleIsOpen} variant='ghost' icon={<HamburgerIcon />} />
              </CTooltip>)
            : null}

          <CTooltip hasArrow label='Editar datos del atleta' aria-label='A tooltip'>
            <IconButton variant='ghost' icon={<EditIcon />} />
          </CTooltip>

          <CTooltip hasArrow label='borrar Atleta' aria-label='A tooltip'>
            <IconButton variant='ghost' icon={<DeleteIcon />} />
          </CTooltip>
        </SimpleGrid>

      </Stack>
      <FormModal isOpen={isOpen} onClose={handleIsOpen}>
        <MyAtletaRegistrosEspeciales data={registrosEspeciales} />
      </FormModal>
    </>
  )
}

export const MyAtletaRegistrosEspeciales = ({ data }) => {
  return (
    <Stack p={8} bg='white' w='100%' h='100%' rounded='10px'>
      <Heading fontSize='2xl' fontWeight='800' textAlign='center'>Registros Especiales</Heading>
      <Divider />
      <Stack>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={5}>
          {data && data.length > 0 && data.map((item, index) => (
            <div key={index}>

              <List spacing={2}>
                <ListItem bg='gray.100' rounded='lg' px='2' py='2' display='flex' justifyContent=''>
                  <Text w='50%' textAlign='justify'>Fecha:</Text>
                  <Text w='50%' textAlign='justify'>{item.fecha_evento}</Text>
                </ListItem>
                <ListItem bg='gray.200' rounded='lg' px='2' py='2' display='flex' justifyContent=''>
                  <Text w='50%' textAlign='justify'>Descripción:</Text>
                  <Text w='50%' textAlign='justify'>{item.descripcion}</Text>
                </ListItem>
              </List>
              <Divider p={1} />
            </div>
          ))}
        </SimpleGrid>
        <CTooltip label='Añadir nuevo registro' aria-label='A tooltip'>
          <IconButton w='25%' variant='ghost' icon={<AddIcon />} />
        </CTooltip>
      </Stack>
    </Stack>
  )
}

export const MyAtletaEstadisticas = ({ data }) => {
  const { hitting, running } = useEstadisticas({ data })
  return (
    <Stack boxShadow='xl' p={8} bg='white' w='100%' h='100%' rounded='10px'>
      <Heading fontSize='2xl' fontWeight='800' alignItems='center'>Información relevante</Heading>
      <Divider />
      <Stack spacing={5} p={5} pb={0}>
        <Heading fontWeight='800' fontSize='md'>Estadísticas</Heading>
        <DropDown title='Progreso de tiempo en Sesenta Yardas'>
          <Box bg='white'>
            {data
              ? <LineChart stats={data.running} param='velocidad_sesenta' title='Progreso del tiempo de 60 yardas' index='Tiempo en segundos' />
              : <Text>No hay datos</Text>}
          </Box>
        </DropDown>
        <DropDown title='Progreso de velocidad de bateos'>
          <Box bg='white'>
            {data
              ? <LineChartHitting stats={data.hitting} param='bat_speed' title='Progreso de la velocidad del bate en Millas Por Hora' index='MPH' />
              : <Text>No hay datos</Text>}
          </Box>
        </DropDown>
      </Stack>
      <Stack spacing={5} p={5}>
        <Heading fontWeight='800' fontSize='md'>Especificaciones deportivas</Heading>
        <Divider />
        {/* ES ESTA */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          {/* hitting posee los siguientes atributos: bat_speed, angle_attack, rec_pitcheos, ruta_del_bate */}
          <List textAlign='left' spacing={2}>
            <ListItem><Heading fontSize='sm'>Estadisticas de bateo</Heading></ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Velocidad del bate:</Text>
              <Text>{hitting.value ? `${hitting.value.bat_speed} MPH` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Angulo de ataque:</Text>
              <Text>{hitting.value ? `${hitting.value.angle_attack} °` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Reconocimiento de pitcheos:</Text>
              <Text>{hitting.value ? `${hitting.value.rec_pitcheos}/10` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Ruta del bate:</Text>
              <Text>{hitting.value ? `${hitting.value.ruta_del_bate}/10` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Ver más</Text>
              <Button variant='link' colorScheme='blue'>...</Button>
            </ListItem>
          </List>

          {/* Running posee los siguientes atributos:  velocidad_sesenta, velocidad_home_to_first */}
          <List spacing={2}>
            <ListItem><Heading fontSize='sm'>Estadisticas de running</Heading></ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Velocidad en 60 yardas:</Text>
              <Text>{running.value ? `${running.value.velocidad_sesenta} s` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Velocidad de home a primera:</Text>
              <Text>{running.value ? `${running.value.velocidad_home_to_first} s` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Ver más</Text>
              <Button variant='link' colorScheme='blue'>...</Button>
            </ListItem>
          </List>

        </SimpleGrid>
      </Stack>

    </Stack>

  )
}

export const MyAtletaMedidasAntropometricas = ({ data }) => {
  const { datosGenerales, perimetros, icc, imc } = useAntropometria({ data })
  console.log('datos Generales: ', datosGenerales)
  // console.log('perimetros: ', perimetros)
  // console.log('icc: ', icc)
  // console.log('imc: ', imc)

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
                <Link to={`/private/fichas/ficha/${datosGenerales.id_ficha}`} style={{ textDecoration: 'none' }}>
                  <Button variant='link' colorScheme='blue'>...</Button>
                </Link>
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
                <Link to={`/private/fichas/ficha/${datosGenerales.id_ficha}`} style={{ textDecoration: 'none' }}>
                  <Button variant='link' colorScheme='blue'>...</Button>
                </Link>
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
                <Link to={`/private/fichas/ficha/${datosGenerales.id_ficha}`} style={{ textDecoration: 'none' }}>
                  <Button variant='link' colorScheme='blue'>...</Button>
                </Link>
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
                <Link to={`/private/fichas/ficha/${datosGenerales.id_ficha}`} style={{ textDecoration: 'none' }}>
                  <Button variant='link' colorScheme='blue'>...</Button>
                </Link>
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
  const { data, options, setData } = useLineChart(stats, param, title, index)
  const [counter, setCounter] = useState(0)
  const [lastDay, setLastDay] = useState(90)
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

  const handleAddData = async () => {
    if (counter === 0) {
      const response = await runningPrediction(stats.id, lastDay)
      const { prediction, estimatedYforX, date } = response
      setLastDay(lastDay + 90)
      const newDataSet = {
        label: 'proyeccion del tiempo en 60 yardas',
        data: data.datasets[0].data.map((item, index) => {
          return index > data.datasets[0].data.length - 2 ? item : NaN
        }),
        fill: true,
        borderColor: 'rgb(249, 67, 97)',
        tension: 0.1
      }
      newDataSet.data.push(prediction)
      console.log('newDataSet', newDataSet)
      data.labels.push(date)
      setData({
        ...data,
        datasets: data.datasets.concat(newDataSet)
      })
      ChartJS.getChart('Line').update()
      setCounter(counter + 1)
      // data.labels.push(date)
      // data.datasets[0].data.push(prediction)
      // ChartJS.getChart('Line').update()
      // setCounter(counter + 1)
    } else {
      const response = await runningPrediction(stats.id, lastDay)
      const { prediction, estimatedYforX, date } = response
      setLastDay(lastDay + 90)
      data.labels.push(date)
      data.datasets[1].data.push(prediction)
      ChartJS.getChart('Line').update()
      setCounter(counter + 1)
    }
  }
  return (
    <Stack>
      {data ? <Line id='Line' data={data} options={options} /> : <Text>No hay datos</Text>}
      <Button onClick={handleAddData}>Agregar datos</Button>
    </Stack>
  )
}

export const LineChartHitting = ({ stats, param, title, index }) => {
  const { data, options, setData } = useLineChart(stats, param, title, index)
  const [counter, setCounter] = useState(0)
  const [lastDay, setLastDay] = useState(90)
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

  const handleAddData = async () => {
    if (counter === 0) {
      const response = await hittingPrediction(stats.id, lastDay)
      const { prediction, estimatedYforX, date } = response
      setLastDay(lastDay + 90)
      const newDataSet = {
        label: 'proyeccion de la velocidad del bate',
        data: data.datasets[0].data.map((item, index) => {
          return index > data.datasets[0].data.length - 2 ? item : NaN
        }),
        fill: true,
        borderColor: 'rgb(249, 67, 97)',
        tension: 0.1
      }
      newDataSet.data.push(prediction)
      console.log('newDataSet', newDataSet)
      data.labels.push(date)
      setData({
        ...data,
        datasets: data.datasets.concat(newDataSet)
      })
      ChartJS.getChart('Line').update()
      setCounter(counter + 1)
      // data.labels.push(date)
      // data.datasets[0].data.push(prediction)
      // ChartJS.getChart('Line').update()
      // setCounter(counter + 1)
    } else {
      const response = await hittingPrediction(stats.id, lastDay)
      const { prediction, estimatedYforX, date } = response
      setLastDay(lastDay + 90)
      data.labels.push(date)
      data.datasets[1].data.push(prediction)
      ChartJS.getChart('Line').update()
      setCounter(counter + 1)
    }
  }
  return (
    <Stack>
      {data ? <Line id='Line' data={data} options={options} /> : <Text>No hay datos</Text>}
      <Button onClick={handleAddData}>Agregar datos</Button>
    </Stack>
  )
}
