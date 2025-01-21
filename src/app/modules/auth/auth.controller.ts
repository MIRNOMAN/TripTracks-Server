import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AuthServices } from './auth.service'
import { getUserInfoFromToken } from '../../utils/getUserInfoFromToken'

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body)
  const { accessToken, user } = result

  res.cookie('refreshToken', accessToken, {
    httpOnly: true,
  })

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    accessToken: accessToken,
    data: user,
  })
})
const passwordRecover = catchAsync(async (req, res) => {
  const payload = await req.body

  const result = await AuthServices.recoverPasswordIntoDB(payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User password recovered successfully',
    data: result,
  })
})
           