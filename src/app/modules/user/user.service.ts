import { User } from "./user.model"



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

  const getUserByIdFromDB = async (id: string) => {
    const result = await User.findById(id).populate(
      'following followers',
      '_id name avatar',
    )
    if (!result) {
      throw new Error('User not found!')
    }
    return result
  }

  const getMyBookingsFromDb = async (email: string) => {
    // const result = await Booking.find().populate('customer')
    const user = await User.findOne({ email })
    if (user) {
      const result = await Booking.find({
        customer: user._id,
        status: { $ne: 'pending' },
      })
        .populate('service', '_id name description price duration')
        .populate('slot', '_id service date startTime endTime isBooked')
        .select('-customer')
        .sort({ createdAt: -1 })
        .lean()
      return result
    }
  }
  type FollowPayload = {
    userId: string // Assuming you're passing userId and targetedId as strings
    targetedId: string
  }