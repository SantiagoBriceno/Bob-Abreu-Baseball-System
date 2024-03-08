import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-node'
import service from '../service/index.service.js'

async function trainRunningModel (inputData, outputData) {
  const model = tf.sequential()
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }))
  model.compile({ loss: 'meanSquaredError', optimizer: tf.train.adam(0.01) })
  await model.fit(inputData, outputData, {
    epochs: 1500,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        console.log(`Epoch ${epoch}: loss = ${logs.loss}`)
      }
    }
  })
  return model
}

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

const model = await trainRunningModel(xs, ys)
// Quiero que el modelo se guarde en un archivo llamado model.json
model.save('file://./running').then(() => {
  console.log('Modelo guardado')
}).catch((error) => {
  console.log('Error al guardar el modelo', error)
}
)
