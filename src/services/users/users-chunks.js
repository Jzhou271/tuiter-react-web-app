import * as userService from "./users-service";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const findAllUsersThunk = createAsyncThunk(
    'users/findAll',
    async () => {
      const users = await userService.findAllUsers();
      return users;
    });

export const findAllUsersByIdThunk = createAsyncThunk(
    'users/findById',
    async (id) => {
      const users = await userService.findUserById();
      return users;
    });

export const createUserThunk = createAsyncThunk(
    'users/create',
    async (user) => {
      await userService.createUser(user);
      return user;
    });

export const updateUserThunk = createAsyncThunk(
    'users/update',
    async (user) => {
      await userService.updateUser(user);
      return user;
    });

export const deleteUserThunk = createAsyncThunk(
    'users/delete',
    async (id) => {
      await userService.deleteUser(id);
      return id;
    });

export const loginThunk = createAsyncThunk(
    'users/login',
    async (user) => {
      const response = await userService.login(user);
      return response.data;
    });

export const logoutThunk = createAsyncThunk(
    'users/logout',
    async () => {
      await userService.logout();
    });

export const registerThunk = createAsyncThunk(
    'users/register',
    async (user) => {
      await userService.register(user);
    });

export const profileThunk = createAsyncThunk(
    'users/profile',
    async () => {
      const response = await userService.profile();
      return response.data;
    });