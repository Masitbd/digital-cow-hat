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
exports.CowService = void 0
const http_status_1 = __importDefault(require('http-status'))
const ApiError_1 = __importDefault(require('../../../errors/ApiError'))
const cow_model_1 = require('./cow.model')
const createCow = payload =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.Cow.create(payload)
    return result
  })
const getAllCow = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.Cow.find({})
    return result
  })
const getSinglelCow = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.Cow.findOne({ _id: id })
    return result
  })
const updatelCow = (id, payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield cow_model_1.Cow.findOne({ _id: id })
    if (!isExist) {
      throw new ApiError_1.default(
        http_status_1.default.NOT_FOUND,
        'User not found !'
      )
    }
    const result = yield cow_model_1.Cow.findOneAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      }
    )
    return result
  })
const deleteCow = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield cow_model_1.Cow.findOne({ _id: id })
    if (!isExist) {
      throw new ApiError_1.default(
        http_status_1.default.NOT_FOUND,
        'User not found !'
      )
    }
    const result = yield cow_model_1.Cow.findOneAndDelete(
      { _id: id },
      {
        new: true,
      }
    )
    return result
  })
exports.CowService = {
  createCow,
  getAllCow,
  getSinglelCow,
  updatelCow,
  deleteCow,
}
