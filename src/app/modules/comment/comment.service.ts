import { Types } from 'mongoose'
import Post from '../post/post.model'
import { TComment } from './comment.interface'
import Comment from './comment.model'

const commentIntoPost = async (id: string, payload: TComment) => {
  const post = await Post.findById(id)
  if (!post) {
    throw new Error('Post not found')
  }
  const result = await Comment.create(payload)

  // Increment the commentsCount by 1
  post.commentsCount = (post.commentsCount || 0) + 1

  // Save the updated post
  await post.save()

  return result
}