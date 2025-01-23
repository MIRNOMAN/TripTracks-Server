import { Types } from 'mongoose'

type TCategory =
  | 'adventure'
  | 'eco-tourism'
  | 'luxury'
  | 'wellness'
  | 'cultural'
  | 'culinary'
  | 'historical'
  | 'beach'
  | 'mountain'
  | 'road trip'
  | 'travel'

export interface TComment {
  commenter: Types.ObjectId
  content: string
  _id: string
}