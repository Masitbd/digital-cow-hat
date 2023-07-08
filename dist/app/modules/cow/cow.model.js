'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Cow = exports.CowSchema = void 0
const mongoose_1 = require('mongoose')
const cow_constant_1 = require('./cow.constant')
exports.CowSchema = new mongoose_1.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    location: {
      type: String,
      enum: cow_constant_1.location,
    },
    breed: {
      type: String,
      enum: cow_constant_1.breed,
    },
    weight: {
      type: Number,
    },
    label: {
      type: String,
      enum: cow_constant_1.lebel,
    },
    category: {
      type: String,
      enum: cow_constant_1.category,
    },
    seller: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)
exports.Cow = (0, mongoose_1.model)('Cow', exports.CowSchema)
