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
exports.UserService = void 0
const http_status_1 = __importDefault(require('http-status'))
const config_1 = __importDefault(require('../../../config'))
const ApiError_1 = __importDefault(require('../../../errors/ApiError'))
const user_model_1 = require('./user.model')
const user_utils_1 = require('./user.utils')
const createUser = user =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = yield (0, user_utils_1.generateUserId)()
    user.id = id
    // default password
    if (!user.password) {
      user.password = config_1.default.default_user_pass
    }
    const createdUser = yield user_model_1.User.create(user)
    if (!createdUser) {
      throw new ApiError_1.default(400, 'Failed to create user')
    }
    return createdUser
  })
const getAllUser = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find({})
    return result
  })
const getSinglelUser = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOne({ _id: id })
    return result
  })
const updatelUser = (id, payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield user_model_1.User.findOne({ _id: id })
    if (!isExist) {
      throw new ApiError_1.default(
        http_status_1.default.NOT_FOUND,
        'User not found !'
      )
    }
    const result = yield user_model_1.User.findOneAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      }
    )
    return result
  })
const deleteUser = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield user_model_1.User.findOne({ _id: id })
    if (!isExist) {
      throw new ApiError_1.default(
        http_status_1.default.NOT_FOUND,
        'User not found !'
      )
    }
    const result = yield user_model_1.User.findOneAndDelete(
      { _id: id },
      {
        new: true,
      }
    )
    return result
  })
exports.UserService = {
  createUser,
  getAllUser,
  getSinglelUser,
  updatelUser,
  deleteUser,
}
