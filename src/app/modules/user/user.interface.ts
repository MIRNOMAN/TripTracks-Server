import { Model, Types } from 'mongoose'
import { USER_ROLE } from './user.constant'

export type TUser = {
  _id: string
  name: string
  email: string
  password: string
  phone: string
  role: 'admin' | 'user'
  status: 'basic' | 'premium'
  address?: string
  avatar: string
  following: Types.ObjectId[] // Use array of ObjectIds directly without wrapping in an object
  followers: Types.ObjectId[] // Same for followers
}