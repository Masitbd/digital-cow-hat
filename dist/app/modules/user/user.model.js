'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.User = void 0
const mongoose_1 = require('mongoose')
const user_constant_1 = require('./user.constant')
const userSchema = new mongoose_1.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    role: {
      type: String,
      enum: user_constant_1.role,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    address: {
      type: String,
    },
    budget: {
      type: Number,
    },
    income: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)
exports.User = (0, mongoose_1.model)('User', userSchema)
