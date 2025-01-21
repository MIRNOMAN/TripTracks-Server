import httpStatus from 'http-status'
import config from '../../config'
import AppError from '../../errors/AppError'
import { TLoginUser } from './auth.interface'
import { createToken } from './auth.utils'
import { User } from '../user/user.model'
import bcrypt from 'bcrypt'
import { TRecoverPassword, TUser } from '../user/user.interface'

export const generateToken = (user: TUser) => {
  const jwtPayload = {
    email: user.email,
    role: user.role,
    status: user.status,
    id: user._id,
  }

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  )
  return accessToken
}