import { useState, useEffect } from 'react'

export const useLineChart = (info, param, title, index) => {
  const [data, setData] = useState()
  info.x.map((fecha, index) => {
    info.x[index] = info.x[index].split('T')[0]
    return null
  })
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: title
      }
    }
  }

  useEffect(() => {
    setData({
      labels: info.x,
      datasets: [
        {
          label: index,
          data: info.values.map((item) => {
            return item[param]
          }),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]

    })
  }, [])

  return { data, options, setData }
}
