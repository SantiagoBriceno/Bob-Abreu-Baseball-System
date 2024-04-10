import { Box, Input, FormControl, FormLabel, Button, FormHelperText, Step, StepIndicator, StepSeparator, StepTitle, Stepper, useSteps, StepStatus, StepIcon, StepNumber, SimpleGrid, ButtonGroup, Flex, useToast, Select, Heading, Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { datosGeneralesLabel, datosGeneralesPlaceholders, perimetrosLabel, perimetrosPlaceholders, iccImcLabel, iccImcPlaceholders, perfilesFotograficosLabel } from '../constants/form/fields'
import { getAllAtletas } from '../service/atletas'
import { createFicha } from '../service/ficha'

const useMyFormFicha = () => {
  // Contiene la cedula del atleta
  const [atleta, setAtleta] = useState()
  const [options, setOptions] = useState([])
  const toast = useToast()

  useEffect(() => {
    getAllAtletas().then(data => {
      const opts = data.map(atleta => {
        return { value: atleta.cedula, label: atleta.nombre }
      })
      setOptions(opts)
    }
    )
  }, [])

  // Contiene los datos generales de la ficha Antropometrica
  const [datosGenerales, setDatosGenerales] = useState({
    estatura_maxima: '',
    percentil_talla: '',
    longitud_de_pie: '',
    longitud_sentado: '',
    envergadura: '',
    imc: '',
    imc_ideal: '',
    tasa_metabolica_basal: '',
    calorias_necesarias: '',
    percentil_de_peso: '',
    peso_ideal: '',
    peso_corporal: '',
    calorias_diarias: ''
  })

  // Contiene los perimetros corporales
  const [perimetros, setPerimetros] = useState({
    cabeza: '',
    cuello: '',
    brazo_relajado: '',
    brazo_contraido: '',
    antebrazo: '',
    muneca: '',
    torax: '',
    espalda: '',
    muslo_superior: '',
    muslo_medio: '',
    pierna: '',
    tobillo: ''
  })

  const [iccImc, setIccImc] = useState({
    cintura: '',
    cadera: '',
    relacion_cintura_cadera: '',
    masa_grasa_corporal: '',
    masa_grasa_ideal: '',
    masa_magra_corporal: '',
    masa_magra_ideal: ''
  })

  // Contiene los archivos de los perfiles fotograficos
  const [perfilesFotograficos, setPerfilesFotograficos] = useState({
    frente: '',
    perfil: '',
    posterior: ''
  })

  // funcion de cambio de atleta en un input select
  const handleChangeAtleta = (e) => {
    setAtleta(e.target.value)
  }

  const handleChangeDatosGenerales = (e) => {
    setDatosGenerales({
      ...datosGenerales,
      [e.target.id]: e.target.value
    })
  }

  const handleChangePerimetros = (e) => {
    setPerimetros({
      ...perimetros,
      [e.target.id]: e.target.value
    })
  }

  const handleChangeIccImc = (e) => {
    setIccImc({
      ...iccImc,
      [e.target.id]: e.target.value
    })
  }

  const handleChangePerfilesFotograficos = (e) => {
    const file = e.target.files[0]
    setPerfilesFotograficos({
      ...perfilesFotograficos,
      [e.target.id]: file
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFormData = new FormData()
    console.log('atleta', atleta + '')
    console.log('datosGenerales', datosGenerales)
    console.log('perimetros', perimetros)
    console.log('iccImc', iccImc)
    console.log('perfilesFotograficos', perfilesFotograficos)

    newFormData.append('cedula', atleta)

    Object.keys(datosGenerales).forEach((key) => {
      newFormData.append(key, datosGenerales[key])
    })
    Object.keys(perimetros).forEach((key) => {
      newFormData.append(key, perimetros[key])
    })
    Object.keys(iccImc).forEach((key) => {
      newFormData.append(key, iccImc[key])
    })
    Object.keys(perfilesFotograficos).forEach((key) => {
      newFormData.append(key, perfilesFotograficos[key])
    })
    newFormData.append('cedula', atleta)
    console.log('form data', newFormData)
    createFicha(newFormData).then((response) => {
    })

    toast({
      title: 'Ficha antropometrica creada satisfactoriamente',
      description: 'Nuevo registro de ficha antropometrica creado con exito',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  return { atleta, datosGenerales, perimetros, iccImc, handleChangeAtleta, handleChangeDatosGenerales, handleChangePerimetros, handleChangeIccImc, handleSubmit, options, perfilesFotograficos, handleChangePerfilesFotograficos }
}

const MyFormFicha = () => {
  const { handleSubmit, options, datosGenerales, perimetros, iccImc, handleChangeIccImc, handleChangeAtleta, handleChangeDatosGenerales, handleChangePerimetros, handleChangePerfilesFotograficos, perfilesFotograficos } = useMyFormFicha()

  const contents = [<MyInputs key={1} controller={datosGenerales} placeholders={datosGeneralesPlaceholders} labels={datosGeneralesLabel} setController={handleChangeDatosGenerales} title='Datos Generales' />, <MyInputs key={2} placeholders={perimetrosPlaceholders} labels={perimetrosLabel} controller={perimetros} setController={handleChangePerimetros} title='Perimetros Corporales' />, <MyInputs key={3} controller={iccImc} placeholders={iccImcPlaceholders} labels={iccImcLabel} setController={handleChangeIccImc} title='ICC y IMC' />, <MyInputsPerfiles key={5} labels={perfilesFotograficosLabel} controller={perfilesFotograficos} setController={handleChangePerfilesFotograficos} title='Perfiles Fotograficos' />]
  return (

    <form encType='multipart/form-data' onSubmit={handleSubmit}>
      <Flex justifyContent='center' alignItems='center' p={4}>
        <FormControl boxShadow='md' bg='white' rounded='lg' p={4} w='20%'>
          <FormLabel>Atleta</FormLabel>
          <Select id='cedula' placeholder='Selecciona un atleta' onChange={handleChangeAtleta}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}

          </Select>
          <FormHelperText>Nombre del atleta</FormHelperText>
        </FormControl>
      </Flex>
      <Box w='100%' h='100%'>
        {contents ? <Multistep data={contents} /> : <p>No hay datos</p>}
      </Box>
    </form>

  )
}

const MyInputs = ({ controller, setController, labels, placeholders, title }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Divider mt={2} mb={2} />
      <SimpleGrid columns={3} spacing={4}>
        {Object.keys(controller).map((key, index) => (
          <FormControl key={index}>
            <FormLabel>{labels[index]}</FormLabel>
            <Input id={key} value={controller[key]} placeholder={placeholders[index]} onChange={setController} />
          </FormControl>
        ))}
      </SimpleGrid>
    </>
  )
}

const MyInputsPerfiles = ({ controller, setController, labels, title }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Divider mt={2} mb={2} />
      <SimpleGrid columns={3} spacing={4}>
        {Object.keys(controller).map((key, index) => (
          <FormControl key={index}>
            <FormLabel>{labels[index]}</FormLabel>
            <Input type='file' id={key} onChange={setController} />
          </FormControl>
        ))}
      </SimpleGrid>
    </>
  )
}

const Multistep = ({ data }) => {
  const steps = [
    {
      title: '1',
      description: 'Datos Generales del atleta'

    },
    {
      title: '2',
      description: 'Perímetros Corporales'
    },
    {
      title: '3',
      description: 'ICC y IMC'
    },
    {
      title: '4',
      description: 'Perfiles Fotográficos'
    }
  ]

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length
  })

  const [step, setStep] = useState(0)

  return (
    <>
      <Box
        borderWidth='1px'
        rounded='lg'
        boxShadow='md'
        maxWidth={1000}
        minW={300}
        bg='white'
        p={6}
        m='10px auto'
      >
        <Stepper pb={8} index={activeStep}>
          {steps.map((step, index) => (
            <Step
              key={index} onClick={() => {
                setStep(index)
                setActiveStep(index)
              }}
            >
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink='0'>
                <StepTitle>{step.description}</StepTitle>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        {data[activeStep]}
        <ButtonGroup mt='5%' w='100%'>
          <Flex w='100%' justifyContent='space-between'>
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setActiveStep(step - 1)
                }}
                isDisabled={step === 0}
                colorScheme='teal'
                variant='solid'
                w='7rem'
                mr='5%'
              >
                Regresar
              </Button>
              <Button
                w='7rem'
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setActiveStep(3)
                  } else {
                    setActiveStep(step + 1)
                  }
                }}
                colorScheme='teal'
                variant='outline'
              >
                Siguiente
              </Button>
            </Flex>
            {step === 3
              ? (
                <Button
                  w='7rem'
                  colorScheme='red'
                  variant='solid'
                  type='submit'
                >
                  Guardar
                </Button>
                )
              : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}

export default MyFormFicha
