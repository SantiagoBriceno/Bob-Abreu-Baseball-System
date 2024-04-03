import {
  Stack,
  SimpleGrid,
  Box,
  Heading
} from '@chakra-ui/react'
// import MyCardBox from '../components/form/CardBox.jsx'
import StatsCard from '../components/StatsCard.jsx'
import { useDashboard } from '../hooks/useDashboard.js'
import { AppleFilled } from '@ant-design/icons'
import { useBarChart } from '../hooks/charts/useBarChart.js'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

const MainView = () => {
  const { data, percents } = useDashboard()

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
  console.log('newData', data)
  return (
    <Stack spacing={8} align='center'>
      {/* <Stack spacing={8} align='center' minH='80vh' w='90%'>
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
      </Stack> */}
      {percents &&
        <Stack spacing={8} align='center' minH='80vh' w='90%'>
          <Heading m={5} size='xl' fontWeight='extrabold'>
            Cantidad de Atletas en la Academia
          </Heading>

          <BarChart data={percents} labels={nameColumns} />

        </Stack>}
    </Stack>
  )
}

const BarChart = ({ data, labels }) => {
  console.log('data desde main', data)
  const { options } = useBarChart({ values: data, labels })
  const dataBarChart = {
    labels: labels.map((item) => item.name),
    datasets: [
      {
        label: 'Atletas',
        data: labels.map((item) => data[item.key]),
        backgroundColor: 'rgba(251, 79, 2, 0.2)',
        borderColor: 'rgba(251, 79, 2, 1)',
        borderWidth: 1
      }
    ]
  }
  console.log('dataBarChart', dataBarChart)
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
  return (
    <Box w='100%' h='100%'>
      <Bar data={dataBarChart} options={options} />
    </Box>
  )
}

export default MainView
