import {
  Heading, Stack, Text
} from '@chakra-ui/react'
import MyFormControl from './form/MyFormControl.jsx'
import MyInput from './form/MyInput.jsx'
import MySelect from './form/MySelect.jsx'
import MyFormTemplate from './form/MyFormTemplate.jsx'
import MyButton from './form/MyButton.jsx'
import MyTextArea from './form/MyTextArea.jsx'

const MyForm = ({ fields, formData, actions, title, errorMessage, encType = false }) => {
  return (
    <form id='form' encType={encType ? 'multipart/form-data' : null} onSubmit={actions.handleSubmit}>
      <FormHeader title={title} />
      <MyFormTemplate>
        <FormContent fields={fields} formData={formData} actions={actions} errorMessage={errorMessage} />
        <FormFooter encType={encType} actions={actions} />
      </MyFormTemplate>
    </form>
  )
}

export default MyForm

const FormContent = ({ fields, formData, actions, errorMessage }) => {
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
                <MyFormControl key={index} label={c.label} helperText={errorMessage[c.id]}>
                  {c.type === 'select'
                    ? <MySelect
                        opt={c.opt}
                        id={c.id}
                        onChange={actions.handleChange}
                        value={formData[c.id]}
                        placeholder={c.placeholder}
                      />
                    : (c.type === 'textarea'
                        ? <MyTextArea
                            name={c.name}
                            type={c.type}
                            required={c.required}
                            placeholder={c.placeholder}
                            id={c.id}
                            onChange={actions.handleChange}
                            value={formData[c.id]}
                            onBlur={actions.handleBlur}
                          />
                        : (c.type === 'date'
                            ? (
                              <>
                                <MyInput
                                  name={c.name}
                                  type={c.type}
                                  required={c.required}
                                  placeholder={c.placeholder}
                                  id={c.id}
                                  onChange={actions.handleChange}
                                  value={formData[c.id]}
                                  onBlur={actions.handleBlur}
                                />
                                <Text fontSize='xs' color='gray.500'>Fecha: {c.placeholder}</Text>
                              </>)
                            : <MyInput
                                name={c.name}
                                type={c.type}
                                required={c.required}
                                placeholder={c.placeholder}
                                id={c.id}
                                onChange={actions.handleChange}
                                value={c.type === 'file' ? null : formData[c.id]}
                                onBlur={actions.handleBlur}
                                disabled={c.disabled}
                              />))}
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
      <Heading fontWeight='extrabold' textAlign='center' w='100%' m='5% 0'>
        {!title ? 'REGISTRO DE ATLETA' : title}
      </Heading>
    </>

  )
}

const FormFooter = ({ actions, encType = false }) => {
  return (
    <>
      {!encType
        ? (
          <MyButton
            w='25%'
            mt={10}
            onClick={actions.handleSubmit}
            color='white'
            bg='principales.terciary'
            _hover={{
              background: 'principales.cuaternary'
            }} label='Guardar'
          />
          )
        : (
          <MyButton
            w='25%'
            type='submit'
            mt={10}
            color='white'
            bg='principales.terciary'
            _hover={{
              background: 'principales.cuaternary'
            }} label='Guardar'
          />

          )}
    </>
  )
}

// <MyButton
//   w='25%'
//   mt={10}
//   onClick={actions.handleSubmit}
//   color='white'
//   bg='principales.terciary'
//   _hover={{
//     background: 'principales.cuaternary'
//   }} label='Enviar'
// />
