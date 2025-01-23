import mongoose, { Schema } from 'mongoose'
import { TComment, TPost } from './post.interface'

// Comment Schema
const CommentSchema: Schema = new Schema<TComment>(
  {
    commenter: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)