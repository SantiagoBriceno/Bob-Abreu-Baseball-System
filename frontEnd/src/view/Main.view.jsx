import {
  Stack,
  Box,
  Heading,
  Card
} from '@chakra-ui/react'
import { useDashboard } from '../hooks/useDashboard.js'
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
    { key: 'nroAtletas', name: 'Total' },
    { key: 'nroAtletasActivos', name: 'Activos' },
    { key: 'nroAtletasInactivos', name: 'Inactivos' },
    { key: 'nroCatchers', name: 'Catchers' },
    { key: 'nroPitchers', name: 'Pitchers' },
    { key: 'nroInfielders', name: 'Infielders' },
    { key: 'nroOutfielders', name: 'Outfielders' }
  ]
  console.log('newData', data)
  return (
    <Stack spacing={8} align='center'>

      {percents &&
        <Stack spacing={8} align='center' minH='80vh' w='90%'>
          <Heading m={5} size='xl' fontWeight='extrabold'>
            Número de Atletas en la Academia
          </Heading>
          <Card w='75%' h='75%' p={10} boxShadow='xl'>
            <BarChart data={percents} labels={nameColumns} />
          </Card>

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
        label: 'Número de Atletas',
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
