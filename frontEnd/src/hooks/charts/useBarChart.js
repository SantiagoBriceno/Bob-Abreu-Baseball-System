import { useEffect, useState } from 'react'

export const useBarChart = ({ values, labels }) => {
  console.log('labels', labels)
  const keys = labels.map((item) => item.key)
  labels = labels.map((item) => item.name)

  console.log('keys', keys)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Atletas de la academia'
      }
    }
  }

  return { options }
}
