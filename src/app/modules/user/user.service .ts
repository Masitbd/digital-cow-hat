import httpStatus from 'http-status'
import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()

  user.id = id

  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user')
  }

  return createdUser
}

const getAllUser = async () => {
  const result = await User.find({})
  return result
}

const getSinglelUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findOne({ _id: id })
  return result
}

const updatelUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const isExist = await User.findOne({ _id: id })

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !')
  }

  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })

  return result
}

const deleteUser = async (id: string): Promise<IUser | null> => {
  const isExist = await User.findOne({ _id: id })
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !')
  }
  const result = await User.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  )
  return result
}

export const UserService = {
  createUser,
  getAllUser,
  getSinglelUser,
  updatelUser,
  deleteUser,
}
