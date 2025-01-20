


const createUserIntoDb = async (userData: TUser) => {
    const result = await User.create(userData)
    return result
  }