import express from 'express'
import cors from 'cors'

import usersRoutes from './routes/v1/authentication/users.routes.js'
import loginRoutes from './routes/v1/authentication/login.routes.js'
import testRoutes from './routes/v1/authentication/test.routes.js'
import representanteRoutes from './routes/v1/administracion/representante.routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/login', loginRoutes)
app.use('/api/v1/test', testRoutes)
app.use('/api/v1/representante', representanteRoutes)

export default app
