import { Stack, Text } from '@chakra-ui/react'
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
  },
  events: ['click'],
  onClick: function (e) {
    const canvasPosition = ChartJS.helpers.getRelativePosition(e, this)

    const data = this.data.datasets[0].data
    let minDistance = Infinity
    let closestIndex = -1
    for (let i = 0; i < data.length; i++) {
      const distance = Math.hypot(canvasPosition.x - data[i].x, canvasPosition.y - data[i].y)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = i
      }
    }
    console.log(data[closestIndex])
  }

}

const RunningStatsView = () => {
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
        label: 'relacion de la velocidad con la edad en dia de los atletas de la academia',
        data: trainingData,
        backgroundColor: 'rgba(255, 99, 132)'
      }

    ]
  }
  console.log(trainingData)
  return (
    <Stack h='75%' w='75%' alignItems='center'>
      <Bubble data={data} options={options} />
      <Text>Tiempo recorrido 60 yardas en segundos</Text>

    </Stack>
  )
}

export default RunningStatsView
