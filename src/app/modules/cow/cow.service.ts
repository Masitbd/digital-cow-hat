import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { ICow } from './cow.interface'
import { Cow } from './cow.model'

const createCow = async (payload: ICow): Promise<ICow> => {
  const result = await Cow.create(payload)
  return result
}

const getAllCow = async () => {
  const result = await Cow.find({})
  return result
}
const getSinglelCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findOne({ _id: id })
  return result
}

const updatelCow = async (
  id: string,
  payload: Partial<ICow>
): Promise<ICow | null> => {
  const isExist = await Cow.findOne({ _id: id })

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !')
  }

  const result = await Cow.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })

  return result
}

const deleteCow = async (id: string): Promise<ICow | null> => {
  const isExist = await Cow.findOne({ _id: id })
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !')
  }
  const result = await Cow.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  )
  return result
}

export const CowService = {
  createCow,
  getAllCow,
  getSinglelCow,
  updatelCow,
  deleteCow,
}
