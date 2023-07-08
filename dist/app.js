'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const cors_1 = __importDefault(require('cors'))
const express_1 = __importDefault(require('express'))
const globalErrorHandler_1 = __importDefault(
  require('./app/middlewares/globalErrorHandler')
)
const routes_1 = __importDefault(require('./app/routes'))
const app = (0, express_1.default)()
app.use((0, cors_1.default)())
//parser
app.use(express_1.default.json())
app.use(express_1.default.urlencoded({ extended: true }))
app.use('/api/v1/', routes_1.default)
//app.use('/api/v1/cowss/', CowRoutes)
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Working successfully')
//   //throw new ApiError(400, 'server error')
//   next('ora bana')
// })
// global error handler
app.use(globalErrorHandler_1.default)
exports.default = app
