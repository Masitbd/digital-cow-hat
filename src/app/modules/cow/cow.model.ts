import { model, Schema } from 'mongoose'

import { breed, category, lebel, location } from './cow.constant'
import { CowModel, ICow } from './cow.interface'

export const CowSchema = new Schema<ICow>(
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
      enum: location,
    },
    breed: {
      type: String,
      enum: breed,
    },
    weight: {
      type: Number,
    },
    label: {
      type: String,
      enum: lebel,
    },
    category: {
      type: String,
      enum: category,
    },
    seller: {
      type: Schema.Types.ObjectId,
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

export const Cow = model<ICow, CowModel>('Cow', CowSchema)
