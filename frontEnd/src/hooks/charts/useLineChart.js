import { useState, useEffect } from 'react'
export const useLineChart = (info, param) => {
  const [dataset, setDataset] = useState([])
  const [data, setData] = useState()

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  }
  const labels = data.x
  useEffect(() => {
    const result = data.map((item) => {
      return item.values[param]
    })
    setDataset(result)
  }, [])

  useEffect(() => {
    setData({
      labels,
      datasets: [
        {
          label: info,
          data: dataset,
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)'
        }
      ]
    })
  }, [dataset])
}
