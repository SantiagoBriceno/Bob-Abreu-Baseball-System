import {
  Heading, VStack, Stack, StackDivider, Box, Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Button
} from '@chakra-ui/react'
import MyFormControl from './form/MyFormControl.jsx'
import MyInput from './form/MyInput.jsx'
import MySelect from './form/MySelect.jsx'
import MyFormTemplate from './form/MyFormTemplate.jsx'
import MyButton from './form/MyButton.jsx'

const MyForm = ({ fields, formData, actions, title, errorMessage }) => {
  return (
    <MyFormTemplate>
      <FormStepper />
      <FormHeader title={title} />
      <FormContent fields={fields} formData={formData} actions={actions} errorMessage={errorMessage} />
      <FormFooter actions={actions} />
    </MyFormTemplate>
  )
}

export default MyForm

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' }
]

const FormStepper = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length
  })

  return (
    <Stepper size='lg' index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} onClick={() => setActiveStep(index)}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}

const FormContent = ({ fields, formData, actions, errorMessage }) => {
  console.log(errorMessage)
  return (
    <VStack divider={<StackDivider borderColor='gray.200' />}>
      {fields.map((field, index) => (
        <Stack key={index}>
          <Heading size={2} textAlign='center'>
            {field.titulo}
          </Heading>
          {field.campos.map((campo, index) => (
            <Stack key={index} direction='row'>
              {campo.map((c, index) => (
                <MyFormControl key={index} label={c.label} helperText={errorMessage[c]}>

                  {c.type === 'select'
                    ? <MySelect
                        opt={c.opt}
                        id={c.id}
                        onChange={actions.handleChange}
                        value={formData[c.id]}
                      />
                    : <MyInput
                        name={c.name}
                        type={c.type}
                        required={c.required}
                        placeholder={c.placeholder}
                        id={c.id}
                        onChange={actions.handleChange}
                        value={formData[c.id]}
                        onBlur={actions.handleBlur}
                      />}
                </MyFormControl>
              ))}
            </Stack>
          ))}
        </Stack>
      ))}
    </VStack>
  )
}

const FormHeader = ({ title }) => {
  return (
    <Heading textAlign='center'>
      {title}
    </Heading>
  )
}

const FormFooter = ({ actions }) => {
  return (
    <MyButton ml='25%' w='50%' onClick={actions.handleSubmit} label='Click' />
  )
}
