import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/', routes)

//app.use('/api/v1/cowss/', CowRoutes)

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Working successfully')
//   //throw new ApiError(400, 'server error')
//   next('ora bana')
// })

// global error handler

app.use(globalErrorHandler)

export default app
