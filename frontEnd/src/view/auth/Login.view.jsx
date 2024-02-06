// const LoginView = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <input type='text' placeholder='Username' />
//         <input type='password' placeholder='Password' />
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   )
// }

// export default LoginView
import { Stack } from '@chakra-ui/react'
import MyForm from '../../components/MyForm'
import { loginFields } from '../../constants/form/fields'
import { usuario } from '../../../../global.constants'
import { useMyFormHook } from '../../hooks/form/useMyFormHook'
import { loginValidation } from '../../constants/dataValidation'
import { validationInputLogin } from '../../constants/validationInputs'

const LoginView = () => {
  const { formData, actions, errorState } = useMyFormHook(usuario, loginValidation, validationInputLogin)

  return (
    <Stack spacing={8} align='center'>
      <MyForm fields={loginFields} formData={formData} actions={actions} title='Inicio de sesión' errorMessage={errorState} />
    </Stack>
  )
}

export default LoginView
