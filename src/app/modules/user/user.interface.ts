import { Model } from 'mongoose'

export type IName = {
  firstName: string
  lastName: string
}

//export type IRole = 'seller' | 'buyer'

export type IUser = {
  id: string
  phoneNumber: string
  role: 'seller' | 'buyer'
  password: string
  name: IName
  address: string
  budget: number
  income: number
}

export type UserModel = Model<IUser, Record<string, unknown>>

//export type UserModel = Model<IUser>
