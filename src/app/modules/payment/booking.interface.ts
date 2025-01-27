import { Types } from 'mongoose'

export interface TBooking {
  user: Types.ObjectId
  tran_id: string
  status: string
}
