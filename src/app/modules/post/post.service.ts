import { Types } from 'mongoose'
import { TPost } from './post.interface'
import Post from './post.model'
import { SortOrder } from 'mongoose'

const createPostIntoDB = async (payload: TPost) => {
  const result = await Post.create(payload)
  return result
}