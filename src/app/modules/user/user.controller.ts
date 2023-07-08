import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service '

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body

    const result = await UserService.createUser(user)
    next()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully',
      data: result,
    })
  }
)

const getAllUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.getAllUser()

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Users found successfully',
      data: result,
    })
    next()
  }
)
const getSingleUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    const result = await UserService.getSinglelUser(id)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'One user find successfully',
      data: result,
    })
    next()
  }
)

const updateUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const updatedData = req.body

    const result = await UserService.updatelUser(id, updatedData)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'One record update successfully',
      data: result,
    })
    next()
  }
)

const deleteUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    const result = await UserService.deleteUser(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'One user delete successfully',
      data: result,
    })
    next()
  }
)

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
