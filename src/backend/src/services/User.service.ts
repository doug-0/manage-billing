import { compare } from 'bcrypt';
import UserModel from '../database/models/UserModel';

import { UserData, UserDataBase } from '../interface/UserData';

class UserService {
  static loginUser = async ({ email, password }: UserData): Promise<UserDataBase | null | void> => {
    try {
      const existingUser = await UserModel.findOne({ email });

      const passwordUserDb = existingUser?.password;

      const checkPasswordUser = await compare(password, passwordUserDb!);

      if (!checkPasswordUser || !existingUser) return null;

      return existingUser as UserDataBase;
    } catch (error) {
      return console.log(error);
    }
  };
}

export default UserService;
