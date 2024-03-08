import { Stack, background } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'
import { Bubble } from 'react-chartjs-2'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export const options = {
  aspectRatio: 1,
  scales: {
    y: {
      beginAtZero: true,
      min: 6,
      max: 12
    },
    x: {
      beginAtZero: true,
      min: 0,
      max: 1400,
      ticks: {
        stepSize: 100
      }
    }
  },
  plugins: {
    decimation: true
  }

}

const RunningView = () => {
  const [trainingData, setTrainingData] = useState({
    x: [],
    y: []
  })
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/estadisticas/running/g/graph')
      .then((res) => res.json())
      .then((data) => {
        setTrainingData(data.result)
      })
  }, [])

  const data = {
    datasets: [
      {
        label: 'Red dataset',
        data: trainingData,
        backgroundColor: 'rgba(255, 99, 132)'
      }

    ]
  }
  console.log(trainingData)
  return (
    <Stack h='100%' w='100%' alignItems='center'>
      <Bubble data={data} options={options} />
    </Stack>
  )
}

export default RunningView
