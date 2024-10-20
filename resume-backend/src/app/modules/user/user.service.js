import httpStatus from 'http-status';
import { User } from './user.model.js';
import ApiError from '../../../errors/ApiError.js';
import { jwtHelpers } from '../../../helpers/jwtHelper.js';
import cloudinary from 'cloudinary';
import config from '../../../config/config.js';
import jwt from 'jsonwebtoken';
import { resetMail } from '../../../utils/resetMail.js';
import bcrypt from 'bcrypt';

cloudinary.v2.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret,
});



const createGoogleUser = async payload => {
  const { email } = payload;

  const isUserExist = await User.isUserExist(email);

  const token = jwtHelpers.createToken({
    email,
    role: 'user',
  });

  if (isUserExist) {
    return token;
  }

  await User.create(payload);
  return token;
};

// Creating user
const signup = async payload => {
  const { email } = payload;

  const isUserExist = await User.findOne({ email: payload?.email });

  if (isUserExist) {
    throw new ApiError(400, 'User already exists');
  }

  const user = await User.create(payload);

  const token = jwtHelpers.createToken({
    email,
    role: user.role || 'user',
  });

  return token;
};

const signin = async payload => {
  const { email, password } = payload;

  const isUserExist = await User.findOne({ email });

  if (!isUserExist) {
    throw new ApiError(400, 'User does not exist');
  }

  const isPasswordMatch =
    isUserExist.password &&
    (await User.isPasswordMatch(password, isUserExist?.password));

  if (!isPasswordMatch) {
    throw new ApiError(400, 'Incorrect password!');
  }

  const token = jwtHelpers.createToken({
    email: email,
    role: isUserExist.role,
    id: isUserExist._id,
  });

  return token;
};

const getUserProfile = async email => {
  const result = await User.findOne({
    email,
  });

  return result;
};

const getAllUsers = async role => {
  let query;
  if (role) query = { role };
  else query = {};

  const admins = await User.find(query);
  return admins;
};

const deleteUser = async id => {
  const isExist = await User.findById(id);
  if (!isExist) {
    throw new ApiError(httpStatus[500], 'User not found!');
  }

  const result = await User.findByIdAndDelete(id);
  return result;
};

const updateUserImage = async (id, file) => {
  let isExist = await User.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not found');
  }

  if (!file?.path) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'No image uploaded!');
  }

  const cloudRes = await cloudinary.v2.uploader.upload(file.path);
  const imageUrl = cloudRes.secure_url;

  isExist.image = imageUrl;

  const result = await isExist.save();
  return result;
};

const updateUser = async (id, payload, file) => {
  if (file?.path) {
    const result = await cloudinary.v2.uploader.upload(file.path);
    const imageUrl = result.secure_url;

    payload.image = imageUrl;
  }

  if (payload.password) {
    payload.password = await bcrypt.hash(
      payload.password,
      Number(config.bcrypt_salt_rounds),
    );
  }

  const updatedUser = await User.findByIdAndUpdate(id, payload, { new: true });

  if (!updatedUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not found');
  }

  return updatedUser;
};

const forgotPassword = async payload => {
  const { email } = payload;

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(500, 'User not found');
  }

  const token = jwt.sign({ email }, 'jahidishere', {
    expiresIn: '1h',
  });
  user.resetPasswordToken = token;
  await user.save();

  await resetMail(email, token);

  return 'Mail sent';
};

const resetPassword = async payload => {
  const { newPassword, token } = payload;

  const decoded = jwtHelpers.verifyToken(token);

  const { email } = decoded;

  const user = await User.findOne({ email });

  if (!user || user.resetPasswordToken !== token) {
    throw new ApiError(500, 'Invalid token');
  }

  user.password = newPassword;
  user.resetPasswordToken = undefined;

  const result = await user.save();

  return result;
};




export const UserService = {
  signin,
  signup,
  getUserProfile,
  getAllUsers,
  deleteUser,
  createGoogleUser,
  updateUserImage,
  updateUser,
  forgotPassword,
  resetPassword,
};
