


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