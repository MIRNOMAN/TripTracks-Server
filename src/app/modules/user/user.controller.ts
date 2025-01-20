

const createUser = catchAsync(async (req, res) => {
    const userInfo = req.body
    const files = req.files as { avatar?: Express.Multer.File[] }
    const userAvatar = files?.avatar?.[0]?.path
  
    const userData: TUser = {
      ...userInfo,
      avatar: userAvatar,
    }
  
    const result = await userServices.createUserIntoDb(userData)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User registered successfully',
      data: result,
    })
  })

  const getAllUser = catchAsync(async (req, res) => {
    const result = await User.find()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User retrieved successfully',
      data: result,
    })
  })