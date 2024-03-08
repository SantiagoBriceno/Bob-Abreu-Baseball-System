import service from '../../../../service/v1/deportivo/estadisticas.service.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../../middleware/auditoria.js'
import { isValidEntitie, existStat } from '../../../../utils/formats/estadisticas.js'
import { running } from '../../../../utils/entities/main.js'
/* eslint-disable camelcase */
export const getRunningStats = async (req, res) => {
  try {
    const runningStats = await service.getRunningStats()
    if (runningStats.length === 0) {
      res.status(404).json({ message: 'No running stats found' })
    } else {
      res.status(200).json(runningStats)
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
        dates[i] = diasTranscurridos
      }
      dateAndStat.map((item, index) => {
        item.x = dates[index]
        return null
      })
      arrayOfDaysAndStat.push({ dateAndStat })
    }

    const arraySixteen = generarArregloMinMax(5475, 5840, true)
    const statSixteen = generarArregloMinMax(6.9, 7.3)

    const arrayFiveteen = generarArregloMinMax(5110, 5474, true)
    const statFiveteen = generarArregloMinMax(7.3, 7.6)

    const arrayFourteen = generarArregloMinMax(4745, 5110, true)
    const statFourteen = generarArregloMinMax(7.6, 7.9)

    const arrayThirteen = generarArregloMinMax(4380, 4744, true)
    const statThirteen = generarArregloMinMax(7.9, 8.2)

    const arrayTwelve = generarArregloMinMax(4015, 4379, true)
    const statTwelve = generarArregloMinMax(8.2, 8.5)

    const arrayEleven = generarArregloMinMax(3650, 4014, true)
    const statEleven = generarArregloMinMax(8.5, 8.8)

    const allX = [0, 100, 200, 300, 400, 500, 600, 1000, 2000, 4500, 5000, 5840, 5840, 5840, 5840, 5840, 5840, 5840].concat(arraySixteen, arrayFiveteen, arrayFourteen, arrayThirteen, arrayTwelve, arrayEleven)
    const allY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 8.9, 8.7, 6.9, 7.2, 7.4, 7.4, 7.4, 7.4, 7.4].concat(statSixteen, statFiveteen, statFourteen, statThirteen, statTwelve, statEleven)

    // for (const item of arrayOfDaysAndStat) {
    //   const { dateAndStat } = item
    //   dateAndStat.map(({ x, y }) => {
    //     allX.push(x)
    //     allY.push(y)
    //     return null
    //   })
    // }
    res.send({ x: allX, y: allY })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

const generarArregloMinMax = (min, max, floor = false) => {
  const arr = []
  for (let i = 0; i < 100; i++) {
    arr.push(floor ? Math.floor(Math.random() * (max - min + 1) + min) : Math.random() * (max - min + 1) + min)
  }
  return arr
}
