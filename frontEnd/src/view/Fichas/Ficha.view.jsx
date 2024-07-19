/* eslint-disable camelcase */
import { Stack, VStack, Divider, Heading, List, ListItem, Text, SimpleGrid, Box, Image } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useFichaData } from '../../hooks/view/useFichaData.js'
// import MyTableFicha from '../../components/MyTableFicha.jsx'

const FichaView = () => {
  const { id_ficha } = useParams()
  const { data, espalda, frontal, perfil } = useFichaData({ id: id_ficha })

  console.log(data)

  return (
    <>
      {data &&

        <Stack direction='row' gap='1%'>
          <Stack boxShadow='xl' bg='white' rounded='15px' p={10} align='center' w='65%'>
            {data.datosFicha ? <MyFichaDatos data={data.datosFicha} /> : <Text>No hay datos</Text>}
            {data.perfiles ? <MyPerfilesFotograficos espalda={espalda} frontal={frontal} perfil={perfil} /> : <Text>No hay perfiles fotográficos</Text>}
          </Stack>
          <VStack rounded='10px' w='100%' h='100%' gap={4}>
            <Stack boxShadow='xl' bg='white' w='100%' h='33%' rounded='10px'>
              {data.datosGenerales ? <MyFichaDatosGenerales data={data.datosGenerales} /> : <Text>No hay datos generales</Text>}
            </Stack>
            <Stack boxShadow='xl' bg='white' w='100%' h='33%' rounded='10px'>
              {data.perimetros ? <MyFichaPerimetros data={data.perimetros} /> : <Text>No hay perimetros corporales</Text>}
            </Stack>
            <Stack boxShadow='xl' bg='white' w='100%' h='33%' rounded='10px'>
              {data.imc && data.icc ? <MyFichaImcIcc imc={data.imc} icc={data.icc} /> : <Text>No hay IMC o ICC</Text>}
            </Stack>

          </VStack>
        </Stack>}
    </>
  )
}

const MyFichaDatos = ({ data }) => {
  return (
    <>
      <Heading fontSize='2xl' fontWeight='800'>Datos del Atleta</Heading>
      <Divider />
      <Stack p={4} w='100%' alignItems='center'>
        <Text fontWeight='800' fontSize='3xl'>{data.nombre}</Text>
        <Text as='i' fontSize='lg'>{data.posicion}</Text>
        <Box mb={2} bg='gray.100' p={2} rounded='xl' w='100%' h='100%'>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
            <List textAlign='right' spacing={2}>
              <ListItem display='flex' gap='5'>
                <Text w='50%'>Cédula</Text>
                <Text>{data.id_atleta}</Text>
              </ListItem>
              <ListItem display='flex' gap='5'>
                <Text w='50%'>Clase</Text>
                <Text>{data.clase}</Text>
              </ListItem>
              <ListItem display='flex' gap='5'>
                <Text w='50%'>Fecha de evaluacion</Text>
                <Text>{data.fecha}</Text>
              </ListItem>
            </List>
          </SimpleGrid>
        </Box>
        <Divider />
      </Stack>
    </>
  )
}

const MyFichaDatosGenerales = ({ data }) => {
  return (
    <Stack boxShadow='xl' p={8} rounded='10px'>
      <Heading fontSize='2xl' fontWeight='800' alignItems='center'>Datos Generales</Heading>
      <Divider />
      <Stack spacing={5} p={5}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <List textAlign='right' spacing={2}>
            <ListItem textAlign='center'><Heading fontSize='lg'>Métricas de masa corporal</Heading></ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Peso corporal</Text>
              <Text>{data.peso_corporal}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Peso ideal</Text>
              <Text>{data.peso_ideal}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>IMC</Text>
              <Text>{data.imc}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>IMC ideal</Text>
              <Text>{data.imc_ideal}</Text>
            </ListItem>
          </List>

          <List textAlign='right' spacing={2}>
            <ListItem textAlign='center'><Heading fontSize='lg'>Valores nutricionales</Heading></ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Percentil de peso</Text>
              <Text>{data.percentil_de_peso}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Calorías necesarias</Text>
              <Text>{data.calorias_necesarias}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Tasa metabólica basal</Text>
              <Text>{data.tasa_metabolica_basal}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Calorías diarias</Text>
              <Text>{data.calorias_diarias}</Text>
            </ListItem>
          </List>

          <List textAlign='right' spacing={2}>
            <ListItem textAlign='center'><Heading fontSize='lg'>Métricas corporales</Heading></ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Percentil de talla</Text>
              <Text>{data.percentil_talla}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Envergadura</Text>
              <Text>{data.envergadura}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Estatura máxima</Text>
              <Text>{data.estatura_maxima}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Longitud de pie</Text>
              <Text>{data.longitud_de_pie}</Text>
            </ListItem>
          </List>

          {/* <List textAlign='right' spacing={2}>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Longitud sentado</Text>
              <Text>{data.longitud_sentado}</Text>
            </ListItem>
          </List> */}
        </SimpleGrid>
      </Stack>

    </Stack>
  )
}

