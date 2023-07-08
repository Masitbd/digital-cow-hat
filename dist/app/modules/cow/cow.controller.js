'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.CowController = void 0
const http_status_1 = __importDefault(require('http-status'))
const catchAsync_1 = __importDefault(require('../../../shared/catchAsync'))
const sendResponse_1 = __importDefault(require('../../../shared/sendResponse'))
const cow_service_1 = require('./cow.service')
const createCow = (0, catchAsync_1.default)((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { cowData } = req.body
    const result = yield cow_service_1.CowService.createCow(cowData)
    next()
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'New cow created successfully',
      data: result,
    })
  })
)
const getAllCow = (0, catchAsync_1.default)((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_service_1.CowService.getAllCow()
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Cows found successfully',
      data: result,
    })
    next()
  })
)
const getSingleCow = (0, catchAsync_1.default)((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id
    const result = yield cow_service_1.CowService.getSinglelCow(id)
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'One cow find successfully',
      data: result,
    })
    next()
  })
)
const updateCow = (0, catchAsync_1.default)((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id
    const updatedData = req.body
    const result = yield cow_service_1.CowService.updatelCow(id, updatedData)
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'One record update successfully',
      data: result,
    })
    next()
  })
)
const deleteCow = (0, catchAsync_1.default)((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id
    const result = yield cow_service_1.CowService.deleteCow(id)
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'One cow delete successfully',
      data: result,
    })
    next()
  })
)
exports.CowController = {
  createCow,
  getAllCow,
  getSingleCow,
  updateCow,
  deleteCow,
}
