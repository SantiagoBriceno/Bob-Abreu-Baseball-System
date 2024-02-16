import {
  Heading, Stack, Box
} from '@chakra-ui/react'
import MyFormControl from './form/MyFormControl.jsx'
import MyInput from './form/MyInput.jsx'
import MySelect from './form/MySelect.jsx'
import MyFormTemplate from './form/MyFormTemplate.jsx'
import MyButton from './form/MyButton.jsx'

const MyForm = ({ fields, formData, actions, title, errorMessage }) => {
  return (
    <Box>
      <FormHeader title={title} />
      <MyFormTemplate>
        <FormContent fields={fields} formData={formData} actions={actions} errorMessage={errorMessage} />
        <FormFooter actions={actions} />
      </MyFormTemplate>
    </Box>
  )
}

export default MyForm

const FormContent = ({ fields, formData, actions, errorMessage }) => {
  console.log(errorMessage)
  return (
    <>
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
    </>
  )
}

const FormHeader = ({ title }) => {
  return (
    <>
      <Heading textAlign='center' w='100%' m='5% 0'>
        {title}
      </Heading>
    </>

  )
}

const FormFooter = ({ actions }) => {
  return (
    <MyButton
      w='25%' mt={10} onClick={actions.handleSubmit} color='white' bg='principales.terciary' _hover={{
        background: 'principales.cuaternary'
      }} label='Enviar'
    />
  )
}
