const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc      Register user
// @route     GET /api/v1/auth/register
// @access    Public
exports.registerUsers = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role
  });

  // Get signed token
  const token = user.getSignedJwtToken();


  res.status(200).json({ success: true, token });

});

// @desc      Login user
// @route     GET /api/v1/auth/login
// @access    Public
exports.loginUsers = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Check  if email entered and password
  if (!email || !password) {
    return next(new ErrorResponse(`Please enter email and password`, 400));
  }

  // Bring the user from the DB
  const user = await User.findOne({ email }).select('+password');

  // Check if the user exist
  if (!user) {
    return next(new ErrorResponse(`Invalid email or password`, 401));
  }

  // Check the password
  const isMatch = await user.checkPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse(`Invalid email or password`, 401));
  }

  // Get signed token
  const token = user.getSignedJwtToken();

  res.status(200).json({ success: true, token });

});






