import service from '../../../../service/v1/deportivo/estadisticas.service.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../../middleware/auditoria.js'
import { isValidEntitie, existStat } from '../../../../utils/formats/estadisticas.js'
import { running } from '../../../../utils/entities/main.js'
/* eslint-disable camelcase */
export const getRunningStats = async (req, res) => {
  try {
    const runningStats = await service.getRunningStats()
    runningStats.map((runningStat) => {
      runningStat.fecha_evaluacion = new Date(runningStat.fecha_evaluacion).toISOString().split('T')[0]
      return null
    })
    const atletas = await service.getAtletasInfo()
    if (runningStats.length === 0) {
      res.status(404).json({ message: 'No running stats found', atletas })
    } else {
      res.status(200).json({ runningStats, atletas })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getRunningStatById = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getRunningStatsIds()
    if (existStat(ids, id)) {
      const runningStat = await service.getRunningStatById(id)
      res.status(200).json(runningStat)
    } else {
      res.status(404).json({ message: 'Running stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getRunningStatByIdPlayer = async (req, res) => {
  const { id } = req.params
  try {
    const runningStats = await service.getRunningStatByIdPlayer(id)
    if (runningStats.length === 0) {
      res.status(404).json({ message: 'No running stats found' })
    } else {
      res.status(200).json(runningStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createRunningStat = async (req, res) => {
  const runningStat = req.body
  const nextId = await service.nextId('running')
  if (isValidEntitie(running, runningStat)) {
    try {
      const id_auditoria = await postAuditoria({ entity: 'running', user: req.user, body: runningStat, id: nextId })
      runningStat.id_auditoria = id_auditoria
      const newRunningStat = await service.createRunningStat(runningStat)
      res.status(201).json(newRunningStat)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(400).json({ message: 'Estadisticas invalidas' })
  }
}

export const updateRunningStat = async (req, res) => {
  const { id } = req.params
  const runningStat = req.body

  try {
    const ids = await service.getRunningStatsIds()
    if (existStat(ids, id)) {
      const id_auditoria = await patchAuditoria({ entity: 'running', user: req.user, body: runningStat, id })
      runningStat.id_auditoria = id_auditoria
      const updatedRunningStat = await service.updateRunningStat(id, runningStat)
      res.status(200).json(updatedRunningStat)
    } else {
      res.status(404).json({ message: 'Running stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteRunningStat = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getRunningStatsIds()
    if (existStat(ids, id)) {
      const deletedRunningStat = await service.deleteRunningStat(id)
      res.status(200).json(deletedRunningStat)
      await deleteAuditoria({ entity: 'running', user: req.user, body: deletedRunningStat, id })
    } else {
      res.status(404).json({ message: 'Running stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getSixtyYardStatByClass = async (req, res) => {
  // Aqui tengo los ids de todos los players que tienen stats de running
  const ids = await service.getIdPlayerOfRunningStats()

  if (ids.length === 0) {
    return res.status(404).json({ message: 'No running stats found' })
  }
  // luego los recorro y por cada uno obtengo la ultima estadistica de 60 yardas y los acumulo segun su clase
  const cantAtletasPerClass = await service.getAllClases('running')
  const sixtyYardStats = []
  for (const id of ids) {
    const sixtyYardStat = await service.getRunningSixtyYardStatByIdPlayer(id.id_atleta)
    sixtyYardStats.push(sixtyYardStat)
  }

  const acumPorClases = {}
  sixtyYardStats.map((stat) => {
    const { clase, velocidad_sesenta } = stat
    acumPorClases[clase] = acumPorClases[clase] ? acumPorClases[clase] += velocidad_sesenta : velocidad_sesenta
    return null
  })

  cantAtletasPerClass.map((item) => {
    const { clase, cant_atletas } = item
    acumPorClases[clase] = acumPorClases[clase] / cant_atletas
    return null
  })

  console.log('cantidad de atletas por clase', cantAtletasPerClass)
  console.log('Acumulador de velocidades por clase', acumPorClases)
  const data = {
    label: Object.keys(acumPorClases),
    values: Object.values(acumPorClases)
  }
  return res.status(200).json(data)
}

// IMPORTANTE PARA LA REGRESION LINEAL

export const getArrayOfDate = async (req, res) => {
  try {
    const ids = await service.getExistIdPlayer('running')
    if (ids.length === 0) {
      res.status(404).json({ message: 'No running stats found' })
    }
    const idsArray = ids.map(({ id }) => id)
    const arrayOfDateAndStat = []
    for (const id of idsArray) {
      // obtengo las fechas de las estadisticas y el valor de la stat que importa de running por id en un arreglo de objeto
      const dateAndStat = await service.getArrayOfDateById('running', 'velocidad_sesenta', id)

      // obtengo solo las fechas de dateAndStat
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
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const getArrayOfDateById = async (req, res) => {
  const { id } = req.params
  try {
    const dateAndStat = await service.getArrayOfDateById('running', 'velocidad_sesenta', id)
    if (dateAndStat.length === 0) {
      res.status(404).json({ message: 'No running stats found' })
    } else {
      const x = dateAndStat.map(({ x }) => {
        const diffMs = x - dateAndStat[0].x
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

export const getArrayOfDays = async (req, res) => {
  try {
    const ids = await service.getExistIdPlayer('running')
    if (ids.length === 0) {
      res.status(404).json({ message: 'No running stats found' })
    }
    const idsArray = ids.map(({ id }) => id)

    const arrayOfDaysAndStat = []
    let menorDiaTranscurrido = Infinity
    for (const id of idsArray) {
      // Obtenemos la edad en dias de cada jugador
      const birthDate = await service.getBirthDateById(id)
      const cumpleanio = new Date(birthDate[0].date)

      const edad = (new Date().getFullYear() - cumpleanio.getFullYear()) * 365
      console.log('Edad', edad)
      console.log('Cumpleanio', cumpleanio)

      // obtengo las fechas de las estadisticas y el valor de la stat que importa de running por id en un arreglo de objeto
      const dateAndStat = await service.getArrayOfDateById('running', 'velocidad_sesenta', id)

      const dates = dateAndStat.map(({ x }) => x)
      for (let i = 0; i < dates.length; i++) {
        // Conseguimos los dias que transcurrieron desde el cumpleaños del jugador
        const actual = new Date(dates[i])

        const diffMs = actual - cumpleanio
        const diasTranscurridos = Math.floor(diffMs / (1000 * 60 * 60 * 24))
        if (diasTranscurridos < menorDiaTranscurrido) {
          menorDiaTranscurrido = diasTranscurridos
        }
        dates[i] = diasTranscurridos
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

export const graphData = async (req, res) => {
  try {
    const ids = await service.getExistIdPlayer('running')
    if (ids.length === 0) {
      res.status(404).json({ message: 'No running stats found' })
    }
    const idsArray = ids.map(({ id }) => id)

    const arrayOfDaysAndStat = []
    let menorDiaTranscurrido = Infinity
    for (const id of idsArray) {
      // Obtenemos la edad en dias de cada jugador
      const birthDate = await service.getBirthDateById(id)
      const cumpleanio = new Date(birthDate[0].date)

      console.log('Cumpleanio', cumpleanio)

      // obtengo las fechas de las estadisticas y el valor de la stat que importa de running por id en un arreglo de objeto
      const dateAndStat = await service.getArrayOfDateById('running', 'velocidad_sesenta', id)

      const dates = dateAndStat.map(({ x }) => x)
      for (let i = 0; i < dates.length; i++) {
        // Conseguimos los dias que transcurrieron desde el cumpleaños del jugador
        const actual = new Date(dates[i])

        const diffMs = actual - cumpleanio
        const diasTranscurridos = Math.floor(diffMs / (1000 * 60 * 60 * 24))
        if (diasTranscurridos < menorDiaTranscurrido) {
          menorDiaTranscurrido = diasTranscurridos
        }
        dates[i] = diasTranscurridos
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

export const getArrayOfDaysById = async (req, res) => {
  const { id } = req.params
  try {
    // verificamos que existe el id del jugador
    const player = await service.existPlayer(id)
    if (player.length === 0) {
      return res.status(404).json({ message: 'Player not found' })
    }

    const birthDate = await service.getBirthDateById(id)
    const cumpleanio = new Date(birthDate[0].date)

    const edad = (new Date().getFullYear() - cumpleanio.getFullYear()) * 365
    console.log('Edad', edad)
    console.log('Cumpleanio', cumpleanio)
    let menorDiaTranscurrido = Infinity
    const dateAndStat = await service.getArrayOfDateById('running', 'velocidad_sesenta', id)
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
