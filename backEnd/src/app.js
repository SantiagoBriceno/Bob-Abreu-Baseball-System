import express from 'express'
import cors from 'cors'

import usersRoutes from './routes/v1/authentication/users.routes.js'
import loginRoutes from './routes/v1/authentication/login.routes.js'
import testRoutes from './routes/v1/authentication/test.routes.js'
import representanteRoutes from './routes/v1/administracion/representante.routes.js'
import atletaRoutes from './routes/v1/administracion/atleta.routes.js'
import estadisticasRoutes from './routes/v1/deportivo/estadisticas.routes.js'
import antropometriaRoutes from './routes/v1/administracion/antropometria.routes.js'
import registroEspecialRoutes from './routes/v1/administracion/registroEspecial.routes.js'
import lesionesRoutes from './routes/v1/administracion/lesiones.routes.js'
import dashboardRoutes from './routes/v1/dashboard.routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/login', loginRoutes)
app.use('/api/v1/test', testRoutes)
app.use('/api/v1/representante', representanteRoutes)
app.use('/api/v1/atletas', atletaRoutes)
app.use('/api/v1/estadisticas', estadisticasRoutes)
app.use('/api/v1/antropometria', antropometriaRoutes)
app.use('/api/v1/registroEspecial', registroEspecialRoutes)
app.use('/api/v1/lesiones', lesionesRoutes)
app.use('/api/v1/dashboard', dashboardRoutes)

export default app
