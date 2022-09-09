import { Request, Response } from 'express';
import UserService from '../services/User.service';

import ControllerErrors from '../interface/ControllerErrors';

class UserController {
  static loginUser = async (req: Request, res: Response): Promise<typeof res> => {
    const { email, password } = req.body;

    try {
      const isLogged = await UserService.loginUser({ email, password });

      if (!isLogged) return res.status(404).json(ControllerErrors.badRequest);

      return res.status(200).json(isLogged);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
}

export default UserController;
