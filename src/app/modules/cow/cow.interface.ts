import { Model, Types } from 'mongoose'
import { IUser } from '../user/user.interface'

export type ICow = {
  id: string
  name: string
  age: number
  price: number
  location:
    | 'Dhaka'
    | 'Chattogram'
    | 'Barishal'
    | 'Rajshahi'
    | 'Comilla'
    | 'Rangpur'
    | 'Mymensingh'

  breed:
    | 'Brahman'
    | 'Nellore'
    | 'Sahiwal'
    | 'Gir'
    | 'Indigenous'
    | 'Tharparkar'
    | 'Kankrej'

  weight: number
  label: 'for sale' | 'sold out'

  category: 'Dairy' | 'Beef' | 'DualPurpose'
  seller: Types.ObjectId | IUser
}

export type CowModel = Model<ICow, Record<string, unknown>>
