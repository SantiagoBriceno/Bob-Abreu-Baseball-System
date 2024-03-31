import {
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Thead,
  Card,
  CardBody,
  TableCaption,
  TableContainer
} from '@chakra-ui/react'

import './css/table.css'

const MyTableFicha = ({ datatype = 'entity', searchParam = 'nombre', data, columns, newColumn, title, idRow, inventoryMode = false, children, setEditData, setDeleteData, action = true, modalMode = false, openModal, isOpen, setIsOpen, setVisualizable = false, viewLink }) => {
  console.log('data', data)
  console.log('newColumn', newColumn[1].name)
  return (
    <>
      <Card w={modalMode ? '100%' : '90%'} bg='white' border='2px solid black' shadow='lg'>
        <CardBody>
          <TableContainer bg='background.border'>
            <Table variant='none' color='black' bg='background.border' size='sm'>
              <TableCaption>{title}</TableCaption>
              <Thead>
                <Tr>
                  {columns.map((column, i) => (
                    <Th key={i}>{column}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {data
                  ? (
                      data.map((row, i) => (
                        newColumn.map((column, i) => (
                          <Tr
                            className='table-row'
                            key={i + row[idRow]}
                          >
                            <Td textAlign='center' className='table-cell'>{column.name}</Td>
                            <Td textAlign='center' className='table-cell'>{row[column.key]}</Td>
                          </Tr>
                        ))
                      ))
                    )
                  : null}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  )
}

export default MyTableFicha
