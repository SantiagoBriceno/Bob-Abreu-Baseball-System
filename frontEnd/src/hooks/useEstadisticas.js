import { useEffect, useState } from 'react'

export const useEstadisticas = ({ data }) => {
  const [hitting, setHitting] = useState({})
  const [running, setRunning] = useState({})
  const [fielding, setFielding] = useState({})
  const [throwing, setThrowing] = useState({})

  useEffect(() => {
    if (data) {
      const { hitting, running, fielding, throwing } = data
      setHitting({ id: hitting.id, value: hitting.values[hitting.values.length - 1] })
      setRunning({ id: running.id, value: running.values[running.values.length - 1] })
      setFielding({ id: fielding.id, value: fielding.values[fielding.values.length - 1] })
      setThrowing({ id: throwing.id, value: throwing.values[throwing.values.length - 1] })
    }
  }, [])
  return { hitting, running, fielding, throwing }
}
