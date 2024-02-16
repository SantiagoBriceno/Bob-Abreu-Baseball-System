import { useState } from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Card,
  CardBody,
  TableCaption,
  TableContainer,
  Stack,
  Flex,
  Box,
  Spacer,
  ButtonGroup
} from '@chakra-ui/react'

import './css/table.css'
import MyInput2 from './form/MyInput2'

const MyTable = ({ data, columns, title, idRow, inventoryMode = false, children, setEditData, setDeleteData, action = true, modalMode = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleEdit = (e) => {
    const index = e.target.id.split('%')[1]
    console.log(index)
    for (let i = 0; i < data.length; i++) {
      console.log(data[i][idRow])
      if (data[i][idRow] + '' === index) {
        console.log(data[i])
        setEditData(data[i])
      }
    }
    setIsOpen(!isOpen)
  }

  const handleDelete = (e) => {
    const index = e.target.id.split('-')[1]
    setDeleteData(data[index])
  }

  return (
    <>
      <Flex minWidth='max-content' p='10px' w='90%' alignItems='center' gap='2'>
        <ButtonGroup gap='2'>
          <Button bg='#F24405'>Sign Up</Button>
          <Button bg='#F24405'>Log in</Button>
        </ButtonGroup>
        <Spacer />
        <Box p='1'>
          <MyInput2 placeholder='Cesar Pausin' label='Busque por el nombre' />
        </Box>
      </Flex>
      <Card w={modalMode ? '100%' : '90%'} bg='white' shadow={modalMode ? 'none' : 'lg'}>
        <CardBody>
          <TableContainer bg='background.border'>
            <Table variant='none' color='black' bg='background.border' size='sm'>
              <TableCaption>{title}</TableCaption>
              <Thead>
                <Tr>
                  {columns.map((column) => (
                    <Th textAlign='center' key={column.key}>{column.name}</Th>
                  ))}
                  {action && <Th textAlign='center'>Acciones</Th>}
                </Tr>
              </Thead>
              <Tbody>
                {data
                  ? data.map((row, i) => (
                    <Tr
                      className='table-row'
                      key={i + row[idRow]}
                    >
                      {columns.map((column) => (
                        <Td textAlign='center' className='table-cell' key={column.key}>{inventoryMode ? (row[column.key] === 'F' ? 'FILTRO' : row[column.key] === 'A' ? 'ACEITE' : row[column.key]) : row[column.key]}</Td>
                      ))}
                      {action &&
                        <Td className='button'>
                          <Stack direction='row' spacing={4} />
                          <Button id={`E%${row[idRow]}`} bgColor='primary.100' borderColor='background.border' color='text.87' _hover={{ bg: 'blue.500' }} className='button-1' onClick={handleEdit}>
                            Editar
                          </Button>
                          <Button id={`D%${row[idRow]}`} borderColor='background.border' color='text.87' bgColor='red' _hover={{ bg: 'red.500' }} className='button-2' onClick={handleDelete}>
                            Eliminar
                          </Button>
                        </Td>}
                    </Tr>
                  ))
                  : null}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  )
}

export default MyTable
