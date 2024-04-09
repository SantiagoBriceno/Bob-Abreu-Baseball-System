import service from '../../../../service/v1/deportivo/estadisticas.service.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../../middleware/auditoria.js'
import { isValidEntitie, existStat } from '../../../../utils/formats/estadisticas.js'
import { hitting } from '../../../../utils/entities/main.js'
/* eslint-disable camelcase */
export const getHittingStats = async (req, res) => {
  console.log('getHittingStats aaaaa')
  try {
    const hittingStats = await service.getHittingStats()
    hittingStats.map((hittingStat) => {
      hittingStat.fecha_evaluacion = new Date(hittingStat.fecha_evaluacion).toISOString().split('T')[0]
      return null
    })
    const atletas = await service.getAtletasInfo()
    if (hittingStats.length === 0) {
      res.status(404).json({ message: 'No hitting stats found', atletas })
    } else {
      res.status(200).json({
        hittingStats,
        atletas
      })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getHittingStatById = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getHittingStatsIds()
    if (existStat(ids, id)) {
      const hittingStat = await service.getHittingStatById(id)
      res.status(200).json(hittingStat)
    } else {
      res.status(404).json({ message: 'Hitting stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getHittingStatByIdPlayer = async (req, res) => {
  const { id } = req.params
  try {
    const hittingStats = await service.getHittingStatByIdPlayer(id)
    if (hittingStats.length === 0) {
      res.status(404).json({ message: 'No hitting stats found' })
    } else {
      res.status(200).json(hittingStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createHittingStat = async (req, res) => {
  const hittingStat = req.body
  const nextId = await service.nextId('hitting')
  console.log(nextId)
  if (isValidEntitie(hitting, hittingStat)) {
    try {
      const id_auditoria = await postAuditoria({ entity: 'hitting', user: req.user, body: hittingStat, id: nextId })
      hittingStat.id_auditoria = id_auditoria
      const newHittingStat = await service.createHittingStat(hittingStat)
      res.status(201).json(newHittingStat)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(400).json({ message: 'Estadisticas invalidas' })
  }
}

export const updateHittingStat = async (req, res) => {
  const { id } = req.params
  const hittingStat = req.body

  try {
    const ids = await service.getHittingStatsIds()
    if (existStat(ids, id)) {
      const id_auditoria = await patchAuditoria({ entity: 'hitting', user: req.user, body: hittingStat, id })
      hittingStat.id_auditoria = id_auditoria
      const updatedHittingStat = await service.updateHittingStat(id, hittingStat)
      res.status(200).json(updatedHittingStat)
    } else {
      res.status(404).json({ message: 'Hitting stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteHittingStat = async (req, res) => {
  const { id } = req.params
  console.log('deleteHittingStat')
  try {
    const ids = await service.getHittingStatsIds()
    console.log(existStat(ids, id))
    if (existStat(ids, id)) {
      const deletedHittingStat = await service.deleteHittingStat(id)
      res.status(200).json(deletedHittingStat)
      await deleteAuditoria({ entity: 'hitting', user: req.user, body: deletedHittingStat, id })
    } else {
      res.status(404).json({ message: 'Hitting stat not found' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const getBatSpeedStatByClass = async (req, res) => {
  const ids = await service.getHittingStatsIds()

  if (ids.length === 0) {
    return res.status(404).json({ message: 'No hitting stats found' })
  }

  const cantAtletasPerClass = await service.getAllClases('hitting')

  const batSpeedStats = []

  for (const id of ids) {
    const hittingStat = await service.getRowFromTableByIdWithClass('hitting', 'bat_speed', id.id_atleta)
    batSpeedStats.push(hittingStat)
  }

  const acumPorClases = {}

  batSpeedStats.map((stat) => {
    const { clase, bat_speed } = stat
    acumPorClases[clase] = acumPorClases[clase] ? acumPorClases[clase] + bat_speed : bat_speed
    return null
  })

  cantAtletasPerClass.map((item) => {
    const { clase, cant_atletas } = item
    acumPorClases[clase] = acumPorClases[clase] / cant_atletas
    return null
  })

  const data = {
    label: Object.keys(acumPorClases),
    data: Object.values(acumPorClases)
  }
  return res.status(200).json(data)
}

export const getArrayOfDate = async (req, res) => {
  try {
    const ids = await service.getExistIdPlayer('hitting')
    if (ids.length === 0) {
      return res.status(404).json({ message: 'No hitting stats found' })
    }
    const idsArray = ids.map((id) => id.id)
    const arrayOfDateAndStat = []
    // Obtengo las fechas de las estadisticas y el valor de la stat que importa de hitting por id en un arreglo de objeto
    for (const id of idsArray) {
      const dateAndStat = await service.getArrayOfDateAndStat('hitting', 'bat_speed', id)

      const dates = dateAndStat.map(({ x }) => x)
      const firstDate = dates[0]
      const diasTranscurridos = []
      for (const date of dates) {
        const diffMs = date - firstDate

        const days = diffMs / (1000 * 60 * 60 * 24)
        diasTranscurridos.push(days)
      }
      dates.map((date, index) => {
        dateAndStat[index].x = diasTranscurridos[index]
        return null
      })
      arrayOfDateAndStat.push({ dateAndStat })
    }

    const allX = []
    const allY = []

    for (const item of arrayOfDateAndStat) {
      const { dateAndStat } = item
      dateAndStat.map(({ x, y }) => {
        allX.push(x)
        allY.push(y)
        return null
      })
    }
    const result = {
      x: allX,
      y: allY
    }
    return res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getArrayOfDateById = async (req, res) => {
  const { id } = req.params
  try {
    const dateAndStat = await service.getArrayOfDateAndStat('hitting', 'bat_speed', id)

    if (dateAndStat.length === 0) {
      return res.status(404).json({ message: 'No hitting stats found' })
    } else {
      const x = dateAndStat.map(({ x }) => {
        const firstDate = dateAndStat[0].x
        const diffMs = x - firstDate
        const days = diffMs / (1000 * 60 * 60 * 24)
        return days
      })
      const y = dateAndStat.map(({ y }) => y)
      res.status(200).json({ x, y })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getArrayOfDaysHitting = async (req, res) => {
  try {
    const ids = await service.getExistIdPlayer('hitting_ml')
    if (ids.length === 0) {
      return res.status(404).json({ message: 'No hitting stats found' })
    }
    const idsArray = ids.map((id) => id.id)

    const arrayOfDaysAndStat = []
    let menorDiaTranscurrido = Infinity

    for (const id of idsArray) {
      const birthDate = await service.getBirthDateById(id)
      const cumpleanio = new Date(birthDate[0].date)

      const dateAndStat = await service.getArrayOfDateById('hitting_ml', 'bat_speed', id)

      const dates = dateAndStat.map(({ x }) => x)
      for (let i = 0; i < dates.length; i++) {
        const actual = new Date(dates[i])

        const diffMs = actual - cumpleanio
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
        if (days < menorDiaTranscurrido) {
          menorDiaTranscurrido = days
        }
        dates[i] = days
      }
      dateAndStat.map((item, index) => {
        item.x = dates[index] - menorDiaTranscurrido
        return null
      })
      arrayOfDaysAndStat.push({ dateAndStat })
    }
    const allX = []
    const allY = []

    for (const item of arrayOfDaysAndStat) {
      const { dateAndStat } = item
      dateAndStat.map(({ x, y }) => {
        allX.push(x)
        allY.push(y)
        return null
      })
    }
    res.send({ x: allX, y: allY, menorDiaTranscurrido })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const getArrayOfDaysHittingById = async (req, res) => {
  const { id } = req.params
  try {
    const player = await service.existPlayer(id)
    if (player.length === 0) {
      return res.status(404).json({ message: 'Player not found' })
    }
    const birthDate = await service.getBirthDateById(id)
    const cumpleanio = new Date(birthDate[0].date)
    let menorDiaTranscurrido = Infinity
    const dateAndStat = await service.getArrayOfDateById('hitting', 'bat_speed', id)
    console.log(dateAndStat)
    const fechaUltimo = dateAndStat[dateAndStat.length - 1].x.toISOString().split('T')[0]
    const dates = dateAndStat.map(({ x }) => x)
    for (let i = 0; i < dates.length; i++) {
      // Conseguimos los dias que transcurrieron desde el cumpleaños del jugador
      const actual = new Date(dates[i])

      const diffMs = actual - cumpleanio
      const diasTranscurridos = Math.floor(diffMs / (1000 * 60 * 60 * 24))
      dates[i] = diasTranscurridos
      if (diasTranscurridos < menorDiaTranscurrido) {
        menorDiaTranscurrido = diasTranscurridos
      }
    }
    dateAndStat.map((item, index) => {
      item.x = dates[index] - menorDiaTranscurrido
      return null
    })
    const x = dateAndStat.map(({ x }) => x)
    const y = dateAndStat.map(({ y }) => y)
    res.status(200).json({ x, y, menorDiaTranscurrido, cumpleanio, ultimaFecha: { days: x[x.length - 1], fecha: fechaUltimo } })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const graphDataHitting = async (req, res) => {
  try {
    const ids = await service.getExistIdPlayer('hitting_ml')
    if (ids.length === 0) {
      return res.status(404).json({ message: 'No hitting stats found' })
    }
    const idsArray = ids.map((id) => id.id)

    const arrayOfDaysAndStat = []
    let menorDiaTranscurrido = Infinity

    for (const id of idsArray) {
      const birthDate = await service.getBirthDateById(id)
      const cumpleanio = new Date(birthDate[0].date)

      const dateAndStat = await service.getArrayOfDateById('hitting_ml', 'bat_speed', id)

      const dates = dateAndStat.map(({ x }) => x)
      for (let i = 0; i < dates.length; i++) {
        const actual = new Date(dates[i])

        const diffMs = actual - cumpleanio
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
        if (days < menorDiaTranscurrido) {
          menorDiaTranscurrido = days
        }
        dates[i] = days
      }
      dateAndStat.map((item, index) => {
        item.x = dates[index] - menorDiaTranscurrido
        return null
      })
      arrayOfDaysAndStat.push({ dateAndStat })
    }
    const allX = []
    const allY = []

    for (const item of arrayOfDaysAndStat) {
      const { dateAndStat } = item
      dateAndStat.map(({ x, y }) => {
        allX.push(x)
        allY.push(y)
        return null
      })
    }
    const result = parOrdenadoDeDosArreglosDeIgualLongitud(allX, allY)
    res.send({ result })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

const parOrdenadoDeDosArreglosDeIgualLongitud = (x, y) => {
  const result = []
  for (let i = 0; i < x.length; i++) {
    result.push({ x: x[i], y: y[i] })
  }
  return result
}
