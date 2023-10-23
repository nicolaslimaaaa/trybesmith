import { Request, Response } from 'express';
import UserService from '../service/User';
import mapStatusCode from '../utils/mapStatusCode';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  const { status, data } = await UserService.login({ username, password });

  return res.status(mapStatusCode(status)).json(data);
};

export default {
  login,
};