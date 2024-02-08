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
  Stack
} from '@chakra-ui/react'

import './css/table.css'
import FormModal from './modals/FormModal'

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
  const closeModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Card w={modalMode ? '100%' : '90%'} bg='background.bg' shadow={modalMode ? 'none' : 'lg'}>
        <CardBody>
          <TableContainer>
            <Table variant='none' bg='background.panel' size='sm'>
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
        <FormModal w='60%' isOpen={isOpen} onClose={closeModal}>
          {children}
        </FormModal>
      </Card>
    </>
  )
}

export default MyTable
