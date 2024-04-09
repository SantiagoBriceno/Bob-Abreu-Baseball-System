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
  ButtonGroup,
  IconButton
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'

import { Link } from 'react-router-dom'
import './css/table.css'
import MyInput2 from './form/MyInput2'

const MyTable = ({ isDisabled = false, datatype = 'entity', searchParam = 'nombre', data, columns, title, idRow, inventoryMode = false, children, setEditData, setDeleteData, action = true, modalMode = false, openModal, isOpen, setIsOpen, setVisualizable = false, viewLink }) => {
  const [search, setSearch] = useState()
  const handleEdit = (e) => {
    console.log('hice click en el atleta', e.target.id)
    const index = e.target.id.split('%')[1]
    for (let i = 0; i < data.length; i++) {
      console.log(data[i][idRow])
      if (data[i][idRow] + '' === index) {
        console.log(data[i], ' desde mytable')
        setEditData(data[i])
        setIsOpen(!isOpen)
      }
    }
  }

  const handleDelete = (e) => {
    const index = e.target.id.split('%')[1]
    setDeleteData(index)
    window.location.reload()
  }

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  const searchFilter = (data) => {
    if (data.length === 0) {
      return data
    } else {
      if (data[0][searchParam]) {
        return data.filter((row) => row[searchParam].toLowerCase().includes(search.toLowerCase()))
      }
    }
  }

  const results = !search ? data : searchFilter(data)
  return (
    <>
      <Flex bg='white' border='2px solid black' shadow='lg' rounded='10px' p='20px 30px' w='90%' alignItems='center' gap='2'>
        <ButtonGroup gap='2'>
          <Button isDisabled={isDisabled} bg='#F24405' onClick={openModal} color='white' _hover={{ bg: 'principales.cuaternary' }}>{datatype}</Button>
        </ButtonGroup>
        <Spacer />
        <Box p='1'>
          <MyInput2 valueControl={search} onChange={searcher} placeholder='Cesar Pausin' label='Búsqueda por el nombre' />
        </Box>
      </Flex>
      <Card w={modalMode ? '100%' : '90%'} bg='white' border='2px solid black' shadow='lg'>
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
                {data && results.length > 0
                  ? results.map((row, i) => (
                    <Tr
                      className='table-row'
                      key={i + row[idRow]}
                    >
                      {columns.map((column) => (
                        <Td textAlign='center' className='table-cell' key={column.key}>{row[column.key]}</Td>
                      ))}
                      {action &&
                        <Td className='button'>
                          <Stack direction='row' spacing={4} />
                          <IconButton id={`E%${row[idRow]}`} bgColor='primary.100' borderColor='background.border' color='text.87' _hover={{ bg: 'blue.500' }} className='button-1' onClick={handleEdit} icon={<EditIcon />} />
                          <Button id={`D%${row[idRow]}`} borderColor='background.border' color='text.87' bgColor='red' _hover={{ bg: 'red.500' }} className='button-2' onClick={handleDelete}>
                            <DeleteIcon />
                          </Button>
                          {setVisualizable &&
                            <Link to={`${viewLink}${row[idRow]}`} style={{ textDecoration: 'none' }}>

                              <Button id={`V%${row[idRow]}`} borderColor='background.border' color='text.87' bgColor='green' _hover={{ bg: 'green.500' }} className='button-3'>
                                <ViewIcon />
                              </Button>
                            </Link>}
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
