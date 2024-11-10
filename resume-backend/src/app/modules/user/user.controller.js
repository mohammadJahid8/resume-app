/* eslint-disable no-prototype-builtins */
/**
 * Controller functions for handling user-related operations.
 * Includes functions for user authentication (signup, signin, logout),
 * user management (get all users, delete user),
 * and user profile retrieval.
 */

import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.js';
import sendResponse from '../../../shared/sendResponse.js';
import { UserService } from './user.service.js';

const createGoogleUser = catchAsync(async (req, res) => {
  const result = await UserService.createGoogleUser(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Google user successfully',
    data: result,
  });
});

const signup = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await UserService.signup(payload);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User created successfully',
    data: result,
  });
});

const signin = catchAsync(async (req, res) => {
  const result = await UserService.signin(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User signed in successfully',
    data: result,
  });
});

const getUserProfile = catchAsync(async (req, res) => {
  const result = await UserService.getUserProfile(req?.user?.email);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User profile got successfully!',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const { role } = req.query;

  const result = await UserService.getAllUsers(role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All users got!',
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const result = await UserService.deleteUser(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully!',
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  let updatedData = req.body;

  updatedData = JSON.parse(JSON.stringify(updatedData));
  for (let key in updatedData) {
    if (updatedData.hasOwnProperty(key) && updatedData[key] === '') {
      delete updatedData[key];
    }
  }

  const result = await UserService.updateUser(
    req.params.id,
    updatedData,
    req.file,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully!',
    data: result,
  });
});
const updateUserImage = catchAsync(async (req, res) => {
  const result = await UserService.updateUserImage(req.params.id, req.file);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User image updated successfully!',
    data: result,
  });
});

const forgotPassword = catchAsync(async (req, res) => {
  const result = await UserService.forgotPassword(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Password Reset link sent!',
    data: result,
  });
});

const resetPassword = catchAsync(async (req, res) => {
  const result = await UserService.resetPassword(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Password reset success!',
    data: result,
  });
});


const uploadResume = catchAsync(async (req, res) => {
  const result = await UserService.uploadResume(req.file);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Resume uploaded successfully!',
    data: result,
  });
});



export const UserController = {
  createGoogleUser,
  signup,
  signin,
  getAllUsers,
  deleteUser,
  getUserProfile,
  updateUserImage,
  updateUser,
  forgotPassword,
  resetPassword,
  uploadResume,
};
