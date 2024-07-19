import { Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'
import { Bubble } from 'react-chartjs-2'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export const options = {
  scales: {
    y: {
      beginAtZero: true
    },
    x: {
      beginAtZero: true
    }
  },
  plugins: {
    decimation: true
  },
  events: ['click']

}

const HittingStatsView = () => {
  const [trainingData, setTrainingData] = useState({
    x: [],
    y: []
  })
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/estadisticas/hitting/g/graph')
      .then((res) => res.json())
      .then((data) => {
        setTrainingData(data.result)
      })
  }, [])

  const data = {
    datasets: [
      {
        label: 'relacion de la velocidad de bateo con la edad en dia de los atletas de la academia',
        data: trainingData,
        backgroundColor: 'rgba(255, 99, 132)'
      }

    ]
  }
  console.log(trainingData)
  return (
    <Stack h='75%' w='75%' alignItems='center'>
      <Bubble data={data} options={options} />
      <Text>Velocidad de bateo en Km/Hr</Text>

    </Stack>
  )
}

export default HittingStatsView
