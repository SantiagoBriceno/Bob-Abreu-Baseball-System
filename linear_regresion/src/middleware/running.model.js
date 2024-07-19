import * as tf from '@tensorflow/tfjs'
import service from '../service/index.service.js'
export const runningModel = async (req, res, next) => {
  try {
    const response = await service.getRunningCordinates()
    const { x, y } = response
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
      epochs: 1500,
      callbacks: {
        onEpochEnd: async (epoch, logs) => {
          console.log(`Epoch ${epoch}: loss = ${logs.loss}`)
        }
      }
    })
    req.model = model
    next()
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}
