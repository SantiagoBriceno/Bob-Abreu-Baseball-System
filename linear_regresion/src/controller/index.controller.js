import service from '../service/index.service.js'
import * as tf from '@tensorflow/tfjs'
export const getRunningCordinates = async (req, res) => {
  try {
    const response = await service.getRunningCordinates()
    const x = [
      0,
      10,
      20,
      30
    ]
    const y = [
      7.9,
      7.9,
      7.9,
      7.6
    ]
    const xLength = x.length
    const yLength = y.length
    const xs = tf.tensor2d(
      x,
      [xLength, 1]
    )
    const ys = tf.tensor2d(
      y,
      [yLength, 1]
    )
    const model = tf.sequential()
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }))
    model.compile({ loss: 'meanSquaredError', optimizer: tf.train.adam(0.01) })
    await model.fit(xs, ys, {
      epochs: 5500,
      callbacks: {
        onEpochEnd: async (epoch, logs) => {
          console.log(`Epoch ${epoch}: loss = ${logs.loss}`)
        }
      }
    })
    const prediction = model.predict(tf.tensor2d([500], [1, 1]))
    console.log(`Prediccion de 60 yardas para un atleta al 30 de marzo: ${prediction.dataSync()[0]}`)
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const getRunningPrediction = async (req, res) => {
  // DATOS DE ENTRENAMIENTO DE LA REGRESION LINEAL
  const x = [
    0,
    10,
    20,
    30
  ]
  const y = [
    7.9,
    7.9,
    7.9,
    7.6
  ]

  const regressionParams = linearRegression(x, y)

  const estimatedYforX = estimateY(210, regressionParams)
  console.log(estimatedYforX)

  const futureX = [200, 250, 300, 350]
  const estimatedFutureY = futureX.map(x => estimateY(x, regressionParams))
  console.log(estimatedFutureY)
}

function linearRegression (x, y) {
  const xSum = x.reduce((a, b) => a + b, 0)
  const ySum = y.reduce((a, b) => a + b, 0)
  const xxSum = x.reduce((a, b) => a + b * b, 0)
  const xySum = x.reduce((a, b, index) => a + b * y[index], 0)

  const m = (xySum - (xSum * ySum / y.length)) / (xxSum - (xSum * xSum / y.length))
  const b = (ySum - m * xSum) / y.length
  return { m, b }
}

function estimateY (x, { m, b }) {
  return m * x + b
}