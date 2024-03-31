import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
  Select
} from '@chakra-ui/react'
import Logo from '../../public/assets/BobLogo.png'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Link as ReactRouterLink } from 'react-router-dom'

import { useRegisterUser } from '../hooks/useRegisterUser'
import { useLoginUser } from '../hooks/useLoginUser'

export function RegisterCard () {
  const [showPassword, setShowPassword] = useState(false)
  const { handleChange, handleSubmit, user } = useRegisterUser()

  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl' textAlign='center'>
            Registrarse
          </Heading>
        </Stack>
        <Box
          rounded='lg'
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow='lg'
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id='firstName' isRequired>
                  <FormLabel>Nombre y Apellido</FormLabel>
                  <Input id='name' onChange={handleChange} value={user.name} type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='id' isRequired>
                  <FormLabel>Cedula</FormLabel>
                  <Input id='cedula' onChange={handleChange} value={user.cedula} type='text' />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id='username' isRequired>
              <FormLabel>Usuario</FormLabel>
              <Input type='text' id='username' onChange={handleChange} value={user.username} />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
                <Input id='password' value={user.password} onChange={handleChange} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h='full'>
                  <Button
                    variant='ghost'
                    onClick={() => setShowPassword((showPassword) => !showPassword)}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>\
            <FormControl id='rol' isRequired>
              <FormLabel>Rol</FormLabel>
              <Select onChange={handleChange} icon={<ChevronDownIcon fontSize='24px' />} placeholder='Selecciona un rol' id='rol'>
                <option value='administrativo'>Administrador</option>
                <option value='deportivo'>Deportivo</option>
                <option value='fisioterapeuta'>fisioterapeuta</option>
              </Select>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText='Submitting'
                size='lg'
                bg='blue.400'
                color='white'
                _hover={{
                  bg: 'blue.500'
                }}
                onClick={handleSubmit}
              >
                Registrarse
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align='center'>¿Ya eres usuario? <Link as={ReactRouterLink} to='/login' color='blue.400'>Iniciar sesión</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export function LoginCard () {
  const { username, password, handleChange, handleSubmit } = useLoginUser()

  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.50', 'gray.800')}
      rounded='lg'
    >
      <Stack spacing={8} py={4} h='fit-content' w='45%'>
        <Stack align='center'>
          <HStack
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow='lg'
            p={8}
            w='100%'
            roundedBottomRight='lg'
            roundedTopRight='lg'
          >
            <Box roundedBottomLeft='lg' roundedTopLeft='lg' w='100%' textAlign='center' alignContent='center' mr={20}>
              <Image margin='0 auto' src={Logo} alt='logo' />
              <Text as='b' fontSize='2xl' color='black'>Bienvenido a Bob Abreu System</Text>
            </Box>
            <Stack spacing={4} w='70%'>
              <Heading fontSize='3xl' mb={4}>Inicia sesión</Heading>
              <FormControl id='username'>
                <FormLabel>Usuario</FormLabel>
                <Input type='users' id='username' value={username} onChange={handleChange} />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Contraseña</FormLabel>
                <Input type='password' id='password' value={password} onChange={handleChange} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align='start'
                  justify='space-between'
                >
                  {/* <Text color='blue.400'>¿Se te olvidó la contraseña?</Text> */}
                </Stack>
                <Button
                  bg='blue.400'
                  color='white'
                  _hover={{
                    bg: 'blue.500'
                  }}
                  onClick={handleSubmit}
                >
                  Inicia sesión
                </Button>
              </Stack>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
    </Flex>
  )
}
