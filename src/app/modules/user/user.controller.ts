

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


  const getSiteStatistics = catchAsync(async (req, res) => {
    const totalUsers = await User.countDocuments()
    const totalPremiumUsers = await User.countDocuments({ status: 'premium' })
    const totalBasicUsers = await User.countDocuments({ status: 'basic' })
  
    const totalContents = await Post.countDocuments()
    const totalInactiveContents = await Post.countDocuments({ isActive: false })
  
    const result = {
      totalUsers: totalUsers,
      totalPremiumUsers: totalPremiumUsers,
      totalBasicUsers: totalBasicUsers,
      totalContents: totalContents,
      totalActiveContents: totalContents - totalInactiveContents,
      totalInactiveContents: totalInactiveContents,
    }
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Site statistics retrieved successfully',
      data: result,
    })
  })
  const getUserByEmail = catchAsync(async (req, res) => {
    const token = req.headers.authorization
    const { email } = getUserInfoFromToken(token as string)
    const result = await userServices.getUserFromDB(email)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User retrieved successfully',
      data: result,
    })
  })


  const getUserById = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await userServices.getUserByIdFromDB(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User retrieved successfully',
      data: result,
    })
  })

  const getSingleUser = catchAsync(async (req, res) => {
    const { email } = req.params
    const result = await userServices.getUserFromDB(email)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User retrieved successfully',
      data: result,
    })
  })


  const updateUser = catchAsync(async (req, res) => {
    const { id } = req.params
    const userInfo = req.body
    const files = req.files as { avatar?: Express.Multer.File[] }
    const userAvatar = files?.avatar?.[0]?.path
  
    const updatedUserData: Partial<TUser> = {
      ...userInfo,
      ...(userAvatar ? { avatar: userAvatar } : {}), // Only include avatar if it exists
    }
    const result = await userServices.updateUserIntoDB(id, updatedUserData)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User updated successfully',
      data: result,
    })
  })