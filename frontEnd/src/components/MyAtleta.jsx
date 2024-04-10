import { HStack, Stack, Box, Text, Heading, useDisclosure, Collapse, IconButton, Tooltip as CTooltip, Image, Divider, SimpleGrid, List, ListItem, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogBody, AlertDialogFooter, AlertDialogHeader } from '@chakra-ui/react'
import { AddIcon, ChevronDownIcon, ChevronUpIcon, DownloadIcon, DeleteIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useLineChart } from '../hooks/charts/useLineChart'
import { runningPrediction } from '../service/running.prediction'
import { hittingPrediction } from '../service/hitting.prediction'
import { useAntropometria } from '../hooks/useMedidasAntropometricas'
import { useEstadisticas } from '../hooks/useEstadisticas'
import { useState, useEffect, useRef } from 'react'
import FormModal from './modals/FormModal'
import { Link } from 'react-router-dom'
import { useMyFormHook } from '../hooks/form/useMyFormHook'
import MyForm from './MyForm'
import { updateAtleta, getAtletaByIdReport, deleteAtleta } from '../service/atletas.js'
import { createFielding } from '../service/fielding.js'
import { createHitting } from '../service/hitting.js'
import { createRunning } from '../service/running.js'
import { createThrowing } from '../service/throwing.js'
import { atletaEditFields, hittingFields, fieldingFields, throwingFields, runningFields } from '../constants/form/fields.js'
import { hittingColumns, runningColumns, throwingColumns, fieldingColumns } from './myAtletaUtils.js'
import { representanteValidation, hittingValidation, fieldingValidation, throwingValidation, runningValidation } from '../constants/dataValidation.js'
import { validationInputAtleta, validationInputFielding, validationInputHitting, validationInputRunning, validationInputThrowing } from '../constants/validationInputs.js'
import { generateDD } from '../constants/pdfMakeTemplate.js'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { hitting as fhitting, throwing as fthrowing, running as frunning, fielding as ffielding } from '../../../backEnd/src/utils/entities/main.js'

const FormRegister = ({ fields, entity, validationMethods, validationInputs, onSubmitMethod, title, atleta }) => {
  console.log('atleta: ', atleta)
  console.log('fields: ', fields)
  console.log('entity: ', entity)

  fields[0].campos[0][0].type = 'text'
  fields[0].campos[0][0].placeholder = atleta.nombre
  fields[0].campos[0][0].disabled = true

  const { actions, errorState, formData } = useMyFormHook(entity, validationMethods, validationInputs, onSubmitMethod, false)
  formData.id_atleta = atleta.cedula
  return (
    <MyForm fields={fields} title={title} formData={formData} actions={actions} errorMessage={errorState} />
  )
}

