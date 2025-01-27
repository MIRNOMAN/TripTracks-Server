const createBooking = catchAsync(async (req, res) => {
    const token = req.headers.authorization
    const bookingData = req.body
  
    const { email } = getUserInfoFromToken(token as string)
  
    const result = await bookingServices.createBookingIntoDB(email, bookingData)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking successful',
      data: result,
    })
  })
  