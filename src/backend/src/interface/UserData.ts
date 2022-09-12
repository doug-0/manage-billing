import { Types } from 'mongoose';

/* eslint-disable semi */
export interface UserData {
  email: string,
  password: string,
};

export interface UserDataBase {
  _id: Types.ObjectId,
  email: string,
  password: string,
};
