import {
  Stack,
  SimpleGrid,
  Box,
  Heading
} from '@chakra-ui/react'
// import MyCardBox from '../components/form/CardBox.jsx'
import StatsCard from '../components/StatsCard.jsx'
import { useDashboard } from '../hooks/useDashboard.js'
import { AddIcon } from '@chakra-ui/icons'
import { AppleFilled } from '@ant-design/icons'

const MainView = () => {
  const { data } = useDashboard()
  console.log('data', data)

  const nameColumns = [
    { key: 'nroAtletas', name: 'Número de Atletas' },
    { key: 'nroAtletasActivos', name: 'Número de Atletas Activos' },
    { key: 'nroAtletasInactivos', name: 'Número de Atletas Inactivos' },
    { key: 'nroCatchers', name: 'Número de Catchers' },
    { key: 'nroPitchers', name: 'Número de Pitchers' },
    { key: 'nroInfielders', name: 'Número de Infielders' },
    { key: 'nroOutfielders', name: 'Número de Outfielders' }
  ]

  const newData = data && data.length > 0 && data.map((item) => {
    const nameColumn = nameColumns.find((column) => column.key === Object.keys(item)[0]).name
    const key = Object.keys(item)[0]

    return { id: key, name: nameColumn, description: item[key], icon: AppleFilled }
  })
  console.log('newData', newData)
  return (
    <Stack spacing={8} align='center'>
      <Stack spacing={8} align='center' minH='80vh' w='90%'>
        <Heading m={5} size='xl' fontWeight='extrabold'>
          DASHBOARD
        </Heading>
        <SimpleGrid columns={4} spacing={10}>
          {
            newData && newData.length > 0 && newData.map((item) => (
              <Box key={item.id}>
                <StatsCard name={item.name} description={item.description} icon={item.icon} />
              </Box>
            ))
          }
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

export default MainView
