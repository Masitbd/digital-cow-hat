import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { CowService } from './cow.service'

const createCow = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { cowData } = req.body

    const result = await CowService.createCow(cowData)
    next()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New cow created successfully',
      data: result,
    })
  }
)

const getAllCow = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CowService.getAllCow()

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cows found successfully',
      data: result,
    })
    next()
  }
)

const getSingleCow = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    const result = await CowService.getSinglelCow(id)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'One cow find successfully',
      data: result,
    })
    next()
  }
)

const updateCow = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const updatedData = req.body

    const result = await CowService.updatelCow(id, updatedData)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'One record update successfully',
      data: result,
    })
    next()
  }
)

const deleteCow = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    const result = await CowService.deleteCow(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'One cow delete successfully',
      data: result,
    })
    next()
  }
)

export const CowController = {
  createCow,
  getAllCow,
  getSingleCow,
  updateCow,
  deleteCow,
}