const MyFichaPerimetros = ({ data }) => {
  return (
    <Stack boxShadow='xl' p={8} rounded='10px'>
      <Heading fontSize='2xl' fontWeight='800' alignItems='center'>Perímetros Corporales</Heading>
      <Divider />
      <Stack spacing={5} p={5}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

          <List textAlign='right' spacing={2}>
            <ListItem textAlign='center'><Heading fontSize='lg'>Medidas del tren superior</Heading></ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Cabeza</Text>
              <Text>{data.cabeza}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Cuello</Text>
              <Text>{data.cuello}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Tórax</Text>
              <Text>{data.torax}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Espalda</Text>
              <Text>{data.espalda}</Text>
            </ListItem>
          </List>

          <List textAlign='right' spacing={2}>
            <ListItem textAlign='center'><Heading fontSize='lg'>Medidas de los brazos</Heading></ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Brazo contraído</Text>
              <Text>{data.brazo_contraido}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Brazo relajado</Text>
              <Text>{data.brazo_relajado}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Antebrazo</Text>
              <Text>{data.antebrazo}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Muñeca</Text>
              <Text>{data.muneca}</Text>
            </ListItem>
          </List>

          <List textAlign='right' spacing={2}>
            <ListItem textAlign='center'><Heading fontSize='lg'>Medidas del tren inferior</Heading></ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Pierna</Text>
              <Text>{data.pierna}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Muslo superior</Text>
              <Text>{data.muslo_superior}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Muslo medio</Text>
              <Text>{data.muslo_medio}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Tobillo</Text>
              <Text>{data.tobillo}</Text>
            </ListItem>
          </List>

        </SimpleGrid>
      </Stack>

    </Stack>
  )
}

const MyFichaImcIcc = ({ imc, icc }) => {
  return (

    <Stack boxShadow='xl' p={8} w='100%' h='100%' rounded='10px'>
      <Heading fontSize='2xl' fontWeight='800' alignItems='center'>IMC e ICC</Heading>
      <Divider />
      <Stack spacing={5} p={5}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <List textAlign='right' spacing={2}>
            <ListItem textAlign='center'><Heading fontSize='lg'>Índice de Masa Corporal</Heading></ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Masa grasa corporal</Text>
              <Text>{imc.masa_grasa_corporal}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Masa grasa ideal</Text>
              <Text>{imc.masa_grasa_ideal}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Masa magra corporal</Text>
              <Text>{imc.masa_magra_corporal}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Masa magra ideal</Text>
              <Text>{imc.masa_magra_ideal}</Text>
            </ListItem>
          </List>

          <List textAlign='right' spacing={2}>
            <ListItem textAlign='center'><Heading fontSize='lg'>Índice de Cintura Cadera</Heading></ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Cintura</Text>
              <Text>{icc.cintura}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Cadera</Text>
              <Text>{icc.cadera}</Text>
            </ListItem>
            <ListItem display='flex' gap='5'>
              <Text w='60%'>Relación cintura cadera</Text>
              <Text>{icc.relacion_cintura_cadera}</Text>
            </ListItem>
          </List>
        </SimpleGrid>
      </Stack>

    </Stack>
  )
}

const MyPerfilesFotograficos = ({ frontal, perfil, espalda }) => {
  return (
    <Stack textAlign='center' p={8} w='100%' h='100%' rounded='10px'>
      <Heading fontSize='2xl' fontWeight='800' alignItems='center'>Perfiles Fotográficos</Heading>
      <Divider />
      <Stack spacing={5} p={5}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Heading fontSize='xl' fontWeight='800'>Frente</Heading>
            <Image src={frontal} alt='frontal' />
          </Box>
          <Box>
            <Heading fontSize='xl' fontWeight='800'>Perfil</Heading>
            <Image src={perfil} alt='perfil' />
          </Box>
          <Box>
            <Heading fontSize='xl' fontWeight='800'>Espalda</Heading>
            <Image src={espalda} alt='espalda' />
          </Box>
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

export default FichaView
