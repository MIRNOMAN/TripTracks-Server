import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'
import { TPost } from './post.interface'
import { TImageFile } from '../../interface/image.interface'
import { postServices } from './post.service'
import Post from './post.model'
import { getUserInfoFromToken } from '../../utils/getUserInfoFromToken'

const createPost = catchAsync(async (req, res) => {
  const postInfo = req.body
  const file = req.file as TImageFile
  const imagePath = file?.path
  const payload = {
    ...postInfo,
    cover: imagePath,
  }

  const result = await postServices.createPostIntoDB(payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post created successfully',
    data: result,
  })
})

const updatePost = catchAsync(async (req, res) => {
    const { id } = req.params
    const postInfo = req.body
  
    const file = req.file as TImageFile
    const imagePath = file?.path
  
    const payload: Partial<TPost> = {
      ...postInfo,
      ...(imagePath ? { cover: imagePath } : {}),
    }
  
    const result = await postServices.updatePostIntoDB(id, payload)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Post updated successfully',
      data: result,
    })
  })

  const getAllPosts = catchAsync(async (req, res) => {
    const query = req.query
    const result = await postServices.getAllPostsFromDB(query)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Posts retrieved successfully',
      data: result,
    })
  })

  const getAllAcInacPosts = catchAsync(async (req, res) => {
    const result = await Post.find().populate('author', '_id name status avatar')
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Posts retrieved successfully',
      data: result,
    })
  })