export const MyAtletaDatos = ({ data = [''], img, registrosEspeciales }) => {
  const [isOpenRegistroEspecial, setisOpen] = useState(false)
  const [isOpenEditAtleta, setIsOpenEditAtleta] = useState(false)
  const [generateReport, setGenerateReport] = useState(false)
  const [reportData, setReportData] = useState()
  const handleisOpen = () => {
    setisOpen(!isOpenRegistroEspecial)
  }
  const handleIsOpenEditAtleta = () => {
    setIsOpenEditAtleta(!isOpenEditAtleta)
  }

  const generatePDF = () => {
    getAtletaByIdReport(data[0].cedula)
      .then((data) => {
        setReportData(data)
      })
    setGenerateReport(!generateReport)
  }

  useEffect(() => {
    if (reportData && generateReport) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs
      console.log(generateDD({ athleteData: reportData }))
      pdfMake.createPdf(generateDD({ athleteData: reportData })).open()
      setGenerateReport(false)
    }
  }, [reportData])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const cancelRef = useRef()

  return (
    <>
      <Heading fontSize='2xl' fontWeight='800'>Datos del Atleta</Heading>

      <Divider />
      <Image src={img} alt='Imagen del atleta' borderRadius='full' w='60%' />

      <Stack p={4} w='100%' h='65%' alignItems='center'>
        <Text fontWeight='800' fontSize='3xl' textAlign='center'>{data[0].nombre}</Text>
        <Text as='i' fontSize='lg'>{data[0].posicion}</Text>
        <Divider />
        <Heading fontSize='lg' fontWeight='700'>Datos Generales</Heading>
        <Box mb={2} bg='gray.100' p={2} rounded='xl' w='100%' h='100%'>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
            <List textAlign='right' spacing={2}>
              <ListItem display='flex' gap='5'>
                <Text w='50%'>Cédula</Text>
                <Text textAlign='left'>{data[0].cedula}</Text>
              </ListItem>
              <ListItem display='flex' gap='5'>
                <Text w='50%'>Fecha de Nacimiento</Text>
                <Text textAlign='left'>{data[0].fecha_nacimiento}</Text>
              </ListItem>
              <ListItem display='flex' gap='5'>
                <Text w='50%'>Clase</Text>
                <Text textAlign='left'>{data[0].clase}</Text>
              </ListItem>
              <ListItem display='flex' gap='5'>
                <Text w='50%'>Lugar de Nacimiento</Text>
                <Text textAlign='left'>{data[0].lugar_nacimiento}</Text>
              </ListItem>
            </List>
          </SimpleGrid>
        </Box>
        <Divider />
        <Heading fontSize='md' fontWeight='700'>Datos Deportivos</Heading>

        <Box mb={2} bg='gray.100' p={2} rounded='xl' w='100%' h='fit-content'>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <List textAlign='right' spacing={2}>
              <ListItem>Posición</ListItem>
              <ListItem>Estado</ListItem>
              <ListItem>Perfil</ListItem>
            </List>
            <List spacing={2}>
              <ListItem>{data[0].posicion}</ListItem>
              <ListItem>{data[0].estado}</ListItem>
              <ListItem>{data[0].hitting}</ListItem>
            </List>
          </SimpleGrid>
        </Box>
        <Divider />
        {/* <Heading fontSize='md' fontWeight='700'>Perfiles Fotográficos</Heading>
        <Box mb={2} bg='gray.100' p={2} rounded='xl' w='100%' h='fit-content'>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Button variant='link' colorScheme='blue'>Perfiles</Button>
            <Button variant='link' colorScheme='blue'>...</Button>
          </SimpleGrid>
        </Box> */}

        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>

          {registrosEspeciales && registrosEspeciales.length > 0
            ? (
              <CTooltip hasArrow label='Registros especiales' aria-label='A tooltip'>
                <IconButton onClick={handleisOpen} variant='ghost' icon={<HamburgerIcon />} />
              </CTooltip>)
            : null}

          <CTooltip hasArrow label='Editar datos del atleta' aria-label='A tooltip'>
            <IconButton onClick={handleIsOpenEditAtleta} variant='ghost' icon={<EditIcon />} />
          </CTooltip>

          {data &&
            <>
              <CTooltip hasArrow label='borrar Atleta' aria-label='A tooltip'>
                <IconButton onClick={onOpen} variant='ghost' icon={<DeleteIcon />} />

              </CTooltip>
              <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                      Borrar Atleta
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      ¿Está seguro de que desea borrar este atleta?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Button onClick={onClose}>Cancelar</Button>
                      <Button
                        ml={3}
                        ref={cancelRef}
                        colorScheme='red' onClick={() => {
                          deleteAtleta(data[0].cedula)
                          onClose()
                          window.location.href = '/private/atletas'
                        }}
                      >Borrar
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </>}
          {data &&
            <CTooltip hasArrow label='Generar reporte' aria-label='A tooltip'>
              <IconButton
                onClick={() => {
                  generatePDF()
                }} variant='ghost' icon={<DownloadIcon />}
              />
            </CTooltip>}
        </SimpleGrid>

      </Stack>
      <FormModal isOpen={isOpenRegistroEspecial} onClose={handleisOpen}>
        <MyAtletaRegistrosEspeciales data={registrosEspeciales} />
      </FormModal>
      <FormModal isOpen={isOpenEditAtleta} onClose={handleIsOpenEditAtleta}>
        <EditForm data={data} />
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

export const MyAtletaEstadisticas = ({ data, nombre }) => {
  console.log('desde stats,', data)
  const { hitting, running, throwing, fielding, handleOpenFielding, handleOpenHitting, handleOpenRunning, handleOpenThrowing, openFielding, openHitting, openRunning, openThrowing } = useEstadisticas({ data })
  const [isOpen, setIsOpen] = useState(false)
  const [registerForm, setRegister] = useState()
  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Stack boxShadow='xl' p={8} bg='white' w='100%' h='100%' rounded='10px'>
      <Heading fontSize='2xl' fontWeight='800' alignItems='center'>Información Relevante</Heading>
      <Divider />
      <Stack spacing={5} p={5} pb={0}>
        <Heading fontWeight='800' fontSize='md'>Estadísticas</Heading>
        <DropDown title='Progreso de tiempo en Sesenta Yardas' descripcion='Representa los registros de la estadistica de Running en Sesenta Yardas, aquí se podrá realizar una predicción en intervalos de 30 días para ver el rendimiento estimado del atleta'>
          <Box bg='white'>
            {data
              ? <LineChart stats={data.running} param='velocidad_sesenta' title='Progreso del tiempo de 60 yardas' index='Tiempo en segundos' />
              : <Text>No hay datos</Text>}
          </Box>
        </DropDown>
        <DropDown title='Progreso de velocidad de bateos' descripcion='Representa los registros de la estadística de bateo Bat Speed, aquí se podrá realizar una predicción en intervalos de 30 días para ver el rendimiento estimado del atleta en dicha estadística'>
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
            <ListItem><Heading fontSize='sm'>Estadísticas de bateo</Heading></ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Velocidad del bate:</Text>
              <Text>{hitting.value ? `${hitting.value.bat_speed} MPH` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Ángulo de ataque:</Text>
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
              <Button onClick={handleOpenHitting} variant='link' colorScheme='blue'>...</Button>
            </ListItem>
          </List>

          <FormModal isOpen={openHitting} onClose={handleOpenHitting}>
            <MostrarStats id={0} setOpenModal={handleOpenHitting} setRegister={setIsOpen} stats={hitting.value} rows={hittingColumns} setRegisterForm={setRegister}>
              <Heading fontSize='2xl' fontWeight='800' textAlign='center'>Hitting Stats</Heading>
            </MostrarStats>
          </FormModal>

          {/* Running posee los siguientes atributos:  velocidad_sesenta, velocidad_home_to_first */}
          <List spacing={2}>
            <ListItem><Heading fontSize='sm'>Estadísticas de running</Heading></ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Velocidad en 60 yardas:</Text>
              <Text>{running.value ? `${running.value.velocidad_sesenta} s` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Velocidad de home a primera:</Text>
              <Text w='35px'>{running.value ? `${running.value.velocidad_home_to_first} s` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Ver más</Text>
              <Button onClick={handleOpenRunning} variant='link' colorScheme='blue'>...</Button>
            </ListItem>
          </List>

          <FormModal isOpen={openRunning} onClose={handleOpenRunning}>
            <MostrarStats setRegisterForm={setRegister} id={1} stats={running.value} setOpenModal={handleOpenRunning} setRegister={setIsOpen} rows={runningColumns}>
              <Heading fontSize='2xl' fontWeight='800' textAlign='center'>Running Stats</Heading>
            </MostrarStats>
          </FormModal>

          {/* Throwing posee los siguientes atributos: lanzamiento_primera, lanzamiento_segunda, lanzamiento_tercera, lanzamiento_home, pop_time */}

          <List spacing={2}>
            <ListItem><Heading fontSize='sm'>Estadisticas de lanzamiento</Heading></ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Lanzamiento a primera:</Text>
              <Text>{throwing.value ? `${throwing.value.lanzamiento_primera} s` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Lanzamiento a segunda:</Text>
              <Text>{throwing.value ? `${throwing.value.lanzamiento_segunda} s` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Lanzamiento a tercera:</Text>
              <Text>{throwing.value ? `${throwing.value.lanzamiento_tercera} s` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Lanzamiento a home:</Text>
              <Text>{throwing.value ? `${throwing.value.lanzamiento_home} s` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Ver más</Text>
              <Button onClick={handleOpenThrowing} variant='link' colorScheme='blue'>...</Button>
            </ListItem>
          </List>

          <FormModal isOpen={openThrowing} onClose={handleOpenThrowing}>
            <MostrarStats setRegisterForm={setRegister} id={2} stats={throwing.value} rows={throwingColumns} setOpenModal={handleOpenThrowing} setRegister={setIsOpen}>
              <Heading fontSize='2xl' fontWeight='800' textAlign='center'>Throwing Stats</Heading>
            </MostrarStats>
          </FormModal>

          {/* Fielding poseee los siguientes atributos: getting_jump, alcance, manos_suaves, control_cuerpo, energia */}

          <List spacing={2}>
            <ListItem><Heading fontSize='sm'>Estadisticas de fielding</Heading></ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Getting Jump:</Text>
              <Text>{fielding.value ? `${fielding.value.getting_jump}/10` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Alcance:</Text>
              <Text>{fielding.value ? `${fielding.value.alcance}/10` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Manos suaves:</Text>
              <Text>{fielding.value ? `${fielding.value.manos_suaves}/10` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Control de cuerpo:</Text>
              <Text>{fielding.value ? `${fielding.value.control_cuerpo}/10` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Energia:</Text>
              <Text>{fielding.value ? `${fielding.value.energia}/10` : 'no data found'}</Text>
            </ListItem>
            <ListItem display='flex' justifyContent='space-between'>
              <Text>Ver más</Text>
              <Button onClick={handleOpenFielding} variant='link' colorScheme='blue'>...</Button>
            </ListItem>
          </List>
          <FormModal isOpen={openFielding} onClose={handleOpenFielding}>
            <MostrarStats setRegisterForm={setRegister} setOpenModal={handleOpenFielding} setRegister={setIsOpen} id={3} stats={fielding.value} rows={fieldingColumns}>
              <Heading fontSize='2xl' fontWeight='800' textAlign='center'>Fielding Stats</Heading>
            </MostrarStats>
          </FormModal>

          {/* MODAL PARA REGISTRAR LA STAT QUE SE LE DE CLICK */}

          {data &&
            <FormModal w='60%' isOpen={isOpen} onClose={handleIsOpen}>
              {registerForm === 0
                ? <FormRegister fields={hittingFields} entity={fhitting} validationMethods={hittingValidation} validationInputs={validationInputHitting} onSubmitMethod={createHitting} title='Registro de estadísticas de bateo' atleta={nombre} />
                : registerForm === 1
                  ? <FormRegister fields={runningFields} entity={frunning} validationMethods={runningValidation} validationInputs={validationInputRunning} onSubmitMethod={createRunning} title='Registro de estadísticas de running' atleta={nombre} />
                  : registerForm === 2
                    ? <FormRegister fields={throwingFields} entity={fthrowing} validationMethods={throwingValidation} validationInputs={validationInputThrowing} onSubmitMethod={createThrowing} title='Registro de estadísticas de lanzamiento' atleta={nombre} />
                    : registerForm === 3
                      ? <FormRegister fields={fieldingFields} entity={ffielding} validationMethods={fieldingValidation} validationInputs={validationInputFielding} onSubmitMethod={createFielding} title='Registro de estadísticas de fielding' atleta={nombre} />
                      : null}
            </FormModal>}

          {/* fielding
          <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
            <MyForm fields={fieldingFields} formData={formData} actions={actions} title='REGISTRO DE ESTADÍSITCAS DE BATEO' errorMessage={errorState} />
          </FormModal>

           Hitting
          <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
            <MyForm fields={hittingFields} formData={formData} actions={actions} title='REGISTRO DE ESTADÍSITCAS DE BATEO' errorMessage={errorState} />
          </FormModal>

           Running
          <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
            <MyForm fields={runningFields} formData={formData} actions={actions} title='REGISTRO DE ESTADÍSITCAS DE BATEO' errorMessage={errorState} />
          </FormModal>

          {/* Throwing

          <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
            <MyForm fields={throwingFields} formData={formData} actions={actions} title='REGISTRO DE ESTADÍSITCAS DE BATEO' errorMessage={errorState} />
          </FormModal> */}

        </SimpleGrid>
      </Stack>

    </Stack>

  )
}

const MostrarStats = ({ stats, rows, setRegister, children, setOpenModal, id, setRegisterForm }) => {
  console.log('stats: ', stats)
  console.log('rows: ', rows)
  const handleClick = (e) => {
    e.preventDefault()
    setRegisterForm(id)
    setOpenModal(false)
    setRegister(true)
  }
  return (
    <> {stats
      ? (
        <>
          <Stack p={8} bg='white' w='100%' h='100%' rounded='10px'>
            {children}
            <Divider />
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
              <List spacing={2}>
                {rows.map((item, index) => (
                  <ListItem key={index} display='flex' justifyContent='space-between'>
                    <Text>{item.name}</Text>
                    <Text>{stats[item.key] ? stats[item.key] : 'no data found'}</Text>
                  </ListItem>
                ))}
              </List>
            </SimpleGrid>
            <Button id={id} onClick={handleClick}>Nuevo Registro</Button>
          </Stack>

        </>
        )
      : (
        <>
          {children}
          <Text>No hay datos</Text>
          <Button id={id} onClick={handleClick}>Nuevo Registro</Button>
        </>
        )}

    </>
  )
}

export const MyAtletaMedidasAntropometricas = ({ data }) => {
  const { datosGenerales, perimetros, icc, imc } = useAntropometria({ data })
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

export const DropDown = ({ title, children, descripcion }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack bg='#dcdcdc' rounded='5px 5px 0 0'>
      <HStack>
        <CTooltip textAlign='justify' label={descripcion} aria-label='Abrir'>
          <Text ml={5} w='95%'>{title}</Text>
        </CTooltip>
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
        label: 'Proyección del tiempo en 60 yardas',
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
      {data
        ? (
          <Line id='Line' data={data} options={options} />
          )
        : <Text>No hay datos</Text>}
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
        label: 'Proyección de la velocidad del bate',
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

const EditForm = ({ data }) => {
  console.log('data desde editForm', data)
  const { actions, errorState, formData } = useMyFormHook({}, representanteValidation, validationInputAtleta, updateAtleta, false, data[0].cedula)
  return (
    <MyForm title='Editar atleta' fields={atletaEditFields(data[0])} formData={formData} actions={actions} errorMessage={errorState} />
  )
}
