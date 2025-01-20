


const createUserIntoDb = async (userData: TUser) => {
    const result = await User.create(userData)
    return result
  }

  const updateUserIntoDB = async (id: string, payload: Partial<TUser>) => {
    const result = await User.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    })
    return result
  }

  const updateUserRoleIntoDB = async (id: string, payload: Partial<TUser>) => {
    const result = await User.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    })
    return result
  }

  const getUserFromDB = async (email: string) => {
    const result = await User.findOne({ email }).populate(
      'following followers',
      '_id name avatar',
    )
    return result
  }