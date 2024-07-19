import { useEffect, useState } from 'react'

export const useEstadisticas = ({ data }) => {
  const [openHitting, setOpenHitting] = useState(false)
  const [openRunning, setOpenRunning] = useState(false)
  const [openFielding, setOpenFielding] = useState(false)
  const [openThrowing, setOpenThrowing] = useState(false)

  const handleOpenHitting = () => setOpenHitting(!openHitting)
  const handleOpenRunning = () => setOpenRunning(!openRunning)
  const handleOpenFielding = () => setOpenFielding(!openFielding)
  const handleOpenThrowing = () => setOpenThrowing(!openThrowing)

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
  return { hitting, running, fielding, throwing, openHitting, openRunning, openFielding, openThrowing, handleOpenHitting, handleOpenRunning, handleOpenFielding, handleOpenThrowing }
}
