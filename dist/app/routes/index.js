'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const cow_cowRoute_1 = require('../modules/cow/cow.cowRoute')
const user_route_1 = require('../modules/user/user.route')
const router = express_1.default.Router()
const moduleRoutes = [
  {
    path: '/users',
    route: user_route_1.UserRoutes,
  },
  {
    path: '/cows',
    route: cow_cowRoute_1.CowRoutes,
  },
]
moduleRoutes.forEach(route => router.use(route.path, route.route))
exports.default = router
